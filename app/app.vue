<script setup lang="ts">
  const { finalizePendingLocaleChange } = useI18n()

  async function onBeforeEnter(): Promise<void> {
    await finalizePendingLocaleChange()
  }
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
  </NuxtLayout>
</template>
