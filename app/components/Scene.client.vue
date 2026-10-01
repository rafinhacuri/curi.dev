<script setup lang="ts">
  import type { SceneState, Tone } from '~/composables/useScene'
  import { orbits, ringOf } from '~/data/content'
  import { direct } from '~/lib/three/director'
  import type { SceneEngine } from '~/lib/three/engine'

  const INTERACTIVE = 'a, button, input, label, [role="button"], [role="dialog"]'

  const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
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

  function update(): void {
    const direction = direct(sceneStages.value, globalThis.innerHeight, isMobile.value)
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

  onMounted(async () => {
    const { SceneEngine } = await import('~/lib/three/engine')
    if (!canvas.value) return
    update()
    const electronsPerRing = orbits.map((_, index) => orbits[ringOf(index)]?.tools.length ?? 0)
    engine = new SceneEngine(canvas.value, target, electronsPerRing)
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
  <canvas
    ref="canvas"
    class="scene-canvas pointer-events-none fixed inset-0 z-0 h-dvh w-full"
    :data-ready="ready"
    aria-hidden="true" />
</template>
