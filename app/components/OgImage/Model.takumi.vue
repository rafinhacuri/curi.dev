<script setup lang="ts">
  defineProps({
    title: { type: String, default: 'Rafael Curi' },
    description: { type: String, default: 'Full Stack Developer' },
  })
</script>

<template>
  <div class="flex h-full w-full bg-zinc-950 p-12">
    <div
      class="flex self-start bg-yellow-300 px-4 py-2 text-[22px] font-bold tracking-[0.15em] text-black uppercase">
      Rafael Curi
    </div>
    <div class="mt-8 flex text-[64px] leading-tight font-bold text-white uppercase">
      {{ title }}
    </div>
  </div>
</template>
