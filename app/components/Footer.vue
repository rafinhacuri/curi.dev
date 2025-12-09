<script setup lang="ts">
const { t } = useI18n()

const socials = [
  { icon: 'line-md:linkedin', link: 'https://www.linkedin.com/in/rafael-curi-a4a837292/', name: 'linkedin' },
  { icon: 'line-md:github-loop', link: 'https://github.com/rafinhacuri', name: 'github' },
  { icon: 'line-md:email', link: 'mailto:rafael@curi.dev.br', name: 'email' },
]
</script>

<template>
  <UFooter class="my-9">
    <div class="relative z-10 flex flex-col items-center space-y-6">
      <div class="flex items-center gap-3 rounded-full border border-slate-700/60 bg-slate-900/70 px-4 py-2 shadow-[0_0_22px_rgba(15,23,42,0.65)]">
        <NuxtLink v-for="{ icon, link, name } of socials" :key="name" :to="link" target="_blank" :aria-label="name" class="group relative flex items-center justify-center rounded-full p-2 text-slate-300 transition hover:-translate-y-0.5 hover:text-yellow-300 hover:shadow-[0_0_18px_rgba(250,204,21,0.45)]">
          <Icon :name="icon" class="text-slate-300 transition group-hover:text-yellow-300" size="26" />
        </NuxtLink>
      </div>

      <div class="text-center text-sm text-slate-500">
        <p>{{ t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
      </div>
    </div>
  </UFooter>
</template>
