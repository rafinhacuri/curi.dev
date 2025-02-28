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
  { title: 'Git', icon: 'devicon:git', color: '#F05033' },
  { title: 'Github', icon: 'devicon:github', color: '#3B3B3B' },

]

const jornada = computed(() => [
  { ano: 2023, titulo: t('home.jornada_inicio'), descricao: t('home.jornada1') },
  { ano: 2024, titulo: t('home.jornada_aperfeicoamento'), descricao: t('home.jornada2') },
  { ano: 2025, titulo: t('home.jornada_crescimento'), descricao: t('home.jornada3') },
])
</script>

<template>
  <section>
    <div class="flex flex-col justify-around space-y-8 pt-20 md:flex-row md:space-y-0">
      <div class="mx-4 mt-5 space-y-3 text-center md:my-0 md:text-start">
        <p class="mb-5 text-center font-['Dancing_Script'] text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl md:text-start">
          Rafael Curi
        </p>
        <p class="text-gray-400 ">
          {{ t('home.title') }}
        </p>
        <p class="mt-2   text-gray-400">
          {{ t('home.descricao1') }}
        </p>
        <p class="mt-2   text-gray-400">
          {{ t('home.descricao2') }}
        </p>
      </div>
      <div class="mt-5 space-y-3 text-start">
        <p class="mb-5 text-center font-['Dancing_Script'] text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl md:text-start">
          {{ t('home.jornada') }}
        </p>
        <div v-for="{ano, descricao,titulo} of jornada" :key="ano" class="m-4 flex cursor-default items-start justify-start space-x-5 md:m-0">
          <p class="text-2xl font-extralight text-gray-500">
            {{ ano }}
          </p>
          <div class="group relative before:absolute before:bottom-[-4px] before:left-0 before:h-[3px] before:w-0 before:bg-yellow-400 before:transition-all before:duration-500 before:ease-out group-hover:before:w-full">
            <p class=" text-lg font-light text-gray-400 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_5px_#F28AA9]">
              {{ titulo }}
            </p>
            <div class="relative hidden h-[30px] w-[250px] overflow-hidden md:block md:w-[300px] lg:w-[400px] ">
              <p class="whitespace-nowrap text-gray-500 group-hover:animate-scrollHorizontal">
                {{ descricao }}
              </p>
            </div>
            <p class="text-wrap break-words text-gray-500 md:hidden">
              {{ descricao }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20 w-full">
      <h2 class="mb-5 flex justify-center  font-['Dancing_Script'] text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl">
        {{ t('home.stack') }}
      </h2>
      <div class="relative mt-10 w-screen overflow-hidden">
        <div class="flex w-[200vw] animate-scroll space-x-5">
          <!-- eslint-disable-next-line vue/no-restricted-v-bind -->
          <div v-for="(item, index) in stacks.concat(stacks)" :key="index" class="mb-20 inline-block flex-1 cursor-default rounded-lg border p-1 text-center text-lg transition-transform md:text-5xl" :style="{ color: item.color, 'border-color': item.color }">
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
