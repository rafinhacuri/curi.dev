<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

const { finalizePendingLocaleChange } = useI18n()

async function onBeforeEnter(){
  await finalizePendingLocaleChange()
}
</script>

<template>
  <SpeedInsights />
  <Analytics />
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#FACC15. 0%,#CA8A04 100%)" />
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
