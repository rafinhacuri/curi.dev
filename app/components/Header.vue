<script setup lang="ts">
const { locale, setLocale, t, setLocaleCookie } = useI18n()

const items = [
  { to: '/', label: t('header.home') },
  { to: '/certificates', label: t('header.certificates') },
  { to: '/projects', label: t('header.projects') },
]

const socials = [
  {
    icon: 'line-md:linkedin',
    link: 'https://www.linkedin.com/in/rafael-curi-a4a837292/',
    name: 'linkedin',
  },
  { icon: 'line-md:github-loop', link: 'https://github.com/rafinhacuri', name: 'github' },
  { icon: 'line-md:email', link: 'mailto:rafael@curi.dev.br', name: 'email' },
]

function changeLanguage(): void {
  if (locale.value === 'en') {
    setLocale('pt')
    setLocaleCookie('pt')
  } else {
    setLocale('en')
    setLocaleCookie('en')
  }
}
</script>

<template>
  <UHeader
    class="border-b-4 border-cyan-200 bg-black/95 font-mono shadow-[0_6px_0_#ec4899] backdrop-blur">
    <template #title>
      <div class="flex items-center gap-3">
        <div class="relative">
          <NuxtImg
            src="/rosto.png"
            :alt="t('header.logo')"
            class="size-11 border-4 border-yellow-300 bg-black shadow-[4px_4px_0_#000]" />
          <span class="absolute -right-1 -bottom-1 h-3 w-3 border-2 border-black bg-lime-300" />
        </div>

        <div class="flex items-center gap-2">
          <div class="hidden flex-col leading-tight sm:flex">
            <span class="text-sm font-black tracking-wide text-cyan-100 uppercase">
              {{ t('home.nome') }}
            </span>
            <span class="text-xs font-bold text-pink-300 uppercase">
              {{ t('home.subtitle') }}
            </span>
          </div>
        </div>
      </div>
    </template>

    <nav class="space-x-4">
      <NuxtLinkLocale
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="relative border-2 border-transparent px-2 py-1 text-sm font-black text-zinc-300 uppercase transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black"
        active-class="border-cyan-200 bg-cyan-200 text-black shadow-[4px_4px_0_#ec4899]">
        {{ item.label }}
      </NuxtLinkLocale>
    </nav>

    <template #right>
      <div class="flex items-center gap-3 sm:mt-0 md:ml-16 lg:order-2">
        <div
          class="flex items-center gap-2 border-4 border-zinc-100 bg-black px-2 py-1 shadow-[5px_5px_0_#000]">
          <NuxtLink
            v-for="{ icon, link, name } of socials"
            :key="name"
            :to="link"
            target="_blank"
            :aria-label="name"
            class="group relative flex items-center justify-center border-2 border-transparent p-1.5 text-zinc-300 transition hover:border-pink-300 hover:bg-pink-400 hover:text-black">
            <Icon :name="icon" class="text-zinc-300 transition group-hover:text-black" size="22" />
          </NuxtLink>

          <UButton
            :aria-label="t('header.language')"
            class="group relative ml-1 inline-flex items-center gap-1.5 rounded-none border-2 border-yellow-300 bg-yellow-300 px-3 py-1 text-[11px] font-black tracking-wide text-black uppercase transition hover:border-cyan-200 hover:bg-cyan-200 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:outline-none"
            @click="changeLanguage">
            <span class="text-[10px]">
              {{ locale === 'en' ? 'EN' : 'PT' }}
            </span>
            <Icon name="ion:language-outline" class="text-black" size="18" />
          </UButton>
        </div>
      </div>
    </template>

    <template #body>
      <div class="flex flex-col gap-1.5 py-3">
        <NuxtLinkLocale
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="border-2 border-transparent px-2 py-2 font-black text-zinc-300 uppercase transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black"
          active-class="border-cyan-200 bg-cyan-200 text-black">
          {{ item.label }}
        </NuxtLinkLocale>
      </div>
    </template>
  </UHeader>
</template>
