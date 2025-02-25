<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('home.title2') })
useSeoMeta({ description: t('home.subtitle') })
defineOgImageComponent('Home', { title: t('home.title2'), subtitle: t('home.title') })

const stacks = [
  { title: 'Nuxt', icon: 'devicon:nuxtjs', color: '#00C58E' },
  { title: 'Vue', icon: 'devicon:vuejs', color: '#42b883' },
  { title: 'Tailwind', icon: 'devicon:tailwindcss', color: '#38BDF8' },
  { title: 'NodeJS', icon: 'devicon:nodejs', color: '#339933' },
  { title: 'MongoDB', icon: 'devicon:mongodb', color: '#47A248' },
  { title: 'Typescript', icon: 'devicon:typescript', color: '#3178C6' },
  { title: 'Eslint', icon: 'devicon:eslint', color: '#4B32C3' },
  { title: 'HTML', icon: 'devicon:html5', color: '#E34F26' },
  { title: 'CSS', icon: 'devicon:css3', color: '#1572B6' },
  { title: 'Javascript', icon: 'devicon:javascript', color: '#F7DF1E' },
]

const contact = [
  { title: 'Github', icon: 'fa-brands:github', link: 'https://github/' },
  { title: 'Linkedin', icon: 'fa-brands:linkedin', link: 'https://www.linkedin.com/in/bruno-oliveira-4b1b3b1b3/' },
  { title: 'Email', icon: 'fa-solid:envelope', link: 'mailto:rafael@curi.dev.br' },
  { title: 'Instagram', icon: 'fa-brands:instagram', link: 'https://www.instagram.com/bruno.oliveira.dev/' },
  { title: 'Facebook', icon: 'fa-brands:facebook', link: 'https://www.facebook.com/bruno.oliveira.dev' },
  { title: 'Youtube', icon: 'fa-brands:youtube', link: 'https://www.youtube.com/channel/UCJ1J6j7Z1J7ZJQJ1J6j7Z1J7ZJQ' },
]
</script>

<template>
  <section>
    <div class="mt-20 flex flex-col items-center justify-center md:flex-row">
      <NuxtImg src="/rosto.png" :alt="t('nav.logo')" class="size-32 rounded-full border border-white sm:size-48 md:size-56" />
      <div class="mt-6 flex flex-col text-center md:ml-10 md:mt-0 md:text-start">
        <span class="font-['Dancing_Script'] text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl">
          {{ t('home.title') }}
        </span>
        <span class="mt-2 text-xl font-semibold text-white sm:text-2xl">
          {{ t('home.subtitle') }}
        </span>
      </div>
    </div>

    <div class="mt-20 w-full">
      <div class="relative mt-10 w-screen overflow-hidden">
        <div class="flex w-[200vw] animate-scroll space-x-5">
          <!-- eslint-disable-next-line vue/no-restricted-v-bind -->
          <div v-for="(item, index) in stacks.concat(stacks)" :key="index" class="inline-block flex-1 rounded-lg border p-1 text-center text-5xl transition-transform duration-300 hover:scale-110" :style="{ color: item.color, 'border-color': item.color }">
            <div class="flex items-center justify-center space-x-2">
              <Icon :name="item.icon" :size="35" />
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contatos fixados na parte inferior com dropdown ao hover -->
    <div class="fixed inset-x-0 bottom-4 mb-5">
      <div class="flex items-center justify-center space-x-8">
        <div v-for="({ icon, link, title }, idx) in contact" :key="idx" class="group relative">
          <NuxtLink :to="link" target="_blank" :aria-label="title" class="transition-all duration-300 hover:drop-shadow-[0_0_5px_#F28AA9]">
            <Icon :name="icon" size="3rem" class="text-white transition-all duration-300 hover:text-[#F28AA9]" />
          </NuxtLink>
          <div class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 group-hover:block">
            <span class="whitespace-nowrap rounded bg-white px-2 py-1 text-xs text-black shadow-md">
              {{ title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
