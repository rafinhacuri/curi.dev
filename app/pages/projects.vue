<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('header.projects') })
useSeoMeta({ description: t('home.subtitle') })

const projects = computed(() => [
  { title: t('projects.proj11'), description: t('projects.desc11'), icon: 'lucide:server', nome: 'SanchezDNS', link: 'https://sanchezdns.curi.dev.br' },
  { title: t('projects.proj12'), description: t('projects.desc12'), icon: 'lucide:coins', nome: 'Deku', link: 'https://deku.curi.dev.br' },
  { title: t('projects.proj1'), description: t('projects.desc1'), icon: 'lucide:tv', nome: 'Agenda-CBPF', link: 'https://youtu.be/Z866qplsBdA' },
  { title: t('projects.proj2'), description: t('projects.desc2'), icon: 'lucide:wrench', nome: 'Os', link: 'https://youtu.be/MRcAPzhyDLA' },
  { title: t('projects.proj3'), description: t('projects.desc3'), icon: 'lucide:venetian-mask', nome: 'Eventos', link: 'https://eventos.cbpf.br/wteo/' },
  { title: t('projects.proj4'), description: t('projects.desc4'), icon: 'lucide:database', nome: 'Mesonpi', link: 'https://mesonpi.cbpf.br/projetos/' },
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
  <UContainer class="mt-10 space-y-16">
    <header class="space-y-4" data-aos="fade-up">
      <p class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.25em] text-emerald-200 uppercase">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span>{{ t('projects.title') }}</span>
      </p>
    </header>

    <section class="space-y-6">
      <div class="flex items-center justify-between gap-4" data-aos="fade-up" data-aos-delay="40">
        <h2 class="text-base font-semibold tracking-[0.2em] text-slate-400 uppercase">
          {{ t('projects.title1') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article v-for="project in projects" :key="project.nome" data-aos="zoom-in" class=" flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_28px_rgba(16,185,129,0.30)]" role="button" @click="navigateTo(project.link, { external: true, open: { target: '_blank' } })" @keydown.enter="navigateTo(project.link, { external: true, open: { target: '_blank' } })">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80">
                <Icon :name="project.icon" class="text-xl text-emerald-300" />
              </div>
              <div class="space-y-1">
                <p class="text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase">
                  {{ project.nome }}
                </p>
                <h3 class="text-sm font-semibold text-slate-50">
                  {{ project.description }}
                </h3>
              </div>
            </div>
            <span class="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
              <UIcon name="lucide:external-link" class="size-3" />
              <span>{{ t('projects.open') }}</span>
            </span>
          </div>
        </article>
      </div>
    </section>

    <section class="space-y-6">
      <div class="flex items-center justify-between gap-4" data-aos="fade-up" data-aos-delay="60">
        <h2 class="text-base font-semibold tracking-[0.2em] text-slate-400 uppercase">
          {{ t('projects.title2') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article v-for="project in projects2" :key="project.nome" data-aos="zoom-in" class="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-[0_0_28px_rgba(56,189,248,0.25)]" role="button" @click="navigateTo(project.link, { external: true, open: { target: '_blank' } })" @keydown.enter="navigateTo(project.link, { external: true, open: { target: '_blank' } })">
          <header class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80">
                <Icon :name="project.icon" class="text-xl text-sky-300" />
              </div>
              <div class="space-y-1">
                <p class="text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">
                  {{ project.nome }}
                </p>
                <h3 class="text-sm font-semibold text-slate-50">
                  {{ project.description }}
                </h3>
              </div>
            </div>

            <div class="hidden flex-col items-end gap-2 md:flex">
              <button v-for="(contribuidor, index) in project.contribuidores" :key="index" class="flex items-center gap-2" @click.stop="navigateTo(project.links[index], { external: true, open: { target: '_blank' } })">
                <img :src="project.avatar[index]" class="size-8 rounded-full" :alt="contribuidor">
              </button>
            </div>
          </header>

          <div class="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <div class="flex flex-wrap items-center gap-2 md:hidden">
              <button v-for="(contribuidor, index) in project.contribuidores" :key="index" class="flex items-center gap-2" @click.stop="navigateTo(project.links[index], { external: true, open: { target: '_blank' } })">
                <img :src="project.avatar[index]" class="size-7 rounded-full" :alt="contribuidor">
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </UContainer>
</template>
