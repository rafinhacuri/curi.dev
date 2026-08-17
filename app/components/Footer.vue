<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  const socials = [
    {
      icon: 'line-md:linkedin',
      link: 'https://www.linkedin.com/in/rafael-curi-a4a837292/',
      name: 'linkedin',
    },
    { icon: 'line-md:github-loop', link: 'https://github.com/rafinhacuri', name: 'github' },
    { icon: 'line-md:email', link: 'mailto:rafael@curi.dev.br', name: 'email' },
  ]
</script>

<template>
  <UFooter class="my-9 font-mono">
    <div class="relative z-10 flex flex-col items-center space-y-6">
      <div
        class="flex items-center gap-3 border-4 border-zinc-100 bg-black px-4 py-2 shadow-[6px_6px_0_#ec4899]">
        <NuxtLink
          v-for="{ icon, link, name } of socials"
          :key="name"
          :to="link"
          target="_blank"
          :aria-label="name"
          class="group relative flex items-center justify-center border-2 border-transparent p-2 text-zinc-300 transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black">
          <Icon :name="icon" class="text-zinc-300 transition group-hover:text-black" size="26" />
        </NuxtLink>
      </div>

      <div
        class="border-2 border-cyan-200 bg-black px-3 py-2 text-center text-xs font-bold text-cyan-100 uppercase shadow-[4px_4px_0_#000]">
        <p>{{ t('copyright', { year: new Date().getFullYear() }) }}</p>
      </div>
    </div>
  </UFooter>
</template>

<i18n lang="json">
{
  "en": {
    "copyright": "© {year}-PRESENT Rafael Curi. All rights reserved."
  },
  "pt": {
    "copyright": "© {year}-PRESENT Rafael Curi. Todos os direitos reservados."
  }
}
</i18n>
