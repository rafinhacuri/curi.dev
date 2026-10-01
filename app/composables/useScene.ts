import type { MaybeRefOrGetter } from 'vue'

type Tone = 'light' | 'dark'
type Mood = 'idle' | 'wave' | 'lost'

interface ScenePose {
  x: number
  y: number
  scale: number
  turn: number
}

interface SceneState {
  bot: ScenePose
  orbits: number
  layers: ScenePose & { show: number; explode: number; active: number }
  mood: Mood
}

interface StageContext {
  progress: number
  mobile: boolean
}

interface StageDefinition {
  tone: Tone
  state: (ctx: StageContext) => SceneState
}

interface RegisteredStage extends StageDefinition {
  id: number
  el: HTMLElement
}

const hiddenLayers: SceneState['layers'] = {
  x: 0.5,
  y: -1.6,
  scale: 1,
  turn: -0.6,
  show: 0,
  explode: 0,
  active: -1,
}

function scene(partial: {
  bot: ScenePose
  orbits?: number
  layers?: Partial<SceneState['layers']>
  mood?: Mood
}): SceneState {
  return {
    bot: partial.bot,
    orbits: partial.orbits ?? 0,
    layers: { ...hiddenLayers, ...partial.layers },
    mood: partial.mood ?? 'idle',
  }
}

const stages = shallowRef<RegisteredStage[]>([])
let nextId = 0

const sceneSignals = reactive({
  orbitFocus: -1,
  poke: 0,
})

function useStage(
  target: MaybeRefOrGetter<HTMLElement | null | undefined>,
  definition: StageDefinition,
): void {
  nextId += 1
  const id = nextId

  onMounted(() => {
    const el = toValue(target)
    if (!el) return
    stages.value = [...stages.value, { ...definition, id, el }]
  })

  onBeforeUnmount(() => {
    stages.value = stages.value.filter((stage) => stage.id !== id)
  })
}

export type { Mood, RegisteredStage, ScenePose, SceneState, StageContext, StageDefinition, Tone }
export { scene, sceneSignals, stages as sceneStages, useStage }
