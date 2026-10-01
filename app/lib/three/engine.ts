import type { BufferGeometry, Material, Object3D } from 'three'
import {
  Color,
  DirectionalLight,
  MathUtils,
  Mesh,
  NeutralToneMapping,
  PMREMGenerator,
  PerspectiveCamera,
  Points,
  Raycaster,
  SRGBColorSpace,
  Scene,
  Texture,
  Vector2,
  WebGLRenderer,
} from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

import type { Mood, SceneState, Tone } from '~/composables/useScene'

import type { Bot } from './bot'
import { createBot } from './bot'
import { GLOW, WARN } from './materials'
import { Spring } from './spring'
import type { Orbits, Stack } from './world'
import { createDust, createOrbits, createStack } from './world'

const CHANNELS = [
  'botX',
  'botY',
  'botScale',
  'botTurn',
  'orbits',
  'layX',
  'layY',
  'layScale',
  'layTurn',
  'layShow',
  'layExplode',
  'layActive',
] as const

type Channel = (typeof CHANNELS)[number]
type Channels<T> = Record<Channel, T>

interface FrameInput {
  target: SceneState
  pointer: { x: number; y: number } | null
  tone: Tone
  orbitFocus: number
  reducedMotion: boolean
}

interface Expression {
  dark: number
  waving: number
  lost: number
}

const FOV = 30
const CAMERA_Z = 12
const BASE_HEIGHT = 6.4
const FRAME_MAX_WIDTH = 1280
const LED_IDLE = new Color('#b8b8c2')

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3
}

function easeInOutCubic(t: number): number {
  if (t < 0.5) return 4 * t * t * t
  return 1 - (-2 * t + 2) ** 3 / 2
}

function channelsOf(state: SceneState): Channels<number> {
  return {
    botX: state.bot.x,
    botY: state.bot.y,
    botScale: state.bot.scale,
    botTurn: state.bot.turn,
    orbits: state.orbits,
    layX: state.layers.x,
    layY: state.layers.y,
    layScale: state.layers.scale,
    layTurn: state.layers.turn,
    layShow: state.layers.show,
    layExplode: state.layers.explode,
    layActive: state.layers.active,
  }
}

function springsOf(start: Channels<number>): Channels<Spring> {
  return {
    botX: new Spring(start.botX),
    botY: new Spring(start.botY - 0.5),
    botScale: new Spring(start.botScale * 0.7),
    botTurn: new Spring(start.botTurn),
    orbits: new Spring(start.orbits),
    layX: new Spring(start.layX),
    layY: new Spring(start.layY),
    layScale: new Spring(start.layScale),
    layTurn: new Spring(start.layTurn),
    layShow: new Spring(start.layShow),
    layExplode: new Spring(start.layExplode),
    layActive: new Spring(start.layActive),
  }
}

function orbitFocusTarget(focusIndex: number, index: number): number {
  if (focusIndex === -1) return 0.6
  return focusIndex === index ? 1 : 0.14
}

function ledLevel(focus: number, time: number, led: number, slab: number): number {
  if (focus <= 0.5) return 0
  return Math.sin(time * 6 + led * 1.9 + slab) > -0.2 ? 1 : 0.35
}

type Renderable =
  | Mesh<BufferGeometry, Material | Material[]>
  | Points<BufferGeometry, Material | Material[]>

function isRenderable(object: Object3D): object is Renderable {
  return object instanceof Mesh || object instanceof Points
}

function disposeObject(object: Object3D): void {
  if (!isRenderable(object)) return
  object.geometry.dispose()
  const materials = Array.isArray(object.material) ? object.material : [object.material]
  for (const material of materials) {
    if ('map' in material && material.map instanceof Texture) material.map.dispose()
    material.dispose()
  }
}

