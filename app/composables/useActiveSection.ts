import type { MaybeRefOrGetter, Ref } from 'vue'

function sectionAtCenter(ids: string[]): string | null {
  const center = globalThis.innerHeight / 2
  const match = ids.find((id) => {
    const rect = document.querySelector(`#${id}`)?.getBoundingClientRect()
    return rect !== undefined && rect.top <= center && rect.bottom > center
  })
  return match ?? null
}

function useActiveSection(ids: MaybeRefOrGetter<string[]>): Ref<string | null> {
  const active = ref<string | null>(null)
  const nuxtApp = useNuxtApp()

  function update(): void {
    active.value = sectionAtCenter(toValue(ids))
  }

  useEventListener('scroll', update, { passive: true })
  nuxtApp.hook('page:finish', update)
  onMounted(update)

  return active
}

export { useActiveSection }
