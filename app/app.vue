<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

const { finalizePendingLocaleChange } = useI18n()

async function onBeforeEnter(){
  await finalizePendingLocaleChange()
}
</script>

<template>
  <UApp :toaster="{expand: false}">
    <SpeedInsights />
    <Analytics />
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#FACC15. 0%,#CA8A04 100%)" />
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    </NuxtLayout>
  </UApp>
</template>

<!-- eslint-disable-next-line vue/no-restricted-block -->
<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(2px);
  }
}

.page-enter-active {
  animation: fadeIn 0.4s ease-out;
}

.page-leave-active {
  animation: fadeOut 0.4s ease-in;
}
</style>
