import type { Camera, Object3D, Texture } from 'three'
import {
  DirectionalLight,
  NeutralToneMapping,
  PMREMGenerator,
  SRGBColorSpace,
  Scene,
  WebGLRenderer,
} from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

import { GLOW } from './materials'

class RenderLayer {
  readonly scene = new Scene()
  private readonly renderer: WebGLRenderer
  private readonly pmrem: PMREMGenerator
  private readonly environment: Texture
  private readonly key = new DirectionalLight('#ffffff', 1.4)
  private readonly rim = new DirectionalLight(GLOW, 0)
  private drawn = false

  constructor(canvas: HTMLCanvasElement) {
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

    this.key.position.set(-4, 6, 7)
    this.rim.position.set(4, 3, -6)
    this.scene.add(this.key, this.rim)
  }

  add(...objects: Object3D[]): void {
    this.scene.add(...objects)
  }

  resize(width: number, height: number, pixelRatio: number): void {
    this.renderer.setPixelRatio(pixelRatio)
    this.renderer.setSize(width, height, false)
  }

  light(dark: number): void {
    this.key.intensity = 1.5 - dark * 0.45
    this.rim.intensity = dark * 3.4
    this.scene.environmentIntensity = 1 - dark * 0.45
  }

  render(camera: Camera, active = true): void {
    if (!active && !this.drawn) return
    this.renderer.render(this.scene, camera)
    this.drawn = active
  }

  dispose(onObject: (object: Object3D) => void): void {
    this.scene.traverse(onObject)
    this.environment.dispose()
    this.pmrem.dispose()
    this.renderer.dispose()
  }
}

export { RenderLayer }
