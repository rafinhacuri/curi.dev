<script setup lang="ts">
  const { t } = useI18n()

  useHead({ title: t('header.projects') })
  useSeoMeta({ description: t('home.subtitle') })
  defineOgImage('Default.takumi', {
    title: t('projects.title'),
    description: t('projects.subtitle'),
  })

  const projects = computed(() => [
    {
      title: t('projects.proj11'),
      description: t('projects.desc11'),
      icon: 'lucide:server',
      nome: 'SanchezDNS',
      link: 'https://sanchezdns.curi.dev.br',
      tone: 'lime',
    },
    {
      title: t('projects.escola_iac_2026'),
      description: t('projects.escola_iac_2026_desc'),
      icon: 'lucide:server',
      nome: 'Escola IAC 2026',
      link: 'https://escola-iac.cbpf.br/',
      tone: 'cyan',
    },
    {
      title: t('projects.proj12'),
      description: t('projects.desc12'),
      icon: 'lucide:coins',
      nome: 'Deku',
      link: 'https://deku.curi.dev.br',
      tone: 'yellow',
    },
    {
      title: t('projects.proj1'),
      description: t('projects.desc1'),
      icon: 'lucide:tv',
      nome: 'Agenda-CBPF',
      link: 'https://youtu.be/Z866qplsBdA',
      tone: 'pink',
    },
    {
      title: t('projects.proj2'),
      description: t('projects.desc2'),
      icon: 'lucide:wrench',
      nome: 'Os',
      link: 'https://youtu.be/MRcAPzhyDLA',
      tone: 'lime',
    },
    {
      title: t('projects.proj3'),
      description: t('projects.desc3'),
      icon: 'lucide:venetian-mask',
      nome: 'Eventos',
      link: 'https://eventos.cbpf.br/wteo/',
      tone: 'cyan',
    },
    {
      title: t('projects.proj4'),
      description: t('projects.desc4'),
      icon: 'lucide:database',
      nome: 'Mesonpi',
      link: 'https://mesonpi.cbpf.br/projetos/',
      tone: 'yellow',
    },
    {
      title: t('projects.proj5'),
      description: t('projects.desc5'),
      icon: 'lucide:building',
      nome: 'SGCAD-Painel SELIC',
      link: 'https://youtu.be/Rh3RZ4rqL_I',
      tone: 'pink',
    },
    {
      title: t('projects.proj6'),
      description: t('projects.desc6'),
      icon: 'lucide:building-2',
      nome: 'Explotools-Brasil',
      link: 'https://explotools.com.br/',
      tone: 'lime',
    },
    {
      title: t('projects.proj7'),
      description: t('projects.desc7'),
      icon: 'lucide:bike',
      nome: 'Bicicletario',
      link: 'https://github.com/rafinhacuri/sistema-bicicletario',
      tone: 'cyan',
    },
    {
      title: t('projects.proj8'),
      description: t('projects.desc8'),
      icon: 'lucide:user',
      nome: 'curi.dev',
      link: '/',
      tone: 'yellow',
    },
  ])

  const projects2 = computed(() => [
    {
      title: t('projects.proj9'),
      description: t('projects.desc9'),
      icon: 'lucide:calendar',
      nome: 'Agenda de Auditorios',
      link: 'https://auditorios.cbpf.br/',
      contribuidores: ['Gabriel Rosa'],
      links: ['https://rosa.dev.br'],
      avatar: ['https://rosa.dev.br/gsr.webp'],
      tone: 'yellow',
    },
    {
      title: t('projects.proj10'),
      description: t('projects.desc10'),
      icon: 'lucide:book-marked',
      nome: 'Posgrad COEDU',
      link: 'https://posgrad.coedu.cbpf.br/login',
      contribuidores: ['Gabriel Rosa'],
      links: ['https://rosa.dev.br'],
      avatar: ['https://rosa.dev.br/gsr.webp'],
      tone: 'cyan',
    },
    {
      title: t('projects.uniposrio'),
      description: t('projects.uniposrio_desc'),
      icon: 'lucide:book-marked',
      nome: 'UNIPOSRIO Fisica',
      link: 'https://uniposrio-fisica.cbpf.br/',
      contribuidores: ['Gabriel Rosa', 'Victor Mendes'],
      links: ['https://rosa.dev.br', 'https://kanj1.com.br/'],
      avatar: [
        'https://rosa.dev.br/gsr.webp',
        'https://avatars.githubusercontent.com/u/122651100?v=4',
      ],
      tone: 'cyan',
    },
    {
      title: t('projects.id'),
      description: t('projects.id_desc'),
      icon: 'lucide:book-marked',
      nome: 'ID CBPF',
      link: 'https://id.cbpf.br',
      contribuidores: ['Gabriel Rosa'],
      links: ['https://rosa.dev.br'],
      avatar: ['https://rosa.dev.br/gsr.webp'],
      tone: 'lime',
    },
    {
      title: t('projects.labia'),
      description: t('projects.labia_desc'),
      icon: 'lucide:book-marked',
      nome: 'LABIA',
      link: 'https://labia.cbpf.br',
      contribuidores: ['Gabriel Rosa'],
      links: ['https://rosa.dev.br'],
      avatar: ['https://rosa.dev.br/gsr.webp'],
      tone: 'pink',
    },
  ])

  function toneClasses(tone: string): string {
    const tones: Record<string, string> = {
      cyan: 'border-cyan-300 text-cyan-300 hover:shadow-[10px_10px_0_#22d3ee]',
      yellow: 'border-yellow-300 text-yellow-300 hover:shadow-[10px_10px_0_#facc15]',
      pink: 'border-pink-300 text-pink-300 hover:shadow-[10px_10px_0_#ec4899]',
      lime: 'border-lime-300 text-lime-300 hover:shadow-[10px_10px_0_#a3e635]',
    }

    return tones[tone] ?? 'border-cyan-300 text-cyan-300 hover:shadow-[10px_10px_0_#22d3ee]'
  }

  function badgeClasses(tone: string): string {
    const tones: Record<string, string> = {
      cyan: 'border-cyan-300 bg-cyan-300',
      yellow: 'border-yellow-300 bg-yellow-300',
      pink: 'border-pink-300 bg-pink-400',
      lime: 'border-lime-300 bg-lime-300',
    }

    return tones[tone] ?? 'border-cyan-300 bg-cyan-300'
  }

  async function openProject(link: string): Promise<void> {
    await navigateTo(link, { external: true, open: { target: '_blank' } })
  }

  function contributorLink(project: { links: string[] }, index: number): string {
    return project.links[index] ?? project.links[0] ?? '/'
  }

  function contributorAvatar(project: { avatar: string[] }, index: number): string {
    return project.avatar[index] ?? project.avatar[0] ?? ''
  }
