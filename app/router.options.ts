import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized, RouterScrollBehavior } from 'vue-router'
import { START_LOCATION } from 'vue-router'

type ScrollPosition = Awaited<ReturnType<RouterScrollBehavior>>

function positionFor(to: RouteLocationNormalized, behavior: ScrollBehavior): ScrollPosition {
  if (to.hash) return { el: to.hash, behavior }
  return { left: 0, top: 0, behavior: 'instant' }
}

async function nextPageFinish(): Promise<void> {
  const finished = ref(false)
  useNuxtApp().hooks.hookOnce('page:finish', () => {
    finished.value = true
  })
  await until(finished).toBe(true)
  await nextTick()
}

const routerOptions: RouterConfig = {
  async scrollBehavior(to, from) {
    if (from === START_LOCATION) return positionFor(to, 'instant')
    if (to.path === from.path) {
      if (to.hash) return positionFor(to, 'smooth')
      return from.hash ? { left: 0, top: 0, behavior: 'smooth' } : false
    }
    if (!to.hash) return false
    await nextPageFinish()
    requestAnimationFrame(sceneRouteScrolled)
    return positionFor(to, 'instant')
  },
}

export default routerOptions
