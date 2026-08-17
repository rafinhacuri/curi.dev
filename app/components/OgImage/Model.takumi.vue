<script setup lang="ts">
  defineProps({
    title: { type: String, default: 'Rafael Curi' },
    description: { type: String, default: 'Full Stack Developer' },
  })
</script>

<template>
  <div class="flex h-full w-full bg-zinc-950 p-12">
    <div
      class="flex h-full w-full flex-col justify-center border-4 border-solid border-cyan-200 bg-black p-14">
      <div
        class="flex self-start bg-yellow-300 px-4 py-2 text-[22px] font-bold tracking-[0.15em] text-black uppercase">
        Rafael Curi
      </div>
      <div class="mt-8 flex text-[64px] leading-tight font-bold text-white uppercase">
        {{ title }}
      </div>
      <div
        class="mt-8 flex border-l-4 border-solid border-pink-400 pl-5 text-[28px] leading-snug text-cyan-100">
        {{ description }}
      </div>
      <div class="mt-10 flex items-center gap-4">
        <div class="flex bg-cyan-300" style="width: 20px; height: 20px" />
        <div class="flex bg-yellow-300" style="width: 20px; height: 20px" />
        <div class="flex bg-pink-400" style="width: 20px; height: 20px" />
        <div class="flex bg-lime-300" style="width: 20px; height: 20px" />
        <div class="ml-2 flex text-[22px] font-bold text-zinc-400 uppercase">curi.dev.br</div>
      </div>
    </div>
  </div>
</template>
