<script setup lang="ts">
</script>

<template>
  <footer class="space-y-4 pb-5">
    <div class="flex items-center justify-center space-x-4">
      <NuxtLink to="https://www.linkedin.com/in/rafael-curi-a4a837292/" target="_blank" aria-label="github" class="relative text-lg font-medium text-gray-400 transition-all duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-yellow-400 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-yellow-400 hover:drop-shadow-[0_0_5px_#F28AA9] hover:before:w-full">
        <Icon name="line-md:linkedin" class="size-5 text-gray-400 hover:text-yellow-400 md:size-8" />
      </NuxtLink>
      <NuxtLink to="https://github.com/rafinhacuri" target="_blank" aria-label="linkedin" class="group relative text-lg font-medium text-gray-400 transition-all duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-yellow-400 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-yellow-400 hover:drop-shadow-[0_0_5px_#F28AA9] hover:before:w-full">
        <Icon name="line-md:github-loop" class="size-5 text-gray-400 hover:text-yellow-400 md:size-8" />
      </NuxtLink>
      <NuxtLink to="mailto:rafael@curi.dev.br" target="_blank" aria-label="linkedin" class="group relative text-lg font-medium text-gray-400 transition-all duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-yellow-400 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-yellow-400 hover:drop-shadow-[0_0_5px_#F28AA9] hover:before:w-full">
        <Icon name="line-md:email" class="size-5 text-gray-400 hover:text-yellow-400 md:size-8" />
      </NuxtLink>
    </div>
    <div class="flex flex-col items-center justify-center space-y-2 text-[#4C4F69] dark:text-[#CDD5F4]">
      <p class="flex items-center justify-center">
        © {{ new Date().getFullYear() }}-PRESENT Rafael Curi. All rights reserved.
      </p>
    </div>
  </footer>
</template>
