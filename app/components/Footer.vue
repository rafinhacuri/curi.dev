<script setup lang="ts">
const { t } = useI18n()

const socials = [
  { icon: 'line-md:linkedin', link: 'https://www.linkedin.com/in/rafael-curi-a4a837292/', name: 'linkedin' },
  { icon: 'line-md:github-loop', link: 'https://github.com/rafinhacuri', name: 'github' },
  { icon: 'line-md:email', link: 'mailto:rafael@curi.dev.br', name: 'email' },
]
</script>

<template>
  <footer class="space-y-4 pb-10">
    <div class="flex items-center justify-center space-x-4">
      <NuxtLink v-for="{icon, link, name} of socials" :key="name" :to="link" target="_blank" :aria-label="name" class="group relative text-lg font-medium text-gray-400 transition-all duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-yellow-400 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-yellow-400 hover:drop-shadow-[0_0_5px_#F28AA9] hover:before:w-full">
        <Icon :name="icon" class="size-5 text-gray-400 group-hover:text-yellow-400 md:size-8" />
      </NuxtLink>
    </div>
    <div class="flex flex-col items-center justify-center space-y-2 text-[#4C4F69] dark:text-[#CDD5F4]">
      <p class="flex items-center justify-center">
        {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
      </p>
    </div>
  </footer>
</template>
