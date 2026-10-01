<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })
  const localePath = useLocalePath()
  const route = useRoute()
  const { y } = useWindowScroll()
  const open = ref(false)
  const sectionInView = useActiveSection(['contact'])

  const isHome = computed(() => String(route.name ?? '').startsWith('index'))

  const links = computed(() => [
    { id: 'home', to: localePath('/'), label: t('home') },
    { id: 'projects', to: localePath('/projects'), label: t('projects') },
    { id: 'certificates', to: localePath('/certificates'), label: t('certificates') },
    { id: 'contact', to: localePath({ path: '/', hash: '#contact' }), label: t('contact') },
  ])

  const active = computed(() => {
    const page = String(route.name ?? '')
    if (page.startsWith('projects')) return 'projects'
    if (page.startsWith('certificates')) return 'certificates'
    if (isHome.value) return sectionInView.value ?? 'home'
    return null
  })

  const scrolled = computed(() => y.value > 8)

  function close(): void {
    open.value = false
  }

  function select(id: string): void {
    close()
    if (id === 'home' && isHome.value && !route.hash) {
      globalThis.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  watch(() => route.fullPath, close)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div
      class="border-b glass tone-transition"
      :class="scrolled ? 'border-line' : 'border-transparent'">
      <nav
        class="mx-auto flex h-12 max-w-7xl items-center justify-between px-5 sm:px-8"
        :aria-label="t('primary')">
        <NuxtLinkLocale
          to="/"
          class="group flex items-center gap-2 text-[0.9375rem] font-semibold tracking-tight"
          @click="select('home')">
          <span
            class="relative size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)] transition-transform duration-300 group-hover:scale-125" />
          <span>Rafael Curi</span>
        </NuxtLinkLocale>

        <div class="hidden items-center gap-5 md:flex">
          <ul class="flex items-center">
            <li v-for="link in links" :key="link.id">
              <NuxtLink
                :to="link.to"
                class="relative flex h-8 items-center rounded-full px-3 text-[0.8125rem] transition-colors duration-200"
                :class="active === link.id ? 'font-medium text-fg' : 'text-muted hover:text-fg'"
                :aria-current="active === link.id ? 'page' : undefined"
                @click="select(link.id)">
                <Motion
                  v-if="active === link.id"
                  layout-id="nav-active"
                  class="absolute inset-0 rounded-full bg-fg/[0.07]"
                  :transition="{ type: 'spring', bounce: 0.15, duration: 0.45 }" />
                <span class="relative">{{ link.label }}</span>
              </NuxtLink>
            </li>
          </ul>

          <LanguageSwitch />
        </div>

        <DialogRoot v-model:open="open">
          <DialogTrigger
            class="-mr-2 flex size-11 items-center justify-center md:hidden"
            :aria-label="t('menu')">
            <span class="relative block h-3 w-4.5">
              <span class="absolute inset-x-0 top-0 h-[1.5px] rounded-full bg-fg" />
              <span class="absolute inset-x-0 bottom-0 h-[1.5px] rounded-full bg-fg" />
            </span>
          </DialogTrigger>

          <DialogPortal>
            <DialogContent
              class="sheet fixed inset-0 z-60 flex flex-col glass px-5 pt-1 pb-10 text-fg md:hidden"
              :aria-describedby="undefined">
              <div class="flex h-10 items-center justify-between">
                <DialogTitle class="text-[0.9375rem] font-semibold tracking-tight">
                  Rafael Curi
                </DialogTitle>
                <DialogClose
                  class="-mr-2 flex size-11 items-center justify-center"
                  :aria-label="t('close')">
                  <Icon name="ph:x" class="size-5" />
                </DialogClose>
              </div>

              <ul class="mt-10 flex flex-col gap-1">
                <li v-for="(link, index) in links" :key="link.id">
                  <Motion
                    :initial="{ opacity: 0, y: -12, filter: 'blur(6px)' }"
                    :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
                    :transition="{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.04 * index }">
                    <NuxtLink
                      :to="link.to"
                      class="flex items-center gap-3 py-2 text-[2rem] leading-tight font-semibold tracking-[-0.03em] transition-colors"
                      :class="active === link.id ? 'text-fg' : 'text-muted'"
                      :aria-current="active === link.id ? 'page' : undefined"
                      @click="select(link.id)">
                      {{ link.label }}
                      <span
                        v-if="active === link.id"
                        class="size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                    </NuxtLink>
                  </Motion>
                </li>
              </ul>

              <Motion
                class="mt-auto"
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :transition="{ delay: 0.25, duration: 0.4 }">
                <LanguageSwitch large @switched="close" />
              </Motion>
            </DialogContent>
          </DialogPortal>
        </DialogRoot>
      </nav>
    </div>
  </header>
</template>

<i18n lang="json">
{
  "en": {
    "primary": "Main",
    "home": "Home",
    "projects": "Projects",
    "certificates": "Certificates",
    "contact": "Contact",
    "menu": "Open menu",
    "close": "Close menu"
  },
  "pt": {
    "primary": "Principal",
    "home": "Início",
    "projects": "Projetos",
    "certificates": "Certificados",
    "contact": "Contato",
    "menu": "Abrir menu",
    "close": "Fechar menu"
  }
}
</i18n>
