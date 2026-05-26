<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { finalizePendingLocaleChange, locale } = useI18n()

async function onBeforeEnter(): Promise<void> {
  await finalizePendingLocaleChange()
}
</script>

<template> 
  <UApp :toaster="{expand: false}" :locale="locales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#FACC15. 0%,#CA8A04 100%)" />
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    </NuxtLayout>
  </UApp>
</template>
