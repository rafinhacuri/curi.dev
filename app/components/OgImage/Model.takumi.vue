<script setup lang="ts">
  const props = defineProps({
    title: { type: String, default: 'Rafael Curi' },
    description: { type: String, default: 'Full Stack Developer' },
  })
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between bg-[#f5f5f7] p-16 text-[#1d1d1f]">
    <div class="flex items-center">
      <div class="flex h-4 w-4 rounded-full bg-[#2553f5]" />
      <div class="ml-4 flex text-[28px] font-semibold">Rafael Curi</div>
    </div>
    <div class="flex flex-col">
      <div class="flex text-[96px] leading-none font-semibold tracking-tight">
        {{ props.title }}
      </div>
      <div class="mt-6 flex max-w-225 text-[32px] leading-snug text-[#6e6e73]">
        {{ props.description }}
      </div>
    </div>
    <div class="flex text-[22px] tracking-widest text-[#6e6e73] uppercase">curi.dev.br</div>
  </div>
</template>