class SceneEngine {
  private readonly renderer: WebGLRenderer
  private readonly scene = new Scene()
  private readonly camera = new PerspectiveCamera(FOV, 1, 0.1, 100)
  private readonly pmrem: PMREMGenerator
  private readonly environment: Texture
  private readonly key = new DirectionalLight('#ffffff', 1.4)
  private readonly rim = new DirectionalLight(GLOW, 0)
  private readonly bot: Bot = createBot()
  private readonly orbits: Orbits
  private readonly stack: Stack = createStack()
  private readonly dust = createDust()
  private readonly raycaster = new Raycaster()
  private readonly springs: Channels<Spring>
  private readonly dark = new Spring(0)
  private readonly waving = new Spring(0)
  private readonly lost = new Spring(0)
  private readonly headYaw = new Spring(0)
  private readonly headPitch = new Spring(0)
  private readonly camX = new Spring(0)
  private readonly camY = new Spring(0)
  private view = { width: 1, height: 1 }
  private time = 0
  private mood: Mood = 'idle'
  private waveTimer = 0
  private blinkIn = 1.8
  private blinkT = -1
  private spinT = -1

  constructor(canvas: HTMLCanvasElement, initial: SceneState, orbitCounts: number[]) {
    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    this.renderer.setClearColor('#000000', 0)
    this.renderer.outputColorSpace = SRGBColorSpace
    this.renderer.toneMapping = NeutralToneMapping
    this.renderer.toneMappingExposure = 1.05

    this.pmrem = new PMREMGenerator(this.renderer)
    this.environment = this.pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    this.scene.environment = this.environment

    this.camera.position.set(0, 0, CAMERA_Z)
    this.key.position.set(-4, 6, 7)
    this.rim.position.set(4, 3, -6)

    this.orbits = createOrbits(orbitCounts)
    this.bot.root.add(this.orbits.group)
    this.scene.add(this.key, this.rim, this.dust, this.stack.group, this.bot.root)

    this.springs = springsOf(channelsOf(initial))
  }

  resize(width: number, height: number, dpr: number): void {
    this.renderer.setPixelRatio(Math.min(dpr, width < 768 ? 1.5 : 1.75))
    this.renderer.setSize(width, height, false)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    const visibleHeight = 2 * Math.tan(MathUtils.degToRad(FOV / 2)) * CAMERA_Z
    const frameRatio = Math.min(1, FRAME_MAX_WIDTH / width)
    this.view = { width: visibleHeight * this.camera.aspect * frameRatio, height: visibleHeight }
  }

  poke(): void {
    if (this.spinT < 0) this.spinT = 0
    this.waveTimer = Math.max(this.waveTimer, 1.6)
  }

  pick(x: number, y: number): boolean {
    this.raycaster.setFromCamera(new Vector2(x, y), this.camera)
    return this.raycaster.intersectObject(this.bot.hitbox, false).length > 0
  }

  frame(delta: number, input: FrameInput): void {
    const dt = Math.min(delta, 1 / 30)
    this.time += input.reducedMotion ? dt * 0.3 : dt

    const target = channelsOf(input.target)
    for (const channel of CHANNELS) {
      this.springs[channel].step(target[channel], dt, channel === 'layActive' ? 9 : 6)
    }

    this.updateMood(input.target.mood, dt)
    const expression: Expression = {
      dark: this.dark.step(input.tone === 'dark' ? 1 : 0, dt, 4),
      waving: this.waving.step(this.waveTimer > 0 && !input.reducedMotion ? 1 : 0, dt, 7),
      lost: this.lost.step(this.mood === 'lost' ? 1 : 0, dt, 4),
    }

    this.placeBot(dt, expression, input)
    this.placeOrbits(dt, input.orbitFocus)
    this.placeStack()
    this.light(dt, expression.dark, input)

    this.renderer.render(this.scene, this.camera)
  }

  dispose(): void {
    this.scene.traverse(disposeObject)
    this.environment.dispose()
    this.pmrem.dispose()
    this.renderer.dispose()
  }

  private get scale(): number {
    return this.view.height / BASE_HEIGHT
  }

