<script setup lang="ts">
  const { locale, setLocale, t, setLocaleCookie } = useI18n({ useScope: 'local' })
  const open = ref(false)

  const items = [
    { to: '/', label: t('home') },
    { to: '/certificates', label: t('certificates') },
    { to: '/projects', label: t('projects') },
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
  <header
    class="sticky top-0 z-50 border-b-4 border-cyan-200 bg-black/95 font-mono shadow-[0_6px_0_#ec4899] backdrop-blur">
    <div class="mx-auto flex h-15 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <NuxtLinkLocale to="/" class="flex min-w-0 items-center gap-3" @click="open = false">
        <div class="relative shrink-0">
          <NuxtImg
            src="/rosto.png"
            :alt="t('logo')"
            class="size-11 border-4 border-yellow-300 bg-black shadow-[4px_4px_0_#000]" />
          <span class="absolute -right-1 -bottom-1 h-3 w-3 border-2 border-black bg-lime-300" />
        </div>

        <div class="hidden min-w-0 flex-col leading-tight sm:flex">
          <span class="truncate text-sm font-black tracking-wide text-cyan-100 uppercase">
            {{ t('nome') }}
          </span>
          <span class="truncate text-xs font-bold text-pink-300 uppercase">
            {{ t('tagline') }}
          </span>
        </div>
      </NuxtLinkLocale>

      <nav class="hidden items-center gap-4 md:flex">
        <NuxtLinkLocale
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="relative border-2 border-transparent px-2 py-1 text-sm font-black text-zinc-300 uppercase transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black"
          active-class="border-cyan-200 bg-zinc-950 text-cyan-100 shadow-[4px_4px_0_#ec4899]">
          {{ item.label }}
        </NuxtLinkLocale>
      </nav>

      <div class="hidden items-center gap-3 md:ml-16 md:flex">
        <div
          class="flex items-center gap-2 border-4 border-zinc-100 bg-black px-2 py-1 shadow-[5px_5px_0_#000]">
          <NuxtLink
            v-for="{ icon, link, name } of socials"
            :key="name"
            :to="link"
            target="_blank"
            external
            :aria-label="name"
            class="group relative flex items-center justify-center border-2 border-transparent p-1.5 text-zinc-300 transition hover:border-pink-300 hover:bg-pink-400 hover:text-black">
            <Icon :name="icon" class="text-zinc-300 transition group-hover:text-black" size="22" />
          </NuxtLink>

          <UButton
            :aria-label="t('language')"
            class="group relative ml-1 inline-flex items-center gap-1.5 rounded-none border-2 border-yellow-300 bg-yellow-300 px-3 py-1 text-[11px] font-black tracking-wide text-black uppercase transition hover:border-cyan-200 hover:bg-cyan-200 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:outline-none"
            @click="changeLanguage">
            <span class="text-[10px]">
              {{ locale === 'en' ? 'EN' : 'PT' }}
            </span>
            <Icon name="ion:language-outline" class="text-black" size="18" />
          </UButton>
        </div>
      </div>

      <button
        type="button"
        :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
        class="group flex size-11 items-center justify-center border-4 border-zinc-100 bg-black text-zinc-100 shadow-[5px_5px_0_#000] transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black md:hidden"
        @click="open = !open">
        <Icon
          :name="open ? 'line-md:close' : 'line-md:menu'"
          class="transition group-hover:text-black"
          size="24" />
      </button>
    </div>

    <div
      v-if="open"
      class="border-t-4 border-cyan-200 bg-black px-4 py-5 font-mono shadow-[inset_0_6px_0_#ec4899] md:hidden">
      <div class="mx-auto max-w-7xl space-y-5">
        <div class="grid gap-2">
          <NuxtLinkLocale
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="group flex items-center justify-between border-4 border-zinc-100 bg-zinc-950 px-4 py-3 text-sm font-black text-zinc-100 uppercase shadow-[5px_5px_0_#000] transition hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-300 hover:text-black hover:shadow-[7px_7px_0_#ec4899]"
            active-class="border-cyan-200 bg-zinc-950 text-cyan-100 shadow-[5px_5px_0_#ec4899] ring-2 ring-pink-400"
            @click="open = false">
            <span>{{ item.label }}</span>
            <Icon
              name="line-md:arrow-right"
              class="text-pink-300 transition group-hover:text-black group-[.router-link-active]:text-cyan-100"
              size="20" />
          </NuxtLinkLocale>
        </div>

        <div
          class="flex items-center justify-between gap-3 border-4 border-zinc-100 bg-zinc-950 p-3 shadow-[6px_6px_0_#000]">
          <div class="flex items-center gap-2">
            <NuxtLink
              v-for="{ icon, link, name } of socials"
              :key="name"
              :to="link"
              target="_blank"
              external
              :aria-label="name"
              class="group flex size-10 items-center justify-center border-2 border-zinc-100 bg-black text-zinc-300 transition hover:border-pink-300 hover:bg-pink-400 hover:text-black">
              <Icon
                :name="icon"
                class="text-zinc-300 transition group-hover:text-black"
                size="22" />
            </NuxtLink>
          </div>

          <UButton
            :aria-label="t('language')"
            class="group inline-flex items-center gap-1.5 rounded-none border-2 border-yellow-300 bg-yellow-300 px-3 py-2 text-[11px] font-black tracking-wide text-black uppercase transition hover:border-cyan-200 hover:bg-cyan-200 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:outline-none"
            @click="changeLanguage">
            <span class="text-[10px]">
              {{ locale === 'en' ? 'EN' : 'PT' }}
            </span>
            <Icon name="ion:language-outline" class="text-black" size="18" />
          </UButton>
        </div>
      </div>
    </div>
  </header>
</template>

<i18n lang="json">
{
  "en": {
    "logo": "Letter RC logo",
    "home": "Home",
    "certificates": "Certificates",
    "projects": "Projects",
    "language": "Change language",
    "nome": "Rafael Curi",
    "tagline": "Full Stack Developer"
  },
  "pt": {
    "logo": "Logo da RC",
    "home": "Início",
    "certificates": "Certificados",
    "projects": "Projetos",
    "language": "Mudar idioma",
    "nome": "Rafael Curi",
    "tagline": "Desenvolvedor Full Stack"
  }
}
</i18n>
