import type { RegisteredStage, ScenePose, SceneState, Tone } from '~/composables/useScene'
import { clamp, mix, smoothstep } from '~/utils/math'

interface Measured {
  stage: RegisteredStage
  rect: DOMRect
}

interface Direction {
  state: SceneState
  tone: Tone
}

const BLEND_BAND = 0.38

function blendPose(from: ScenePose, to: ScenePose, t: number): ScenePose {
  return {
    x: mix(from.x, to.x, t),
    y: mix(from.y, to.y, t),
    scale: mix(from.scale, to.scale, t),
    turn: mix(from.turn, to.turn, t),
  }
}

function blendStates(from: SceneState, to: SceneState, t: number): SceneState {
  const nearer = t < 0.5 ? from : to
  return {
    bot: blendPose(from.bot, to.bot, t),
    orbits: mix(from.orbits, to.orbits, t),
    layers: {
      ...blendPose(from.layers, to.layers, t),
      show: mix(from.layers.show, to.layers.show, t),
      explode: mix(from.layers.explode, to.layers.explode, t),
      active: nearer.layers.active,
    },
    mood: nearer.mood,
  }
}

function distanceTo(rect: DOMRect, line: number): number {
  if (line < rect.top) return rect.top - line
  if (line > rect.bottom) return line - rect.bottom
  return 0
}

function closestIndex(measured: Measured[], line: number): number {
  let best = 0
  for (const [index, { rect }] of measured.entries()) {
    const current = measured[best]
    if (current && distanceTo(rect, line) < distanceTo(current.rect, line)) best = index
  }
  return best
}

function stateOf(entry: Measured, line: number, mobile: boolean): SceneState {
  const progress = clamp((line - entry.rect.top) / entry.rect.height)
  return entry.stage.state({ progress, mobile })
}

function direct(stages: RegisteredStage[], viewport: number, mobile: boolean): Direction | null {
  const measured = stages
    .map((stage) => ({ stage, rect: stage.el.getBoundingClientRect() }))
    .toSorted((a, b) => a.rect.top - b.rect.top)

  const line = viewport / 2
  const band = viewport * BLEND_BAND
  const index = closestIndex(measured, line)
  const current = measured[index]
  if (!current) return null

  const previous = measured[index - 1]
  const next = measured[index + 1]
  const own = stateOf(current, line, mobile)
  const toNext = current.rect.bottom - line
  const fromPrevious = line - current.rect.top

  if (next && toNext < band) {
    const t = smoothstep(0, 1, 0.5 - toNext / (2 * band))
    return { state: blendStates(own, stateOf(next, line, mobile), t), tone: current.stage.tone }
  }
  if (previous && fromPrevious < band) {
    const t = smoothstep(0, 1, 0.5 + fromPrevious / (2 * band))
    return { state: blendStates(stateOf(previous, line, mobile), own, t), tone: current.stage.tone }
  }
  return { state: own, tone: current.stage.tone }
}

export type { Direction }
export { direct }