</script>

<template>
  <div class="relative overflow-hidden font-mono text-zinc-100">
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[32px_32px]" />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.28)_50%)] bg-size-[100%_4px] opacity-50" />

    <UContainer class="relative z-10 mt-8 space-y-12 pb-10 sm:mt-12">
      <header
        class="border-4 border-cyan-200 bg-black shadow-[10px_10px_0_#facc15]"
        data-aos="fade-up">
        <div
          class="flex flex-wrap items-center justify-between gap-3 border-b-4 border-cyan-200 bg-cyan-200 px-4 py-3 text-black">
          <p class="text-xs font-black tracking-[0.24em] uppercase">project.arcade</p>
          <div class="flex items-center gap-2 text-xs font-black uppercase">
            <span>{{ projects.length + projects2.length }} roms</span>
            <UIcon name="i-lucide-gamepad-2" class="size-5" />
          </div>
        </div>

        <div class="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1fr_280px] lg:items-end">
          <div>
            <p
              class="mb-4 inline-flex border-2 border-pink-300 bg-pink-400 px-2 py-1 text-xs font-black tracking-[0.18em] text-black uppercase shadow-[4px_4px_0_#000]">
              {{ t('projects.title') }}
            </p>
            <h1 class="max-w-4xl text-5xl leading-none font-black text-white uppercase sm:text-7xl">
              {{ t('projects.subtitle') }}
            </h1>
            <p
              class="mt-5 max-w-2xl border-l-4 border-yellow-300 pl-4 text-sm leading-7 text-yellow-100 sm:text-base">
              {{ t('projects.description') }}
            </p>
          </div>

          <div class="border-4 border-lime-300 bg-lime-300 p-4 text-black shadow-[6px_6px_0_#000]">
            <p class="text-xs font-black tracking-[0.2em] uppercase">press start</p>
            <div class="mt-4 grid grid-cols-6 gap-1">
              <span
                v-for="index in 36"
                :key="index"
                class="aspect-square border-2 border-black"
                :class="
                  index % 5 === 0
                    ? 'bg-pink-400'
                    : index % 4 === 0
                      ? 'bg-cyan-300'
                      : index % 3 === 0
                        ? 'bg-yellow-300'
                        : 'bg-black'
                " />
            </div>
          </div>
        </div>
      </header>

      <section class="space-y-6">
        <div
          class="flex flex-wrap items-end justify-between gap-3 border-b-4 border-yellow-300 pb-3"
          data-aos="fade-up"
          data-aos-delay="40">
          <h2 class="text-2xl font-black text-yellow-200 uppercase sm:text-3xl">
            {{ t('projects.title1') }}
          </h2>
          <p
            class="border-2 border-cyan-300 bg-cyan-300 px-2 py-1 text-xs font-black text-black uppercase shadow-[4px_4px_0_#000]">
            solo mode
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="(project, index) in projects" :key="project.nome" data-aos="zoom-in">
            <article
              class="group flex min-h-56 cursor-pointer flex-col justify-between border-4 bg-black p-4 shadow-[8px_8px_0_#000] transition duration-300 ease-out hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none"
              :class="toneClasses(project.tone)"
              role="button"
              tabindex="0"
              @click="openProject(project.link)"
              @keydown.enter="openProject(project.link)"
              @keydown.space.prevent="openProject(project.link)">
              <header class="flex items-start justify-between gap-4">
                <div class="flex min-w-0 items-start gap-3">
                  <div
                    class="flex size-12 shrink-0 items-center justify-center border-4 text-black"
                    :class="badgeClasses(project.tone)">
                    <Icon :name="project.icon" class="text-2xl" />
                  </div>
                  <div class="min-w-0 space-y-2">
                    <p class="text-xs font-black tracking-[0.18em] uppercase">
                      slot {{ String(index + 1).padStart(2, '0') }} // {{ project.nome }}
                    </p>
                    <h3 class="text-lg leading-6 font-black text-white uppercase">
                      {{ project.title }}
                    </h3>
                  </div>
                </div>
                <span
                  class="shrink-0 border-2 border-zinc-100 bg-zinc-100 px-2 py-1 text-[10px] font-black text-black uppercase">
                  {{ t('projects.open') }}
                </span>
              </header>

              <p class="mt-6 border-l-4 border-current pl-3 text-sm leading-6 text-zinc-300">
                {{ project.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <div
          class="flex flex-wrap items-end justify-between gap-3 border-b-4 border-pink-300 pb-3"
          data-aos="fade-up"
          data-aos-delay="60">
          <h2 class="text-2xl font-black text-pink-200 uppercase sm:text-3xl">
            {{ t('projects.title2') }}
          </h2>
          <p
            class="border-2 border-lime-300 bg-lime-300 px-2 py-1 text-xs font-black text-black uppercase shadow-[4px_4px_0_#000]">
            co-op mode
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div v-for="(project, index) in projects2" :key="project.nome" data-aos="zoom-in">
            <article
              class="group flex min-h-64 cursor-pointer flex-col justify-between border-4 bg-black p-4 shadow-[8px_8px_0_#000] transition duration-300 ease-out hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none"
              :class="toneClasses(project.tone)"
              role="button"
              tabindex="0"
              @click="openProject(project.link)"
              @keydown.enter="openProject(project.link)"
              @keydown.space.prevent="openProject(project.link)">
              <header class="flex items-start justify-between gap-4">
                <div class="flex min-w-0 items-start gap-3">
                  <div
                    class="flex size-12 shrink-0 items-center justify-center border-4 text-black"
                    :class="badgeClasses(project.tone)">
                    <Icon :name="project.icon" class="text-2xl" />
                  </div>
                  <div class="min-w-0 space-y-2">
                    <p class="text-xs font-black tracking-[0.18em] uppercase">
                      co-op {{ String(index + 1).padStart(2, '0') }} // {{ project.nome }}
                    </p>
                    <h3 class="text-lg leading-6 font-black text-white uppercase">
                      {{ project.title }}
                    </h3>
                  </div>
                </div>

                <span
                  class="shrink-0 border-2 border-zinc-100 bg-zinc-100 px-2 py-1 text-[10px] font-black text-black uppercase">
                  {{ t('projects.open') }}
                </span>
              </header>

              <p class="mt-6 border-l-4 border-current pl-3 text-sm leading-6 text-zinc-300">
                {{ project.description }}
              </p>

              <div class="mt-6 flex flex-wrap items-center gap-3 border-t-4 border-zinc-800 pt-4">
                <p class="text-xs font-black tracking-[0.18em] text-zinc-500 uppercase">player 2</p>
                <button
                  v-for="(contribuidor, contributorIndex) in project.contribuidores"
                  :key="contribuidor"
                  class="flex items-center gap-2 border-2 border-yellow-300 bg-yellow-300 px-2 py-1 text-xs font-black text-black uppercase shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5"
                  @click.stop="openProject(contributorLink(project, contributorIndex))">
                  <img
                    :src="contributorAvatar(project, contributorIndex)"
                    class="size-7 border-2 border-black object-cover"
                    :alt="contribuidor" />
                  <span>{{ contribuidor }}</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>
