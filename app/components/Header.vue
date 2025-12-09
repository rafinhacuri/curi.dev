<script setup lang="ts">
const { locale, setLocale, t, setLocaleCookie } = useI18n()

const items = [
  { to: '/', label: t('header.home') },
  { to: '/certificates', label: t('header.certificates') },
  { to: '/projects', label: t('header.projects') },
]

const socials = [
  { icon: 'line-md:linkedin', link: 'https://www.linkedin.com/in/rafael-curi-a4a837292/', name: 'linkedin' },
  { icon: 'line-md:github-loop', link: 'https://github.com/rafinhacuri', name: 'github' },
  { icon: 'line-md:email', link: 'mailto:rafael@curi.dev.br', name: 'email' },

]

function changeLanguage(){
  if(locale.value === 'en'){
    setLocale('pt')
    setLocaleCookie('pt')
  }
  else {
    setLocale('en')
    setLocaleCookie('en')
  }
}
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex items-center gap-3">
        <div class="relative">
          <NuxtImg src="/rosto.png" :alt="t('header.logo')" class="size-10 rounded-xl border border-yellow-400/50 shadow-[0_0_25px_rgba(250,204,21,0.35)]" />
          <span class="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
        </div>

        <div class="flex items-center gap-2">
          <div class="hidden flex-col leading-tight sm:flex">
            <span class="text-sm font-semibold tracking-wide text-slate-100">
              {{ t('home.nome') }}
            </span>
            <span class="text-xs text-slate-400">
              {{ t('home.subtitle') }}
            </span>
          </div>
        </div>
      </div>
    </template>

    <nav class="space-x-4">
      <NuxtLinkLocale v-for="item in items" :key="item.to" :to="item.to" class="relative text-lg font-medium text-gray-400 transition duration-300 ease-in-out before:absolute before:-bottom-1 before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-gray-300 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-gray-300 hover:before:w-full" active-class="text-slate-200 before:w-full">
        {{ item.label }}
      </NuxtLinkLocale>
    </nav>

    <template #right>
      <div class="flex items-center gap-3 sm:mt-0 md:ml-16 lg:order-2">
        <div class="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-1 shadow-[0_0_25px_rgba(15,23,42,0.75)]">
          <NuxtLink v-for="{icon, link, name} of socials" :key="name" :to="link" target="_blank" :aria-label="name" class="group relative flex items-center justify-center rounded-full p-1.5 text-slate-300 transition hover:-translate-y-0.5 hover:text-yellow-300 hover:shadow-[0_0_18px_rgba(250,204,21,0.45)]">
            <Icon :name="icon" class="text-slate-300 transition group-hover:text-yellow-300" size="22" />
          </NuxtLink>

          <UButton :aria-label="t('header.language')" class="group relative ml-1 inline-flex items-center gap-1.5 rounded-full border border-yellow-400/50 bg-slate-900/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-100 uppercase transition hover:border-yellow-300 hover:bg-yellow-400/10 hover:text-yellow-200 focus-visible:ring-2 focus-visible:ring-yellow-400/70 focus-visible:outline-none" @click="changeLanguage">
            <span class="text-[10px]">
              {{ locale === 'en' ? 'EN' : 'PT' }}
            </span>
            <Icon name="ion:language-outline" class="text-slate-300 transition group-hover:text-yellow-300" size="18" />
          </UButton>
        </div>
      </div>
    </template>

    <template #body>
      <div class="flex flex-col gap-1.5 py-3">
        <NuxtLinkLocale v-for="item in items" :key="item.to" :to="item.to" class="relative text-lg font-medium text-gray-400 transition duration-300 ease-in-out before:absolute before:-bottom-1 before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-gray-300 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-gray-300 hover:before:w-full" active-class="text-slate-200 before:w-full">
          {{ item.label }}
        </NuxtLinkLocale>
      </div>
    </template>
  </UHeader>
</template>
