<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('nav.projects') })
useSeoMeta({ description: t('home.subtitle') })

const projects = computed(() => [
  { title: t('projects.proj1'), description: t('projects.desc1'), icon: 'lucide:tv', nome: 'Agenda-CBPF', link: 'https://youtu.be/Z866qplsBdA' },
  { title: t('projects.proj2'), description: t('projects.desc2'), icon: 'lucide:wrench', nome: 'Os', link: 'https://youtu.be/MRcAPzhyDLA' },
  { title: t('projects.proj3'), description: t('projects.desc3'), icon: 'lucide:venetian-mask', nome: 'Eventos', link: 'https://eventos.cbpf.br' },
  { title: t('projects.proj4'), description: t('projects.desc4'), icon: 'lucide:database', nome: 'Mesonpi', link: 'https://mesonpi.cbpf.br/projetos/login' },
  { title: t('projects.proj5'), description: t('projects.desc5'), icon: 'lucide:building', nome: 'SGCAD-Painel SELIC', link: 'https://youtu.be/Rh3RZ4rqL_I' },
  { title: t('projects.proj6'), description: t('projects.desc6'), icon: 'lucide:building-2', nome: 'Explotools-Brasil', link: 'https://explotools.com.br/' },
  { title: t('projects.proj7'), description: t('projects.desc7'), icon: 'lucide:bike', nome: 'Bicicletário', link: 'https://github.com/rafinhacuri/sistema-bicicletario' },
  { title: t('projects.proj8'), description: t('projects.desc8'), icon: 'lucide:user', nome: 'curi.dev', link: '/' },
])

const projects2 = computed(() => [
  { title: t('projects.proj9'), description: t('projects.desc9'), icon: 'lucide:calendar', nome: 'Agende de Auditorios', link: 'https://auditorios.cbpf.br/', contribuidores: ['Gabriel Rosa'], links: ['https://rosa.dev.br'], avatar: ['https://rosa.dev.br/gsr.webp'] },
  { title: t('projects.proj10'), description: t('projects.desc10'), icon: 'lucide:book-marked', nome: 'Posgrad COEDU', link: 'https://posgrad.coedu.cbpf.br/login', contribuidores: ['Gabriel Rosa'], links: ['https://rosa.dev.br'], avatar: ['https://rosa.dev.br/gsr.webp'] },
])
</script>

<template>
  <section class="mx-10 my-8 md:mx-32 md:my-16">
    <h2 class="mb-8 font-['Dancing_Script'] text-5xl text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
      {{ t('projects.title1') }}
    </h2>

    <div class="group grid grid-cols-1 gap-10 md:grid-cols-2">
      <article v-for="{ description, icon, link, nome, title } of projects" :key="nome" class="relative w-full rounded-md border-2 border-gray-800/50 p-3 shadow-lg transition-all duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:animate-colorFlow before:bg-animated-line before:bg-[length:200%_100%] before:transition-all before:duration-500 before:ease-out hover:translate-y-[-3px] hover:animate-pulseGlow hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:before:w-full" role="button" @click="navigateTo(link, { external: true, open: { target: '_blank' } })" @keydown.enter="navigateTo(link, { external: true, open: { target: '_blank' } })">
        <header class="flex items-center justify-items-start space-x-2">
          <Icon :name="icon" class="text-4xl text-gray-300" />
          <p class="text-lg font-medium text-gray-300">
            {{ title }}
          </p>
        </header>
        <section class="mt-2 text-start font-extralight text-gray-400">
          {{ description }}
        </section>
      </article>
    </div>

    <h2 class="my-8 font-['Dancing_Script'] text-5xl text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
      {{ t('projects.title2') }}
    </h2>

    <div class="group grid grid-cols-1 gap-10 pb-2 md:grid-cols-2">
      <article v-for="{ description, icon, link, nome, title, avatar, contribuidores, links } in projects2" :key="nome" class="relative w-full rounded-md border-2 border-gray-800/50 p-3 shadow-lg transition-all duration-300 ease-in-out before:absolute before:bottom-[-4px] before:left-1/2 before:h-[3px] before:w-0 before:-translate-x-1/2 before:animate-colorFlow before:bg-animated-line before:bg-[length:200%_100%] before:transition-all before:duration-500 before:ease-out hover:translate-y-[-3px] hover:animate-pulseGlow hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:before:w-full" role="button" @keydown.enter="navigateTo(link, { external: true, open: { target: '_blank' } })" @click="navigateTo(link, { external: true, open: { target: '_blank' } })">
        <header class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <Icon :name="icon" class="text-4xl text-gray-300" />
            <h3 class="text-lg font-medium text-gray-300">
              {{ title }}
            </h3>
          </div>
          <div class="hidden flex-col items-center space-y-2 md:flex">
            <button v-for="(contribuidor, index) in contribuidores" :key="index" class="flex items-center space-x-2" @click.stop="navigateTo(links[index], { external: true, open: { target: '_blank' } })">
              <img :src="avatar[index]" class="size-6 rounded-full md:size-10" :alt="contribuidor">
            </button>
          </div>
        </header>
        <section class="mt-2 text-start font-extralight text-gray-400">
          <p>{{ description }}</p>
        </section>
        <div class="mt-4 flex flex-wrap items-center justify-start space-y-2 md:hidden">
          <button v-for="(contribuidor, index) in contribuidores" :key="index" class="flex items-center space-x-2" @click.stop="navigateTo(links[index], { external: true, open: { target: '_blank' } })">
            <img :src="avatar[index]" class="size-6 rounded-full md:size-10" :alt="contribuidor">
          </button>
        </div>
      </article>
    </div>
  </section>
</template>
