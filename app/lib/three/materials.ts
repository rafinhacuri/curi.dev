import {
  CanvasTexture,
  Color,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  SRGBColorSpace,
} from 'three'

const GLOW = new Color('#6d8dff')
const WARN = new Color('#ff7a45')

function clayMaterial(color = '#f2f2f4'): MeshPhysicalMaterial {
  return new MeshPhysicalMaterial({
    color,
    roughness: 0.46,
    metalness: 0,
    clearcoat: 0.3,
    clearcoatRoughness: 0.4,
    sheen: 0.5,
    sheenRoughness: 0.6,
    sheenColor: new Color('#ffffff'),
  })
}

function glassBlackMaterial(): MeshPhysicalMaterial {
  return new MeshPhysicalMaterial({
    color: '#07080c',
    roughness: 0.1,
    metalness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
  })
}

function softMaterial(color = '#2a2c33'): MeshPhysicalMaterial {
  return new MeshPhysicalMaterial({ color, roughness: 0.55, metalness: 0.05, clearcoat: 0.2 })
}

function glowMaterial(color: Color = GLOW, opacity = 1): MeshBasicMaterial {
  return new MeshBasicMaterial({
    color: color.clone(),
    toneMapped: false,
    transparent: opacity < 1,
    opacity,
  })
}

function radialTexture(inner: string, outer: string, size = 256): CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas 2D context is unavailable')
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, inner)
  gradient.addColorStop(1, outer)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  return texture
}

export { GLOW, WARN, clayMaterial, glassBlackMaterial, softMaterial, glowMaterial, radialTexture }
