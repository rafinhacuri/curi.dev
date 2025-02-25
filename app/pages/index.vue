<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('home.title2') })
useSeoMeta({ description: t('home.subtitle') })
defineOgImageComponent('Home', { title: t('home.title2'), subtitle: t('home.title') })

const isMobile = useMediaQuery('(max-width: 640px)')

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
</script>

<template>
  <section>
    <div class="mt-20 flex flex-col items-center justify-center ">
      <NuxtImg src="/rosto.png" :alt="t('nav.logo')" class="size-32 rounded-full border border-white sm:size-48 md:size-56" />
      <p class="font-['Dancing_Script'] text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl">
        {{ t('home.title') }}
      </p>
      <p class="mt-2 text-xl font-semibold text-white sm:text-2xl">
        {{ t('home.subtitle') }}
      </p>
    </div>

    <div class="mt-20 w-full">
      <div class="relative mt-10 w-screen overflow-hidden">
        <div class="flex w-[200vw] animate-scroll space-x-5">
          <!-- eslint-disable-next-line vue/no-restricted-v-bind -->
          <div v-for="(item, index) in stacks.concat(stacks)" :key="index" class="inline-block flex-1 cursor-default rounded-lg border p-1 text-center text-lg transition-transform md:text-5xl" :style="{ color: item.color, 'border-color': item.color }">
            <div class="flex items-center justify-center space-x-2">
              <Icon :name="item.icon" :size="isMobile? 20 : 35" />
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
