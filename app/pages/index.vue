<script setup lang="ts">
  const { t } = useI18n()

  useHead({ title: t('home.title2') })
  useSeoMeta({ description: t('home.subtitle') })

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
      title: t('home.backend_title'),
      desc: t('home.backend_desc'),
      tone: 'border-cyan-300 bg-cyan-300 text-cyan-950',
    },
    {
      label: 'GUI',
      title: t('home.frontend_title'),
      desc: t('home.frontend_desc'),
      tone: 'border-pink-300 bg-pink-300 text-pink-950',
    },
    {
      label: 'OPS',
      title: t('home.devops_title'),
      desc: t('home.devops_desc'),
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
                  {{ t('home.nome') }} // {{ t('home.subtitle') }}
                </div>

                <div class="space-y-4">
                  <p
                    class="max-w-3xl text-5xl leading-none font-black text-white uppercase sm:text-7xl lg:text-8xl">
                    {{ t('home.title') }}
                  </p>
                  <p
                    class="max-w-2xl border-l-4 border-pink-400 pl-4 text-base leading-7 text-cyan-100 sm:text-lg">
                    {{ t('home.descricao1') }}
                  </p>
                </div>
              </div>

              <div class="grid gap-3 sm:grid-cols-2">
                <NuxtLinkLocale
                  to="/projects"
                  class="group flex min-h-14 items-center justify-between border-4 border-pink-300 bg-pink-400 px-4 py-3 text-sm font-black text-black uppercase shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]">
                  <span>{{ t('home.projetos') }}</span>
                  <UIcon name="i-lucide-rocket" class="size-5 transition group-hover:rotate-12" />
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  to="/certificates"
                  class="group flex min-h-14 items-center justify-between border-4 border-lime-200 bg-lime-300 px-4 py-3 text-sm font-black text-black uppercase shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]">
                  <span>{{ t('home.certificates') }}</span>
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
                <span class="text-xs uppercase">{{ t('home.build') }}</span>
                <span class="h-3 w-3 bg-lime-300 shadow-[0_0_14px_#bef264]" />
              </div>
              <div
                class="flex items-center justify-between border-2 border-black bg-white px-3 py-2">
                <span class="text-xs uppercase">{{ t('home.mini_stacks') }}</span>
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
            {{ t('home.stack') }}
          </p>
          <p
            class="border-2 border-pink-300 bg-pink-400 px-2 py-1 text-xs font-black text-black uppercase shadow-[4px_4px_0_#000]">
            {{ t('home.stack_desc') }}
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
                    {{ t('home.module') }}
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

      <section data-aos="zoom-in" class="grid gap-6 lg:grid-cols-[260px_1fr]">
        <div class="border-4 border-lime-300 bg-lime-300 p-5 text-black shadow-[8px_8px_0_#000]">
          <p class="text-xs font-black tracking-[0.2em] uppercase">timeline.sys</p>
          <p class="mt-3 text-3xl leading-none font-black uppercase">
            {{ t('home.experience') }}
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
              {{ t('home.experience_company_1') }}
            </p>
            <p class="border-2 border-black bg-yellow-300 px-2 py-1 text-xs font-black uppercase">
              {{ t('home.experience_period_1') }}
            </p>
          </div>

          <div class="p-4 sm:p-6">
            <p
              class="mb-5 inline-flex border-2 border-pink-300 bg-pink-400 px-3 py-2 text-sm font-black text-black uppercase shadow-[4px_4px_0_#000]">
              {{ t('home.experience_role_1') }}
            </p>

            <div class="grid gap-4">
              <p
                class="border-l-4 border-yellow-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('home.experience_p1') }}
              </p>
              <p
                class="border-l-4 border-cyan-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('home.experience_p2') }}
              </p>
              <p
                class="border-l-4 border-pink-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('home.experience_p3') }}
              </p>
              <p
                class="border-l-4 border-lime-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('home.experience_p4') }}
              </p>
              <p
                class="border-l-4 border-orange-300 bg-zinc-950 px-4 py-3 text-sm leading-7 text-zinc-200">
                {{ t('home.experience_p5') }}
              </p>
            </div>
          </div>
        </article>
      </section>
    </UContainer>
  </div>
</template>
