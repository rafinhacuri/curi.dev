<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  useHead({ title: t('pageTitle') })
  useSeoMeta({ description: t('tagline') })
  defineOgImage('Default.takumi', {
    title: t('title'),
    description: t('tagline'),
  })

  const stacks = [
    { title: 'Nuxt', icon: 'devicon:nuxt', color: 'text-lime-300', bg: 'bg-lime-300' },
    { title: 'Vue', icon: 'devicon:vuejs', color: 'text-emerald-300', bg: 'bg-emerald-300' },
    { title: 'Tailwind', icon: 'devicon:tailwindcss', color: 'text-cyan-300', bg: 'bg-cyan-300' },
    { title: 'NodeJS', icon: 'devicon:nodejs', color: 'text-green-300', bg: 'bg-green-300' },
    { title: 'MongoDB', icon: 'devicon:mongodb', color: 'text-lime-300', bg: 'bg-lime-300' },
    { title: 'Typescript', icon: 'devicon:typescript', color: 'text-sky-300', bg: 'bg-sky-300' },
    { title: 'Golang', icon: 'devicon:go', color: 'text-cyan-200', bg: 'bg-cyan-200' },
    { title: 'Eslint', icon: 'devicon:eslint', color: 'text-violet-300', bg: 'bg-violet-300' },
    { title: 'HTML', icon: 'devicon:html5', color: 'text-orange-300', bg: 'bg-orange-300' },
    { title: 'CSS', icon: 'devicon:css3', color: 'text-blue-300', bg: 'bg-blue-300' },
    {
      title: 'Javascript',
      icon: 'devicon:javascript',
      color: 'text-yellow-300',
      bg: 'bg-yellow-300',
    },
    { title: 'Git', icon: 'devicon:git', color: 'text-red-300', bg: 'bg-red-300' },
    { title: 'Github', icon: 'devicon:github', color: 'text-zinc-100', bg: 'bg-zinc-100' },
    { title: 'Linux', icon: 'devicon:linux', color: 'text-yellow-200', bg: 'bg-yellow-200' },
    { title: 'Nginx', icon: 'devicon:nginx', color: 'text-green-300', bg: 'bg-green-300' },
    { title: 'Pm2', icon: 'devicon:pm2', color: 'text-lime-200', bg: 'bg-lime-200' },
    { title: 'Docker', icon: 'devicon:docker', color: 'text-sky-300', bg: 'bg-sky-300' },
    { title: 'DNS', icon: 'lucide:server', color: 'text-pink-300', bg: 'bg-pink-300' },
  ]

  const bootLines = [
    'CURI.OS EDITION',
    'LOADING WEB STACK...',
    'MOUNT /DEV/NUXT',
    'PING CBPF.INFRA OK',
    'READY.',
  ]

  const highlights = [
    {
      label: 'API',
      title: t('backend_title'),
      desc: t('backend_desc'),
      tone: 'border-cyan-300 bg-cyan-300 text-cyan-950',
    },
    {
      label: 'GUI',
      title: t('frontend_title'),
      desc: t('frontend_desc'),
      tone: 'border-pink-300 bg-pink-300 text-pink-950',
    },
    {
      label: 'OPS',
      title: t('devops_title'),
      desc: t('devops_desc'),
      tone: 'border-yellow-300 bg-yellow-300 text-yellow-950',
    },
  ]
</script>

