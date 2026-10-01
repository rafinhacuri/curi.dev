import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CapsuleGeometry,
  Color,
  Group,
  Mesh,
  Points,
  PointsMaterial,
  SphereGeometry,
  TorusGeometry,
} from 'three'
import type { MeshBasicMaterial, MeshPhysicalMaterial } from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

import { GLOW, clayMaterial, glowMaterial, radialTexture } from './materials'

interface Orbit {
  ring: Mesh<TorusGeometry, MeshBasicMaterial>
  electrons: Mesh[]
  pivot: Group
  speed: number
  focus: number
}

interface Orbits {
  group: Group
  orbits: Orbit[]
}

const orbitShapes = [
  { radius: 1.45, tiltX: 1.2, tiltY: 0.35, speed: 0.42 },
  { radius: 1.9, tiltX: 1.85, tiltY: -0.55, speed: -0.3 },
  { radius: 2.4, tiltX: 1.45, tiltY: 1.05, speed: 0.22 },
]

function createOrbits(counts: number[]): Orbits {
  const group = new Group()
  group.position.y = -0.1
  const electronGeometry = new SphereGeometry(0.055, 16, 12)

  const orbits = orbitShapes.map((shape, index) => {
    const pivot = new Group()
    pivot.rotation.set(shape.tiltX, shape.tiltY, 0)
    group.add(pivot)

    const ring = new Mesh(new TorusGeometry(shape.radius, 0.0065, 8, 240), glowMaterial(GLOW, 0.5))
    pivot.add(ring)

    const count = counts[index] ?? 5
    const electrons = Array.from({ length: count }, () => {
      const electron = new Mesh(electronGeometry, glowMaterial())
      pivot.add(electron)
      return electron
    })

    return { ring, electrons, pivot, speed: shape.speed, focus: 0 }
  })

  return { group, orbits }
}

interface Slab {
  mesh: Mesh<RoundedBoxGeometry, MeshPhysicalMaterial>
  leds: Mesh<CapsuleGeometry, MeshBasicMaterial>[]
  highlight: number
}

interface Stack {
  group: Group
  inner: Group
  slabs: Slab[]
}

const slabTints = ['#d9d9df', '#e2e2e7', '#eaeaee', '#f1f1f4', '#f8f8fa']

function createStack(): Stack {
  const group = new Group()
  const inner = new Group()
  inner.rotation.x = 0.38
  group.add(inner)

  const geometry = new RoundedBoxGeometry(2.6, 0.26, 1.7, 5, 0.1)
  const ledGeometry = new CapsuleGeometry(0.022, 0.1, 4, 8)

  const slabs = slabTints.map((tint) => {
    const material = clayMaterial(tint)
    material.emissive = new Color(GLOW)
    material.emissiveIntensity = 0
    const mesh = new Mesh(geometry, material)
    inner.add(mesh)

    const leds = Array.from({ length: 4 }, (_, i) => {
      const led = new Mesh(ledGeometry, glowMaterial(new Color('#b8b8c2')))
      led.rotation.z = Math.PI / 2
      led.position.set(0.8 + i * 0.14, 0, 0.856)
      led.scale.z = 0.4
      mesh.add(led)
      return led
    })

    return { mesh, leds, highlight: 0 }
  })

  return { group, inner, slabs }
}

function createDust(count = 140): Points<BufferGeometry, PointsMaterial> {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 22
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2
  }
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))

  const material = new PointsMaterial({
    size: 0.09,
    map: radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)', 64),
    color: GLOW,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: AdditiveBlending,
    toneMapped: false,
  })

  return new Points(geometry, material)
}

export type { Orbit, Orbits, Slab, Stack }
export { createOrbits, createStack, createDust }
