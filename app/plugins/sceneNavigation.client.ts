export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  router.beforeEach((to, from) => {
    if (to.path !== from.path) navigateScene(to.hash || 0, true)
    else if (to.hash !== from.hash) navigateScene(to.hash || 0)
  })

  watch(sceneStages, sceneStagesChanged)
  nuxtApp.hook('page:finish', sceneRouteReady)

  useEventListener('scroll', settleScene, { passive: true })
  useEventListener(['wheel', 'touchstart', 'keydown'], sceneArrived, { passive: true })
})