  private updateMood(mood: Mood, dt: number): void {
    if (mood !== this.mood) {
      if (mood === 'wave') this.waveTimer = 2.6
      this.mood = mood
    }
    this.waveTimer = Math.max(0, this.waveTimer - dt)
  }

  private light(dt: number, dark: number, input: FrameInput): void {
    const { dust, key, rim, scene, camera } = this
    dust.material.opacity = dark * 0.6
    dust.rotation.y += dt * 0.012
    dust.position.y = Math.sin(this.time * 0.12) * 0.25

    key.intensity = 1.5 - dark * 0.45
    rim.intensity = dark * 3.4
    scene.environmentIntensity = 1 - dark * 0.45

    const pointer = input.pointer && !input.reducedMotion ? input.pointer : { x: 0, y: 0 }
    camera.position.x = this.camX.step(pointer.x * 0.3, dt, 3)
    camera.position.y = this.camY.step(pointer.y * 0.18, dt, 3)
    camera.lookAt(0, 0, 0)
  }

  private placeBot(dt: number, expression: Expression, input: FrameInput): void {
    const { root } = this.bot
    const { botX, botY, botScale, botTurn } = this.springs

    root.visible = botScale.value > 0.01
    root.position.set((botX.value * this.view.width) / 2, (botY.value * this.view.height) / 2, 0)
    root.scale.setScalar(Math.max(botScale.value, 0.001) * this.scale)
    root.rotation.y = botTurn.value

    this.animateBody(dt, input.reducedMotion)
    this.animateHead(dt, expression.lost, input)
    this.animateEyes(dt, expression.lost)
    this.animateArms(expression.waving, input.reducedMotion)
    this.animateGlow(expression)
  }

  private animateBody(dt: number, calm: boolean): void {
    const { body } = this.bot
    let hop = 0
    let spin = 0
    let squash = 1
    if (this.spinT >= 0) {
      this.spinT += dt / 1.1
      const progress = easeInOutCubic(Math.min(this.spinT, 1))
      spin = progress * Math.PI * 2
      hop = Math.sin(progress * Math.PI) * 0.35
      squash = 1 + Math.sin(progress * Math.PI) * 0.06
      if (this.spinT >= 1) this.spinT = -1
    }

    const bob = calm ? 0 : Math.sin(this.time * 1.8) * 0.07
    body.position.y = bob + hop
    body.rotation.y = spin
    body.rotation.z = calm ? 0 : Math.sin(this.time * 1.1) * 0.03
    body.scale.set(1 / Math.sqrt(squash), squash, 1 / Math.sqrt(squash))
  }

  private animateHead(dt: number, lost: number, input: FrameInput): void {
    const { botX, botY, botTurn } = this.springs
    let yaw = Math.sin(this.time * 0.4) * 0.12
    let pitch = 0
    if (input.pointer && !input.reducedMotion) {
      yaw = MathUtils.clamp((input.pointer.x - botX.value) * 0.9 - botTurn.value, -0.8, 0.8)
      pitch = MathUtils.clamp(-(input.pointer.y - botY.value) * 0.45, -0.35, 0.35)
    }
    yaw = MathUtils.lerp(yaw, Math.sin(this.time * 0.9) * 0.55, lost)
    pitch = MathUtils.lerp(pitch, 0.12, lost)
    this.bot.head.rotation.set(
      this.headPitch.step(pitch, dt, 8),
      this.headYaw.step(yaw, dt, 8),
      lost * 0.24,
    )
  }

  private animateEyes(dt: number, lost: number): void {
    this.blinkIn -= dt
    if (this.blinkIn <= 0) {
      this.blinkT = 0
      this.blinkIn = 2.2 + Math.random() * 3.5
    }
    let lid = 1
    if (this.blinkT >= 0) {
      this.blinkT += dt
      lid = 1 - Math.sin(Math.min(this.blinkT / 0.16, 1) * Math.PI) * 0.9
      if (this.blinkT > 0.16) this.blinkT = -1
    }
    for (const eye of this.bot.eyes) eye.scale.y = lid * (1 - lost * 0.45)
  }

