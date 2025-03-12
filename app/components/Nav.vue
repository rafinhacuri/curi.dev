<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

const routes = computed(() => [
  { path: '/', text: t('nav.home') },
  { path: '/certificates', text: t('nav.certificates') },
  { path: '/projects', text: t('nav.projects') },
])

const socials = [
  { icon: 'line-md:linkedin', link: 'https://www.linkedin.com/in/rafael-curi-a4a837292/', name: 'linkedin' },
  { icon: 'line-md:github-loop', link: 'https://github.com/rafinhacuri', name: 'github' },
  { icon: 'line-md:email', link: 'mailto:rafael@curi.dev.br', name: 'email' },
]

function changeLanguage(){
  locale.value === 'en' ? setLocale('pt') : setLocale('en')
}

const menuClosed = ref(true)
</script>

<template>
  <nav>
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <NuxtLink to="/" class="group flex cursor-pointer items-center space-x-3 transition-all duration-300 ease-in-out hover:scale-125">
        <NuxtImg src="/rosto.png" :alt="t('nav.logo')" class="size-10 rounded-lg " />
        <NuxtImg src="/logo-branca.png" :alt="t('nav.logo')" class="mr-3 h-10 w-12" />
      </NuxtLink>
      <div class="flex flex-col items-center sm:mt-0 lg:order-2 lg:flex-row">
        <div class="flex items-center space-x-4 sm:mt-0 md:ml-16 lg:order-2">
          <NuxtLink v-for="{icon, link, name} of socials" :key="name" :to="link" target="_blank" :aria-label="name" class="group relative text-lg font-medium text-gray-400 transition-all duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-yellow-400 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-yellow-400 hover:drop-shadow-[0_0_5px_#F28AA9] hover:before:w-full">
            <Icon :name="icon" class="size-5 text-gray-400 group-hover:text-yellow-400 md:size-8" />
          </NuxtLink>
          <button :aria-label="t('nav.language')" class="group relative text-lg font-medium text-gray-400 transition-all duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-yellow-400 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-yellow-400 hover:drop-shadow-[0_0_5px_#F28AA9] hover:before:w-full" @click="changeLanguage">
            <Icon name="ion:language-outline" class="size-5 text-gray-400 group-hover:text-yellow-400 md:size-8" />
          </button>
          <button :aria-label="t('nav.menu')" class=" lg:hidden" @click="menuClosed = !menuClosed">
            <Icon :name="!menuClosed ? 'lucide:list-x' : 'lucide:menu'" class="size-5 text-gray-400 " />
          </button>
        </div>
        <div class="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" :class="{ hidden: menuClosed }">
          <ul class="mt-4 flex flex-col rounded-lg border p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0">
            <li v-for="route in routes" :key="route.path">
              <NuxtLinkLocale :to="route.path" class="relative text-lg font-medium text-gray-400 transition duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-gray-300 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-gray-300 hover:before:w-full" active-class="text-slate-200 before:w-full" @click="menuClosed = true">
                {{ route.text }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
