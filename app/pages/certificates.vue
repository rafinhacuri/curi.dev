<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('cert.head') })
useSeoMeta({ description: t('home.subtitle') })
defineOgImageComponent('Home', { title: t('cert.head'), subtitle: t('home.title') })

// TODO: ADICINAR CERTIFICADO DE VUE, NUXT, TAILWIND, ESLINT, HTML, CSS, GIT, GITHUB, TYPESCRIPT
const certificates = ref([
  { titulo: 'Aprenda JAVASCRIPT em 7 dias + Projetos Reais', foto: '/cursos/js.png', link: '/certificates/js.jpg', icon: 'devicon:javascript' },
  { titulo: 'Node JS Curso Completo do Básico ao Avançado', foto: '/cursos/node.png', link: '/certificates/node.jpg', icon: 'devicon:nodejs' },
  { titulo: 'LINUX – MÓDULO 00: PRIMEIROS PASSOS', foto: '/cursos/linux00.png', link: '/certificates/linux00.pdf', icon: 'devicon:linux' },
  { titulo: 'LINUX – MÓDULO 01: INTERFACE E TERMINAL', foto: '/cursos/linux01.png', link: '/certificates/linux01.pdf', icon: 'devicon:linux' },
])
</script>

<template>
  <div class="flex flex-col items-center justify-center p-10">
    <h1 class="mb-8 text-center font-['Dancing_Script'] text-5xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
      {{ t('cert.head') }}
    </h1>
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="{ titulo, foto, link, icon } of certificates" :key="titulo" class="group relative flex max-w-[280px] flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <div class="relative w-full overflow-hidden rounded-lg">
          <img :src="foto" :alt="titulo" class="h-[200px] w-full rounded-lg object-cover grayscale transition-all duration-500 ease-out group-hover:rotate-2 group-hover:scale-110 group-hover:shadow-[0_5px_20px_rgba(255,255,255,0.2)] group-hover:grayscale-0">
        </div>
        <h3 class="mt-5 text-lg font-semibold text-white transition-all duration-300 group-hover:text-yellow-400">
          <div class="flex items-center justify-center space-x-3">
            <Icon :name="icon" class="text-2xl transition-all duration-300 group-hover:scale-125" />
            <span>{{ titulo }}</span>
          </div>
        </h3>
        <button v-if="link" class="mt-5 rounded-lg border border-white px-5 py-2 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" @click="navigateTo(link, { external: true, open: { target: '_blank' } })">
          {{ t('cert.ver_cert') }}
        </button>
      </div>
    </div>
  </div>
</template>