<template>
  <div class="relative overflow-hidden font-mono text-zinc-100">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(34,211,238,0.18),transparent)]" />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[34px_34px]" />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.28)_50%)] bg-size-[100%_4px] opacity-60" />

    <UContainer class="relative z-10 mt-8 space-y-12 pb-10 sm:mt-12 sm:space-y-16">
      <section
        class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-stretch"
        data-aos="zoom-in">
        <div class="relative border-4 border-cyan-200 bg-black shadow-[10px_10px_0_#ec4899]">
          <div
            class="flex min-h-10 items-center justify-between border-b-4 border-cyan-200 bg-cyan-200 px-3 text-black">
            <div class="flex items-center gap-2 text-xs font-black uppercase">
              <span class="size-3 border-2 border-black bg-pink-500" />
              <span>rafael.exe</span>
            </div>
            <div class="flex gap-1.5">
              <span class="size-3 border-2 border-black bg-yellow-300" />
              <span class="size-3 border-2 border-black bg-lime-300" />
              <span class="size-3 border-2 border-black bg-pink-400" />
            </div>
          </div>

          <div class="grid min-h-140 gap-6 p-4 sm:p-6 lg:grid-cols-[1fr_170px]">
            <div class="flex flex-col justify-between gap-8">
              <div class="space-y-5">
                <div
                  class="inline-flex border-2 border-yellow-300 bg-yellow-300 px-2 py-1 text-xs font-black tracking-[0.18em] text-black uppercase shadow-[4px_4px_0_#000]">
                  {{ t('nome') }} // {{ t('tagline') }}
                </div>

                <div class="space-y-4">
                  <p
                    class="max-w-3xl text-5xl leading-none font-black text-white uppercase sm:text-7xl lg:text-8xl">
                    {{ t('title') }}
                  </p>
                  <p
                    class="max-w-2xl border-l-4 border-pink-400 pl-4 text-base leading-7 text-cyan-100 sm:text-lg">
                    {{ t('descricao1') }}
                  </p>
                </div>
              </div>

              <div class="grid gap-3 sm:grid-cols-2">
                <NuxtLinkLocale
                  to="/projects"
                  class="group flex min-h-14 items-center justify-between border-4 border-pink-300 bg-pink-400 px-4 py-3 text-sm font-black text-black uppercase shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]">
                  <span>{{ t('projetos') }}</span>
                  <UIcon name="i-lucide-rocket" class="size-5 transition group-hover:rotate-12" />
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  to="/certificates"
                  class="group flex min-h-14 items-center justify-between border-4 border-lime-200 bg-lime-300 px-4 py-3 text-sm font-black text-black uppercase shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]">
                  <span>{{ t('certificates') }}</span>
                  <UIcon
                    name="i-lucide-badge-check"
                    class="size-5 transition group-hover:rotate-12" />
                </NuxtLinkLocale>
              </div>
            </div>

            <div
              class="hidden min-w-52 border-4 border-zinc-200 bg-zinc-950 p-3 shadow-[6px_6px_0_#000] lg:block">
              <div class="grid grid-cols-5 gap-2">
                <span
                  v-for="index in 48"
                  :key="index"
                  class="aspect-square border border-zinc-700"
                  :class="
                    index % 7 === 0
                      ? 'bg-pink-400'
                      : index % 5 === 0
                        ? 'bg-yellow-300'
                        : index % 3 === 0
                          ? 'bg-cyan-300'
                          : 'bg-zinc-900'
                  " />
              </div>
              <div
                class="mt-4 border-2 border-cyan-200 bg-black p-3 text-[11px] leading-5 text-lime-300">
                <p v-for="line in bootLines" :key="line">&gt; {{ line }}</p>
                <p class="text-yellow-200">&gt; _</p>
              </div>
            </div>
          </div>
        </div>

        <aside class="grid gap-4">
          <div
            class="border-4 border-yellow-300 bg-yellow-200 p-4 text-black shadow-[8px_8px_0_#000]">
            <div class="mb-4 flex items-center justify-between border-b-4 border-black pb-3">
              <p class="text-xs font-black tracking-[0.2em] uppercase">status board</p>
              <UIcon name="i-lucide-radio-tower" class="size-5" />
            </div>
            <div class="space-y-3">
              <div
                class="flex items-center justify-between border-2 border-black bg-black px-3 py-2 text-lime-300">
                <span class="text-xs uppercase">{{ t('build') }}</span>
                <span class="h-3 w-3 bg-lime-300 shadow-[0_0_14px_#bef264]" />
              </div>
              <div
                class="flex items-center justify-between border-2 border-black bg-white px-3 py-2">
                <span class="text-xs uppercase">{{ t('mini_stacks') }}</span>
                <UIcon name="i-lucide-cpu" class="size-4" />
              </div>
            </div>
          </div>

          <div
            v-for="item in highlights"
            :key="item.label"
            class="border-4 bg-black p-4 shadow-[8px_8px_0_#000]"
            :class="item.tone.split(' ')[0]">
            <div
              class="mb-4 inline-flex border-2 px-2 py-1 text-xs font-black uppercase"
              :class="item.tone">
              {{ item.label }}
            </div>
            <p class="text-lg font-black text-white uppercase">
              {{ item.title }}
            </p>
            <p class="mt-2 text-sm leading-6 text-zinc-300">
              {{ item.desc }}
            </p>
          </div>
        </aside>
      </section>

      <section class="space-y-5" data-aos="zoom-in">
        <div class="flex flex-wrap items-end justify-between gap-3 border-b-4 border-cyan-200 pb-3">
          <p class="text-2xl font-black text-yellow-200 uppercase sm:text-3xl">
            {{ t('stack') }}
          </p>
          <p
            class="border-2 border-pink-300 bg-pink-400 px-2 py-1 text-xs font-black text-black uppercase shadow-[4px_4px_0_#000]">
            {{ t('stack_desc') }}
          </p>
        </div>

        <div
          class="relative overflow-hidden border-y-4 border-cyan-200 bg-black py-5 shadow-[inset_0_6px_0_#ec4899,inset_0_-6px_0_#facc15]">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-black to-transparent" />
          <div
            class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-black to-transparent" />

          <div class="stack-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
            <template v-for="loop in 2" :key="loop">
              <div
                v-for="stack in stacks"
                :key="`${loop}-${stack.title}`"
                class="group flex min-w-48 items-center gap-3 border-4 border-zinc-100 bg-black px-4 py-3 shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-[8px_8px_0_#ec4899]"
                :class="stack.color">
                <div
                  class="flex size-12 items-center justify-center border-2 border-current bg-zinc-950 transition group-hover:bg-zinc-900">
                  <UIcon :name="stack.icon" size="28" />
                </div>
                <div class="min-w-0">
                  <p class="text-xs font-black tracking-[0.18em] text-zinc-500 uppercase">
                    {{ t('module') }}
                  </p>
                  <p class="truncate text-sm font-black text-zinc-100 uppercase">
                    {{ stack.title }}
                  </p>
                </div>
                <span class="ml-auto size-3 border border-black" :class="stack.bg" />
              </div>
            </template>
          </div>
        </div>
      </section>

      <section data-aos="zoom-in" class="grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
        <div class="border-4 border-lime-300 bg-lime-300 p-5 text-black shadow-[8px_8px_0_#000]">
          <p class="text-xs font-black tracking-[0.2em] uppercase">timeline.sys</p>
          <p class="mt-3 text-3xl leading-none font-black uppercase">
            {{ t('experience') }}
          </p>
          <div class="mt-6 grid grid-cols-5 gap-1">
            <span
              v-for="index in 25"
              :key="index"
              class="aspect-square border-2 border-black"
              :class="
                index % 4 === 0 ? 'bg-pink-400' : index % 3 === 0 ? 'bg-cyan-300' : 'bg-black'
              " />
          </div>
        </div>

        <article class="border-4 border-cyan-200 bg-black shadow-[8px_8px_0_#ec4899]">
          <div
            class="flex flex-wrap items-center justify-between gap-3 border-b-4 border-cyan-200 bg-cyan-200 px-4 py-3 text-black">
            <p class="text-sm font-black uppercase">
              {{ t('experience_company_1') }}
            </p>
            <p class="border-2 border-black bg-yellow-300 px-2 py-1 text-xs font-black uppercase">
              {{ t('experience_period_1') }}
            </p>
          </div>

          <div class="p-4 sm:p-6">
            <p
              class="mb-5 inline-flex border-2 border-pink-300 bg-pink-400 px-3 py-2 text-sm font-black text-black uppercase shadow-[4px_4px_0_#000]">
              {{ t('experience_role_1') }}
            </p>

            <div class="grid gap-4">
              <p
                class="border-l-4 border-yellow-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('experience_p1') }}
              </p>
              <p
                class="border-l-4 border-cyan-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('experience_p2') }}
              </p>
              <p
                class="border-l-4 border-pink-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('experience_p3') }}
              </p>
              <p
                class="border-l-4 border-lime-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('experience_p4') }}
              </p>
              <p
                class="border-l-4 border-orange-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('experience_p5') }}
              </p>
            </div>
          </div>
        </article>
      </section>
    </UContainer>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "pageTitle": "Home",
    "tagline": "Full Stack Developer",
    "nome": "Rafael Curi",
    "title": "Hello, I'm Rafael",
    "descricao1": "I am a full-stack software developer from 🇧🇷 Rio de Janeiro, Brazil.",
    "stack": "My tech stacks",
    "stack_desc": "insert coin to inspect",
    "module": "module",
    "mini_stacks": "Nuxt · Vue · Go · Docker",
    "build": "Building experiences for the web",
    "projetos": "My projects",
    "certificates": "My certifications",
    "backend_title": "Backend & APIs",
    "backend_desc": "Go · Node · REST",
    "frontend_title": "Frontend",
    "frontend_desc": "Nuxt · Vue · Tailwind",
    "devops_title": "DevOps & Infrastructure",
    "devops_desc": "Docker · PowerDNS · Nginx",
    "experience": "Experience",
    "experience_period_1": "2023 - Present",
    "experience_company_1": "Brazilian Center for Research in Physics",
    "experience_role_1": "Software Engineer & DevOps",
    "experience_p1": "My operational foundation at CBPF is built on the efficient management of the web infrastructure. I have technical expertise in DNS operations (authoritative and recursive), enabling me to manage records and resolutions while ensuring service availability — not necessarily architecting the base structure, but operating it with technical rigor. I manage services orchestrated with Docker and served through Nginx (with HTTP/3 support), maintaining an optimized execution environment. Alongside this, I keep the data layer running on a hybrid MongoDB and Redis architecture, ensuring that both persistence and application caching deliver the stability and performance required.",
    "experience_p2": "Within the security and networking layer, I contribute to the continuous development of the Single Sign-On (SSO) system, centralizing institutional authentication.",
    "experience_p3": "In the development workflow, I strategically leverage the existing GitLab ecosystem. I use CI/CD pipelines and available Runners to ensure continuous integration of my deliverables. My focus is on maximizing these automation tools to run tests and validations, ensuring that code reaches production clean and reliable while preserving a fast release cycle.",
    "experience_p4": "With infrastructure and processes in place, I lead the software engineering efforts focused on modernizing the institutional core. I guide the migration of legacy PHP systems to a robust Go and Nuxt stack. This work involves rewriting critical logic to eliminate technical debt, bringing strong typing, modern security, and high performance into the institution’s daily operations.",
    "experience_p5": "To close the reliability loop, I implemented observability routines that monitor the health of this ecosystem. I use monitoring tools to track container and service behavior in real time, enabling proactive detection of anomalies and ensuring that technological modernization is accompanied by high availability."
  },
  "pt": {
    "pageTitle": "Home",
    "tagline": "Desenvolvedor Full Stack",
    "nome": "Rafael Curi",
    "title": "Olá, eu sou o Rafael",
    "descricao1": "Sou desenvolvedor de software full-stack do 🇧🇷 Rio de Janeiro, Brasil.",
    "stack": "Minhas tech-stacks",
    "stack_desc": "insira moeda para inspecionar",
    "module": "módulo",
    "mini_stacks": "Nuxt · Vue · Go · Docker",
    "build": "Construindo experiências para a web",
    "projetos": "Meus projetos",
    "certificates": "Minhas certificações",
    "backend_title": "Backend & APIs",
    "backend_desc": "Go · Node · REST",
    "frontend_title": "Frontend",
    "frontend_desc": "Nuxt · Vue · Tailwind",
    "devops_title": "DevOps & Infra",
    "devops_desc": "Docker · PowerDNS · Nginx",
    "experience": "Experiência",
    "experience_period_1": "2023 - Atual",
    "experience_company_1": "Centro Brasileiro de Pesquisas Físicas",
    "experience_role_1": "Engenheiro de Software & DevOps",
    "experience_p1": "Minha base operacional no CBPF sustenta-se na gestão eficiente da infraestrutura web. Possuo conhecimento técnico sobre a infraestrutura de DNS (autoritativo e recursivo) para gerenciar entradas e resoluções, garantindo a disponibilidade dos serviços sem necessariamente ter arquitetado a estrutura base, mas operando-a com rigor técnico. Gerencio serviços orquestrados em Docker e servidos por Nginx (com suporte a HTTP/3), garantindo um ambiente de execução otimizado. Integrado a isso, mantenho a camada de dados operando sobre uma arquitetura híbrida de MongoDB e Redis, assegurando que tanto a persistência quanto o cache da aplicação respondam com a estabilidade e performance necessárias.",
    "experience_p2": "Na camada de segurança e rede, atuo no desenvolvimento contínuo do sistema de Single Sign-On (SSO), centralizando a autenticação institucional.",
    "experience_p3": "No fluxo de desenvolvimento, faço uso estratégico do ecossistema GitLab já estabelecido. Utilizo os pipelines de CI/CD e Runners disponíveis para garantir a integração contínua das minhas entregas. Meu foco é maximizar o uso dessas ferramentas de automação para rodar testes e validações, assegurando que o código chegue à produção limpo e confiável, mantendo a agilidade do ciclo de release.",
    "experience_p4": "Com a sustentação e os processos garantidos, lidero a frente de engenharia de software focada na modernização do core institucional. Conduzo a migração dos sistemas legados em PHP para uma stack robusta em Go e Nuxt. Esse trabalho envolve reescrever lógicas críticas para eliminar dívida técnica, trazendo a segurança da tipagem forte e a performance de linguagens modernas para o dia a dia da instituição.",
    "experience_p5": "Para fechar o ciclo de confiabilidade, implementei rotinas de observabilidade que monitoram a saúde desse ecossistema. Utilizo ferramentas de monitoramento para vigiar o comportamento dos containers e serviços em tempo real, o que me permite atuar de forma proativa na detecção de anomalias, garantindo que a modernização tecnológica venha acompanhada de alta disponibilidade."
  }
}
</i18n>