  private animateArms(waving: number, calm: boolean): void {
    const { armL, armR } = this.bot
    const sway = calm ? 0 : Math.sin(this.time * 1.8 + 1) * 0.05
    armL.rotation.z = -0.2 - sway
    armR.rotation.z = MathUtils.lerp(0.2 + sway, 2.55 + Math.sin(this.time * 11) * 0.32, waving)
    armR.rotation.x = waving * -0.25
  }

  private animateGlow({ dark, lost }: Expression): void {
    const { antennaTip, ring, ringGlow, shadow, body } = this.bot
    const tip = antennaTip.material.color
    tip.copy(GLOW).lerp(WARN, lost)
    if (lost > 0.5) tip.multiplyScalar(Math.sin(this.time * 5) > 0 ? 1 : 0.55)

    ring.material.color.copy(GLOW).multiplyScalar(0.85 + Math.sin(this.time * 3) * 0.15)
    ringGlow.material.opacity = 0.25 + dark * 0.45
    const lift = body.position.y
    shadow.scale.setScalar(1 - lift * 0.9)
    shadow.material.opacity = (1 - dark * 0.8) * (0.9 - lift * 0.8)
  }

  private placeOrbits(dt: number, focusIndex: number): void {
    const { group, orbits } = this.orbits
    const visible = MathUtils.clamp(this.springs.orbits.value, 0, 1)
    group.visible = visible > 0.004
    if (!group.visible) return
    group.scale.setScalar(0.55 + easeOutCubic(visible) * 0.45)

    for (const [index, orbit] of orbits.entries()) {
      orbit.focus = MathUtils.damp(orbit.focus, orbitFocusTarget(focusIndex, index), 6, dt)
      orbit.ring.material.opacity = visible * orbit.focus * 0.75
      orbit.pivot.rotation.z += dt * orbit.speed * 0.08
      const { radius } = orbit.ring.geometry.parameters
      const count = orbit.electrons.length
      for (const [i, electron] of orbit.electrons.entries()) {
        const angle = this.time * orbit.speed * (1 + orbit.focus * 0.6) + (i / count) * Math.PI * 2
        electron.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)
        electron.scale.setScalar(Math.max(visible * (0.55 + orbit.focus * 0.75), 0.001))
      }
    }
  }

  private placeStack(): void {
    const { group, slabs } = this.stack
    const { layX, layY, layScale, layTurn, layShow, layExplode, layActive } = this.springs
    const show = MathUtils.clamp(layShow.value, 0, 1)
    group.visible = show > 0.004
    if (!group.visible) return

    const eased = easeOutCubic(show)
    group.position.set(
      (layX.value * this.view.width) / 2,
      (layY.value * this.view.height) / 2 - (1 - eased) * this.view.height * 0.35,
      0,
    )
    group.scale.setScalar(layScale.value * this.scale * (0.85 + 0.15 * eased))
    group.rotation.y = layTurn.value + Math.sin(this.time * 0.3) * 0.05

    const gap = MathUtils.lerp(0.32, 0.92, MathUtils.clamp(layExplode.value, 0, 1))
    const middle = (slabs.length - 1) / 2
    for (const [i, slab] of slabs.entries()) {
      const reveal = easeOutCubic(MathUtils.clamp(show * 1.6 - i * 0.15, 0, 1))
      const focus = layActive.value < -0.5 ? 0 : Math.max(0, 1 - Math.abs(i - layActive.value))
      slab.highlight = focus
      slab.mesh.scale.setScalar(Math.max(reveal, 0.001))
      slab.mesh.position.set(0, (i - middle) * gap + focus * 0.08, focus * 0.4)
      slab.mesh.material.emissiveIntensity = focus * 0.4
      for (const [j, led] of slab.leds.entries()) {
        led.material.color.copy(LED_IDLE).lerp(GLOW, focus * ledLevel(focus, this.time, j, i))
      }
    }
  }
}

export type { FrameInput }
export { SceneEngine }
