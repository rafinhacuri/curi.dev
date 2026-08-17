<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  useHead({ title: t('pageTitle') })
  useSeoMeta({ description: t('tagline') })
  defineOgImage('Model.takumi', {
    title: t('title'),
    description: t('subtitle'),
  })

  const projects = computed(() => [
    {
      title: t('proj11'),
      description: t('desc11'),
      icon: 'lucide:server',
      nome: 'SanchezDNS',
      link: 'https://sanchezdns.curi.dev.br',
      tone: 'lime',
    },
    {
      title: t('escola_iac_2026'),
      description: t('escola_iac_2026_desc'),
      icon: 'lucide:server',
      nome: 'Escola IAC 2026',
      link: 'https://escola-iac.cbpf.br/',
      tone: 'cyan',
    },
    {
      title: t('proj12'),
      description: t('desc12'),
      icon: 'lucide:coins',
      nome: 'Deku',
      link: 'https://deku.curi.dev.br',
      tone: 'yellow',
    },
    {
      title: t('proj1'),
      description: t('desc1'),
      icon: 'lucide:tv',
      nome: 'Agenda-CBPF',
      link: 'https://youtu.be/Z866qplsBdA',
      tone: 'pink',
    },
    {
      title: t('proj2'),
      description: t('desc2'),
      icon: 'lucide:wrench',
      nome: 'Os',
      link: 'https://youtu.be/MRcAPzhyDLA',
      tone: 'lime',
    },
    {
      title: t('proj3'),
      description: t('desc3'),
      icon: 'lucide:venetian-mask',
      nome: 'Eventos',
      link: 'https://eventos.cbpf.br/wteo/',
      tone: 'cyan',
    },
    {
      title: t('proj4'),
      description: t('desc4'),
      icon: 'lucide:database',
      nome: 'Mesonpi',
      link: 'https://mesonpi.cbpf.br/projetos/',
      tone: 'yellow',
    },
    {
      title: t('proj5'),
      description: t('desc5'),
      icon: 'lucide:building',
      nome: 'SGCAD-Painel SELIC',
      link: 'https://youtu.be/Rh3RZ4rqL_I',
      tone: 'pink',
    },
    {
      title: t('proj6'),
      description: t('desc6'),
      icon: 'lucide:building-2',
      nome: 'Explotools-Brasil',
      link: 'https://explotools.com.br/',
      tone: 'lime',
    },
    {
      title: t('proj7'),
      description: t('desc7'),
      icon: 'lucide:bike',
      nome: 'Bicicletario',
      link: 'https://github.com/rafinhacuri/sistema-bicicletario',
      tone: 'cyan',
    },
    {
      title: t('proj8'),
      description: t('desc8'),
      icon: 'lucide:user',
      nome: 'curi.dev',
      link: '/',
      tone: 'yellow',
    },
  ])

  const projects2 = computed(() => [
    {
      title: t('proj9'),
      description: t('desc9'),
      icon: 'lucide:calendar',
      nome: 'Agenda de Auditorios',
      link: 'https://auditorios.cbpf.br/',
      contribuidores: ['Gabriel Rosa'],
      links: ['https://rosa.dev.br'],
      avatar: ['https://rosa.dev.br/gsr.webp'],
      tone: 'yellow',
    },
    {
      title: t('proj10'),
      description: t('desc10'),
      icon: 'lucide:book-marked',
      nome: 'Posgrad COEDU',
      link: 'https://posgrad.coedu.cbpf.br/login',
      contribuidores: ['Gabriel Rosa'],
      links: ['https://rosa.dev.br'],
      avatar: ['https://rosa.dev.br/gsr.webp'],
      tone: 'cyan',
    },
    {
      title: t('uniposrio'),
      description: t('uniposrio_desc'),
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
      title: t('id'),
      description: t('id_desc'),
      icon: 'lucide:book-marked',
      nome: 'ID CBPF',
      link: 'https://id.cbpf.br',
      contribuidores: ['Gabriel Rosa'],
      links: ['https://rosa.dev.br'],
      avatar: ['https://rosa.dev.br/gsr.webp'],
      tone: 'lime',
    },
    {
      title: t('labia'),
      description: t('labia_desc'),
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
              {{ t('title') }}
            </p>
            <h1 class="max-w-4xl text-5xl leading-none font-black text-white uppercase sm:text-7xl">
              {{ t('subtitle') }}
            </h1>
            <p
              class="mt-5 max-w-2xl border-l-4 border-yellow-300 pl-4 text-sm leading-7 text-yellow-100 sm:text-base">
              {{ t('description') }}
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
            {{ t('title1') }}
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
                  {{ t('open') }}
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
            {{ t('title2') }}
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
                  {{ t('open') }}
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

<i18n lang="json">
{
  "en": {
    "pageTitle": "Projects",
    "tagline": "Full Stack Developer",
    "title": "My Projects",
    "subtitle": "Systems that came out of the box.",
    "description": "A cabinet of web projects, infrastructure, internal tools and product experiments.",
    "open": "Open project",
    "title1": "Solo Projects",
    "title2": "Team Projects",
    "proj1": "Agenda-CBPF",
    "desc1": "News management system",
    "proj2": "Os",
    "desc2": "Service order system",
    "proj3": "Events",
    "desc3": "Event page creation system",
    "proj4": "Mesonpi",
    "desc4": "Link system for CBPF pages",
    "proj5": "SGCAD-Painel SELIC",
    "desc5": "Contract and employee control system",
    "proj6": "Explotools-Brasil",
    "desc6": "Link system for event pages",
    "proj7": "Bicicletário",
    "desc7": "Bike rack management and control application",
    "proj8": "curi.dev.br",
    "desc8": "My personal website",
    "proj9": "Agenda de Auditórios",
    "desc9": "Auditorium scheduling system",
    "proj10": "Posgrad COEDU",
    "desc10": "CBPF postgraduate system",
    "proj11": "SanchezDNS",
    "desc11": "DNS management system",
    "proj12": "Deku",
    "desc12": "Income and expense control system",
    "escola_iac_2026": "Escola IAC 2026",
    "escola_iac_2026_desc": "Escola IAC 2026 page",
    "labia": "LABIA",
    "labia_desc": "LABIA page",
    "uniposrio": "Uniposrio",
    "uniposrio_desc": "Registration control system for the master's and doctoral programs at UNIPOSRIO",
    "id": "ID CBPF",
    "id_desc": "CBPF identity management system"
  },
  "pt": {
    "pageTitle": "Projetos",
    "tagline": "Desenvolvedor Full Stack",
    "title": "Meus Projetos",
    "subtitle": "Sistemas que saíram do cartucho.",
    "description": "Um gabinete de projetos web, infra, ferramentas internas e experimentos de produto.",
    "open": "Abrir projeto",
    "title1": "Projetos Solo",
    "title2": "Projetos em Equipe",
    "proj1": "Agenda-CBPF",
    "desc1": "Sistema de gerenciamento de notícias",
    "proj2": "Os",
    "desc2": "Sistema das ordens de serviço",
    "proj3": "Eventos",
    "desc3": "Sistema criacão de páginas de eventos",
    "proj4": "Mesonpi",
    "desc4": "Sistema de link para páginas do CBPF",
    "proj5": "SGCAD-Painel SELIC",
    "desc5": "Sistema de controle de contratos e funcionários",
    "proj6": "Explotools-Brasil",
    "desc6": "Aplicação WEB da empressa Explotools-Brasil",
    "proj7": "Bicicletário",
    "desc7": "Sistema de gestão e controle de um bicicletário",
    "proj8": "curi.dev.br",
    "desc8": "Meu site pessoal",
    "proj9": "Agenda de Auditórios",
    "desc9": "Sistema de gerenciamento de reservas de auditórios",
    "proj10": "Posgrad COEDU",
    "desc10": "Sistema de pós-graduação do CBPF",
    "proj11": "SanchezDNS",
    "desc11": "Sistema de gerenciamento de DNS",
    "proj12": "Deku",
    "desc12": "Sistema de controle de receitas e despesas",
    "escola_iac_2026": "Escola IAC 2026",
    "escola_iac_2026_desc": "Página da Escola IAC 2026",
    "labia": "LABIA",
    "labia_desc": "Página do Laboratório de Instrumentação e Astrofísica (LABIA)",
    "uniposrio": "Uniposrio",
    "uniposrio_desc": "Sistema de controle de inscrições para o mestrado e doutorado da UNIPOSRIO",
    "id": "ID CBPF",
    "id_desc": "Sistema de gerenciamento de identidade do CBPF"
  }
}
</i18n>
