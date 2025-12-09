<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('home.title2') })
useSeoMeta({ description: t('home.subtitle') })
defineOgImageComponent('Home', { title: t('home.title2'), subtitle: t('home.title') })

const stacks = [
  { title: 'Nuxt', icon: 'devicon:nuxt' },
  { title: 'Vue', icon: 'devicon:vuejs' },
  { title: 'Tailwind', icon: 'devicon:tailwindcss' },
  { title: 'NodeJS', icon: 'devicon:nodejs' },
  { title: 'MongoDB', icon: 'devicon:mongodb' },
  { title: 'Typescript', icon: 'devicon:typescript' },
  { title: 'Golang', icon: 'devicon:go' },
  { title: 'Eslint', icon: 'devicon:eslint' },
  { title: 'HTML', icon: 'devicon:html5' },
  { title: 'CSS', icon: 'devicon:css3' },
  { title: 'Javascript', icon: 'devicon:javascript' },
  { title: 'Git', icon: 'devicon:git' },
  { title: 'Github', icon: 'devicon:github' },
  { title: 'Linux', icon: 'devicon:linux' },
  { title: 'Nginx', icon: 'devicon:nginx' },
  { title: 'Pm2', icon: 'devicon:pm2' },
  { title: 'Docker', icon: 'devicon:docker' },
  { title: 'DNS', icon: 'lucide:server' },
]
</script>

<template>
  <UContainer class="mt-10 space-y-16">
    <section class="w-full" data-aos="zoom-in">
      <div class="relative overflow-hidden rounded-[28px] border border-emerald-400/35 bg-slate-950/95 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:p-8">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.85),transparent_70%)]" />
        <div class="pointer-events-none absolute inset-0 opacity-45">
          <div class="absolute -inset-x-32 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/70 to-transparent" />
        </div>
        <div class="relative z-10 space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-emerald-200 uppercase">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.9)]" />
            <span>{{ t('home.nome') }}</span>
            <span class="h-px w-6 bg-emerald-400/60" />
            <span>{{ t('home.subtitle') }}</span>
          </div>

          <div class="space-y-3">
            <p class="text-4xl leading-tight font-semibold text-white drop-shadow-lg sm:text-5xl">
              {{ t('home.title') }}
            </p>
            <p class="max-w-xl text-sm leading-relaxed text-slate-300">
              {{ t('home.descricao1') }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <div class="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">
              <span class="size-1.5 rounded-full bg-emerald-400" />
              <span>{{ t('home.subtitle') }}</span>
            </div>
            <div class="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">
              <UIcon name="i-lucide-code" />
              <span>{{ t('home.mini_stacks') }}</span>
            </div>
            <div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-100">
              <UIcon name="i-lucide-radar" />
              <span>{{ t('home.build') }}</span>
            </div>
          </div>

          <div class="mt-2 flex flex-wrap gap-3">
            <NuxtLinkLocale to="/projects" class="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.25)] transition hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white">
              <UIcon name="i-lucide-rocket" class="size-4" />
              {{ t('home.projetos') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/certificates" class="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_18px_rgba(16,185,129,0.25)] transition hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white">
              <UIcon name="i-lucide-terminal" class="size-4" />
              {{ t('home.certificates') }}
            </NuxtLinkLocale>
          </div>

          <div class="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
            <div class="rounded-2xl border border-emerald-500/20 bg-slate-900/70 px-3 py-2">
              <p class="text-[11px] tracking-[0.18em] text-emerald-300 uppercase">
                {{ t('home.backend_title') }}
              </p>
              <p class="mt-1 text-sm font-semibold text-slate-50">
                {{ t('home.backend_desc') }}
              </p>
            </div>
            <div class="rounded-2xl border border-sky-500/25 bg-slate-900/70 px-3 py-2">
              <p class="text-[11px] tracking-[0.18em] text-sky-300 uppercase">
                {{ t('home.frontend_title') }}
              </p>
              <p class="mt-1 text-sm font-semibold text-slate-50">
                {{ t('home.frontend_desc') }}
              </p>
            </div>
            <div class="rounded-2xl border border-slate-600/40 bg-slate-900/70 px-3 py-2">
              <p class="text-[11px] tracking-[0.18em] text-slate-300 uppercase">
                {{ t('home.devops_title') }}
              </p>
              <p class="mt-1 text-sm font-semibold text-slate-50">
                {{ t('home.devops_desc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-8" data-aos="zoom-in">
      <p class="text-xs font-semibold tracking-[0.3em] text-emerald-400 uppercase">
        {{ t('home.stack') }}
      </p>

      <UMarquee class="py-2">
        <div v-for="stack in stacks" :key="stack.title" class="flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-2 shadow-[0_0_18px_rgba(15,23,42,0.95)] transition hover:border-emerald-400/50 hover:shadow-[0_0_26px_rgba(16,185,129,0.45)]">
          <div class="flex size-10 items-center justify-center rounded-2xl border border-emerald-500/30 bg-slate-950/90">
            <UIcon :name="stack.icon" size="22" />
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-medium text-slate-100">
              {{ stack.title }}
            </span>
          </div>
        </div>
      </UMarquee>
    </section>

    <section data-aos="zoom-in" class="mt-10 space-y-6">
      <div class="flex items-center justify-between gap-3">
        <div class="space-y-1">
          <p class="text-xs font-semibold tracking-[0.3em] text-emerald-400 uppercase">
            {{ t('home.experience') }}
          </p>
        </div>
      </div>

      <div class="space-y-4">
        <div class="group b relative flex items-start gap-4 rounded-2xl px-4 py-3">
          <div class="relative mt-1 flex flex-col items-center">
            <span class="relative flex h-8 w-26 items-center justify-center">
              <span class="absolute inset-0 rounded-full bg-emerald-500/20 blur-sm transition group-hover:bg-emerald-500/30" />
              <span class="relative rounded-full border border-emerald-500/60 bg-slate-950/90 px-3 py-1 text-[11px] font-semibold text-nowrap text-emerald-100">
                {{ t('home.experience_period_1') }}
              </span>
            </span>
            <span class="mt-2 h-96 w-px rounded-full bg-linear-to-b from-emerald-400/60 via-slate-700/70 to-transparent" />
          </div>

          <div class="flex-1 space-y-1.5">
            <p class="text-sm font-medium text-slate-50">
              {{ t('home.experience_company_1') }}
            </p>
            <p>
              {{ t('home.experience_role_1') }}
            </p>

            <p class="text-[13px] leading-relaxed text-slate-400">
              {{ t('home.experience_p1') }}
            </p>

            <p class="text-[13px] leading-relaxed text-slate-400">
              {{ t('home.experience_p2') }}
            </p>

            <p class="text-[13px] leading-relaxed text-slate-400">
              {{ t('home.experience_p3') }}
            </p>

            <p class="text-[13px] leading-relaxed text-slate-400">
              {{ t('home.experience_p4') }}
            </p>

            <p class="text-[13px] leading-relaxed text-slate-400">
              {{ t('home.experience_p5') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </UContainer>
</template>
