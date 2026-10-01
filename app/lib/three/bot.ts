import {
  AdditiveBlending,
  CapsuleGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  SphereGeometry,
  TorusGeometry,
} from 'three'

import {
  GLOW,
  clayMaterial,
  glassBlackMaterial,
  glowMaterial,
  radialTexture,
  softMaterial,
} from './materials'

interface Bot {
  root: Group
  body: Group
  head: Group
  eyes: Mesh[]
  armL: Group
  armR: Group
  antennaTip: Mesh<SphereGeometry, MeshBasicMaterial>
  ring: Mesh<TorusGeometry, MeshBasicMaterial>
  ringGlow: Mesh<PlaneGeometry, MeshBasicMaterial>
  shadow: Mesh<PlaneGeometry, MeshBasicMaterial>
  hitbox: Mesh
}

function createBot(): Bot {
  const clay = clayMaterial()
  const visorMat = glassBlackMaterial()
  const trim = softMaterial()
  const glow = glowMaterial()

  const root = new Group()
  const body = new Group()
  root.add(body)

  const head = new Group()
  head.position.y = 0.45
  body.add(head)

  const skull = new Mesh(new SphereGeometry(0.62, 64, 48), clay)
  skull.scale.set(1.1, 0.92, 1)
  head.add(skull)

  const visor = new Mesh(new SphereGeometry(0.6, 64, 48), visorMat)
  visor.scale.set(0.95, 0.66, 0.6)
  visor.position.set(0, -0.02, 0.3)
  head.add(visor)

  const eyeGeometry = new CapsuleGeometry(0.062, 0.11, 8, 16)
  const eyes = [-0.2, 0.2].map((x) => {
    const eye = new Mesh(eyeGeometry, glow)
    eye.position.set(x, 0.01, 0.625)
    eye.scale.z = 0.4
    head.add(eye)
    return eye
  })

  const podGeometry = new CylinderGeometry(0.17, 0.17, 0.14, 40)
  const podRingGeometry = new TorusGeometry(0.1, 0.014, 12, 40)
  for (const side of [-1, 1]) {
    const pod = new Mesh(podGeometry, trim)
    pod.rotation.z = Math.PI / 2
    pod.position.set(side * 0.68, 0, 0)
    head.add(pod)

    const podRing = new Mesh(podRingGeometry, glow)
    podRing.rotation.y = Math.PI / 2
    podRing.position.set(side * 0.755, 0, 0)
    head.add(podRing)
  }

  const antenna = new Mesh(new CylinderGeometry(0.016, 0.02, 0.3, 12), trim)
  antenna.position.set(0.12, 0.66, 0)
  antenna.rotation.z = -0.18
  head.add(antenna)

  const antennaTip = new Mesh(new SphereGeometry(0.058, 24, 16), glowMaterial())
  antennaTip.position.set(0.148, 0.82, 0)
  head.add(antennaTip)

  const torso = new Mesh(new SphereGeometry(0.5, 64, 48), clay)
  torso.scale.set(1, 1.08, 0.86)
  torso.position.y = -0.56
  body.add(torso)

  const chest = new Mesh(new CapsuleGeometry(0.035, 0.18, 6, 16), glow)
  chest.rotation.z = Math.PI / 2
  chest.position.set(0, -0.42, 0.415)
  chest.scale.z = 0.5
  body.add(chest)

  const armGeometry = new CapsuleGeometry(0.1, 0.34, 8, 24)
  const handGeometry = new SphereGeometry(0.12, 32, 24)
  const makeArm = (side: number): Group => {
    const pivot = new Group()
    pivot.position.set(side * 0.47, -0.36, 0)
    pivot.rotation.z = side * 0.2
    const arm = new Mesh(armGeometry, clay)
    arm.position.y = -0.25
    const hand = new Mesh(handGeometry, trim)
    hand.position.y = -0.5
    pivot.add(arm, hand)
    body.add(pivot)
    return pivot
  }
  const armL = makeArm(-1)
  const armR = makeArm(1)

  const ring = new Mesh(new TorusGeometry(0.3, 0.028, 16, 64), glowMaterial())
  ring.rotation.x = Math.PI / 2
  ring.position.y = -1.3
  body.add(ring)

  const ringGlow = new Mesh(
    new PlaneGeometry(1.6, 1.6),
    new MeshBasicMaterial({
      map: radialTexture('rgba(109,141,255,0.9)', 'rgba(109,141,255,0)'),
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      toneMapped: false,
      color: GLOW,
    }),
  )
  ringGlow.rotation.x = -Math.PI / 2
  ringGlow.position.y = -1.32
  body.add(ringGlow)

  const shadow = new Mesh(
    new PlaneGeometry(1.8, 1.8),
    new MeshBasicMaterial({
      map: radialTexture('rgba(0,0,0,0.55)', 'rgba(0,0,0,0)'),
      transparent: true,
      depthWrite: false,
      toneMapped: false,
    }),
  )
  shadow.rotation.x = -Math.PI / 2
  shadow.position.y = -1.75
  root.add(shadow)

  const hitbox = new Mesh(
    new SphereGeometry(0.95, 12, 8),
    new MeshBasicMaterial({ visible: false }),
  )
  hitbox.scale.set(1, 1.3, 1)
  hitbox.position.y = -0.1
  body.add(hitbox)

  return { root, body, head, eyes, armL, armR, antennaTip, ring, ringGlow, shadow, hitbox }
}

export type { Bot }
export { createBot }
