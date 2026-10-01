<script setup lang="ts">
  import type { SceneDestination, SceneState, Tone } from '~/composables/useScene'
  import { orbits, ringOf } from '~/data/content'
  import { direct } from '~/lib/three/director'
  import type { SceneCanvases, SceneEngine } from '~/lib/three/engine'

  const INTERACTIVE = 'a, button, input, label, [role="button"], [role="dialog"]'

  const frontCanvas = useTemplateRef<HTMLCanvasElement>('front')
  const backCanvas = useTemplateRef<HTMLCanvasElement>('back')
  const ready = ref(false)
  const reducedMotion = usePreferredReducedMotion()
  const isMobile = useMediaQuery('(max-width: 767px)')
  const visibility = useDocumentVisibility()
  const { width, height } = useWindowSize()
  const { pixelRatio } = useDevicePixelRatio()

  let engine: SceneEngine | null = null
  let target: SceneState = scene({ bot: { x: 0, y: -1.8, scale: 0.6, turn: 0 } })
  let tone: Tone = 'light'
  let pointer: { x: number; y: number } | null = null

  function toDevice(clientX: number, clientY: number): { x: number; y: number } {
    return {
      x: (clientX / globalThis.innerWidth) * 2 - 1,
      y: -((clientY / globalThis.innerHeight) * 2 - 1),
    }
  }

  function applyTone(next: Tone): void {
    tone = next
    if (document.documentElement.dataset.tone !== next) document.documentElement.dataset.tone = next
  }

  function destinationTop(destination: SceneDestination): number {
    if (typeof destination === 'number') return destination
    const element = document.querySelector(destination)
    if (!element) return globalThis.scrollY
    return element.getBoundingClientRect().top + globalThis.scrollY
  }

  function destinationOffset(): number {
    const { destination } = sceneSignals
    if (destination === null) return 0
    const maxScroll = document.documentElement.scrollHeight - globalThis.innerHeight
    const offset = clamp(destinationTop(destination), 0, maxScroll) - globalThis.scrollY
    if (Math.abs(offset) < 2) {
      sceneArrived()
      return 0
    }
    return offset
  }

  function update(): void {
    if (sceneSignals.routing) return
    const direction = direct(
      sceneStages.value,
      globalThis.innerHeight,
      isMobile.value,
      destinationOffset(),
    )
    if (!direction) return
    target = direction.state
    applyTone(direction.tone)
  }

  const { pause, resume } = useRafFn(
    ({ delta }) => {
      if (!engine) return
      update()
      engine.frame(delta / 1000, {
        target,
        pointer,
        tone,
        orbitFocus: sceneSignals.orbitFocus,
        reducedMotion: reducedMotion.value === 'reduce',
      })
      ready.value = true
    },
    { immediate: false },
  )

  watch(visibility, (state) => {
    if (state === 'visible' && engine) resume()
    else pause()
  })

  watch([width, height, pixelRatio], () => {
    engine?.resize(width.value, height.value, pixelRatio.value)
  })

  watch(
    () => sceneSignals.poke,
    () => engine?.poke(),
  )

  useEventListener(
    globalThis,
    'pointermove',
    (event: PointerEvent) => {
      pointer = event.pointerType === 'touch' ? null : toDevice(event.clientX, event.clientY)
    },
    { passive: true },
  )

  useEventListener(document, 'pointerleave', () => {
    pointer = null
  })

  useEventListener(globalThis, 'click', (event: MouseEvent) => {
    if (!engine) return
    if (event.target instanceof Element && event.target.closest(INTERACTIVE)) return
    const { x, y } = toDevice(event.clientX, event.clientY)
    if (engine.pick(x, y)) sceneSignals.poke += 1
  })

  function updateWithoutEngine(): void {
    if (!engine) update()
  }

  useEventListener('scroll', updateWithoutEngine, { passive: true })
  watch(
    [sceneStages, (): boolean => sceneSignals.routing, (): unknown => sceneSignals.destination],
    () => nextTick(updateWithoutEngine),
  )

  function supportsWebGL(): boolean {
    return document.createElement('canvas').getContext('webgl2') !== null
  }

  async function createEngine(canvases: SceneCanvases): Promise<SceneEngine | null> {
    try {
      const { SceneEngine } = await import('~/lib/three/engine')
      const electronsPerRing = orbits.map((_, index) => orbits[ringOf(index)]?.tools.length ?? 0)
      return new SceneEngine(canvases, target, electronsPerRing)
    } catch (error) {
      console.error('3D scene unavailable, continuing without it.', error)
      return null
    }
  }

  onMounted(async () => {
    update()
    if (!supportsWebGL()) return
    const front = await until(frontCanvas).toBeTruthy()
    const back = await until(backCanvas).toBeTruthy()
    engine = await createEngine({ front, back })
    if (!engine) return
    engine.resize(width.value, height.value, pixelRatio.value)
    if (visibility.value === 'visible') resume()
  })

  onBeforeUnmount(() => {
    pause()
    engine?.dispose()
    engine = null
  })
</script>

<template>
  <div aria-hidden="true">
    <canvas
      ref="back"
      class="scene-canvas pointer-events-none fixed inset-0 z-0 h-dvh w-full"
      :data-ready="ready" />
    <canvas
      ref="front"
      class="scene-canvas pointer-events-none fixed inset-0 z-40 h-dvh w-full"
      :data-ready="ready" />
  </div>
</template>
