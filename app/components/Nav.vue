<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

const routes = computed(() => [
  { path: '/', text: t('nav.home') },
  { path: '/certificates', text: t('nav.certificates') },
  { path: '/projects', text: t('nav.projects') },
])

function changeLanguage(){
  locale.value === 'en' ? setLocale('pt') : setLocale('en')
}

const menuClosed = ref(true)
</script>

<template>
  <nav class="border-b border-gray-200 bg-slate-950/90 ">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <NuxtLink to="/" class="group flex cursor-pointer items-center transition-all duration-300 ease-in-out hover:scale-125">
        <NuxtImg src="/logo-branca.png" :alt="t('nav.logo')" class="mr-3 h-10 w-12" />
        <span class="self-center whitespace-nowrap font-['Dancing_Script'] text-2xl font-semibold text-white">
          Rafael Curi
        </span>
      </NuxtLink>
      <div class="flex flex-col items-center sm:mt-0 lg:order-2 lg:flex-row">
        <div class="flex items-center space-x-4 sm:mt-0 lg:order-2">
          <button :aria-label="t('nav.language')" class="ml-4 flex items-center justify-center" @click="changeLanguage">
            <Icon name="lucide:earth" :size="24" class="text-white hover:text-gray-400" />
          </button>
          <button :aria-label="t('nav.menu')" class="flex items-center justify-center lg:hidden" @click="menuClosed = !menuClosed">
            <Icon :name="!menuClosed ? 'lucide:list-x' : 'lucide:menu'" :size="24" class="text-white hover:text-gray-400" />
          </button>
        </div>
        <div class="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" :class="{ hidden: menuClosed }">
          <ul class="mt-4 flex flex-col rounded-lg border p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0">
            <li v-for="route in routes" :key="route.path">
              <NuxtLinkLocale
                :to="route.path"
                class="relative text-lg font-medium text-white transition duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:bg-gray-400 before:transition-all before:duration-500 before:ease-out hover:scale-105 hover:text-gray-400 hover:before:w-full"
                active-class="text-gray-400 before:w-full"
                @click="menuClosed = true"
              >
                {{ route.text }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
