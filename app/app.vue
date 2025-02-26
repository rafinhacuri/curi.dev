<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

const { finalizePendingLocaleChange } = useI18n()

async function onBeforeEnter(){
  await finalizePendingLocaleChange()
}
</script>

<template>
  <SpeedInsights />
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#AA3860 0%,#F28AA9 100%)" />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
  </NuxtLayout>
</template>

<!-- eslint-disable-next-line vue/no-restricted-block vue/enforce-style-attribute -->
<style>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    background-color: #020617; /* slate-950 */
    position: relative;
}

body::-webkit-scrollbar {
    background-color: #020617;
}

body::-webkit-scrollbar-thumb {
    background-color: #1e293b;
    border: 4px solid #020617;
}

body::-webkit-scrollbar-track {
    background-color: #020617;
}

div::-webkit-scrollbar {
    background-color: #020617;
}

div::-webkit-scrollbar-thumb {
    background-color: #1e293b;
    border: 4px solid #020617;
}

div::-webkit-scrollbar-track {
    background-color: #020617;
}

.page-enter-active, .page-leave-active {
  transition: all 0.4s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>
