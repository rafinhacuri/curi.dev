<script setup lang="ts">
  import { en, pt_br } from '@nuxt/ui/locale'

  const { finalizePendingLocaleChange, locale } = useI18n()
  const uiLocale = computed(() => (locale.value === 'pt' ? pt_br : en))

  async function onBeforeEnter(): Promise<void> {
    await finalizePendingLocaleChange()
  }
</script>

<template>
  <UApp :toaster="{ expand: false }" :locale="uiLocale">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(90deg,#ffffff 0 18%,#70ddff 18% 40%,#8fe35b 40% 62%,#ffffff 62% 100%)"
      :height="4" />
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    </NuxtLayout>
  </UApp>
</template>
