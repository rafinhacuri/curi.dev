<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('cert.head') })
useSeoMeta({ description: t('home.subtitle') })

const certificates = computed(() => [
  { titulo: t('cert.js'), foto: '/cursos/js.png', link: '/certificates/js.jpg', icons: ['devicon:javascript'], nome: 'JavaScript' },
  { titulo: t('cert.ts'), foto: '/cursos/ts.png', link: '/certificates/ts.jpg', icons: ['devicon:typescript'], nome: 'TypeScript' },
  { titulo: t('cert.go'), foto: '/cursos/go.png', link: '/certificates/go.jpg', icons: ['devicon:go'], nome: 'Golang' },
  { titulo: t('cert.docker'), foto: '/cursos/docker.png', link: '/certificates/docker.jpg', icons: ['devicon:docker'], nome: 'Docker' },
  { titulo: t('cert.vuejs'), foto: '/cursos/vuejs.png', link: '/certificates/vuejs.jpg', icons: ['devicon:vuejs'], nome: 'vuejs' },
  { titulo: t('cert.nuxtjs'), foto: '/cursos/nuxtjs.png', link: '/certificates/nuxtjs.jpg', icons: ['devicon:nuxtjs'], nome: 'nuxtjs' },
  { titulo: t('cert.node'), foto: '/cursos/node.png', link: '/certificates/node.jpg', icons: ['devicon:nodejs'], nome: 'nodeJS' },
  { titulo: t('cert.oauth'), foto: '/cursos/oauth.png', link: '/certificates/oauth.png', icons: ['devicon:oauth'], nome: 'OAuth' },
  { titulo: t('cert.git_github'), foto: '/cursos/git_github.png', link: '/certificates/git_github.pdf', icons: ['devicon:git', 'devicon:github'], nome: 'git e github' },
  { titulo: t('cert.html_css1'), foto: '/cursos/html_css01.png', link: '/certificates/html_css01.pdf', icons: ['devicon:html5', 'devicon:css3'], nome: 'html5 e css3 modulo 1' },
  { titulo: t('cert.html_css2'), foto: '/cursos/html_css02.png', link: '/certificates/html_css02.pdf', icons: ['devicon:html5', 'devicon:css3'], nomde: 'html5 e css3 modulo 2' },
  { titulo: t('cert.html_css3'), foto: '/cursos/html_css03.png', link: '/certificates/html_css03.pdf', icons: ['devicon:html5', 'devicon:css3'], nome: 'html5 e css3 modulo 3' },
  { titulo: t('cert.html_css4'), foto: '/cursos/html_css04.png', link: '/certificates/html_css04.pdf', icons: ['devicon:html5', 'devicon:css3'], nome: 'html5 e css3 modulo 4' },
  { titulo: t('cert.html_css5'), foto: '/cursos/html_css05.png', link: '/certificates/html_css04.pdf', icons: ['devicon:html5', 'devicon:css3'], nome: 'html5 d css3 modulo 5' },
  { titulo: t('cert.linux00'), foto: '/cursos/linux00.png', link: '/certificates/linux00.pdf', icons: ['devicon:linux'], nome: 'linux modulo 0' },
  { titulo: t('cert.linux01'), foto: '/cursos/linux01.png', link: '/certificates/linux01.pdf', icons: ['devicon:linux'], nome: 'linux modulo 1' },
  { titulo: t('cert.linux02'), foto: '/cursos/linux02.png', link: '/certificates/linux02.pdf', icons: ['devicon:linux'], nome: 'linux modulo 2' },
  { titulo: t('cert.linux03'), foto: '/cursos/linux03.png', link: '/certificates/linux03.pdf', icons: ['devicon:linux'], nome: 'linux modulo 3' },
  { titulo: t('cert.linux04'), foto: '/cursos/linux05.png', link: '/certificates/linux04.pdf', icons: ['devicon:linux'], nome: 'linux modulo 4' },
  { titulo: t('cert.linux05'), foto: '/cursos/linux05.png', link: '/certificates/linux05.pdf', icons: ['devicon:linux'], nome: 'linux modulo 5' },
  { titulo: t('cert.dns'), foto: '/cursos/dns.png', link: '/certificates/dns.pdf', icons: ['lucide:server'], nome: 'DNS' },
])

const searchQuery = ref('')

function normalizeText(text: string): string {
  return text.toLowerCase().normalize('NFD').replaceAll(/[\u0300-\u036F]/g, '')
}

const filteredCertificates = computed(() => {
  const query = normalizeText(searchQuery.value)
  return certificates.value.filter(cert => normalizeText(cert.titulo).includes(query))
})
</script>

<template>
  <UContainer class="mt-10 space-y-16">
    <header class="space-y-6" data-aos="fade-up">
      <div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.26em] text-emerald-200 uppercase">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span>{{ t('cert.head') }}</span>
      </div>

      <div class="space-y-3">
        <h1 class="text-3xl font-semibold text-slate-50 sm:text-4xl lg:text-5xl">
          {{ t('cert.title') }}
        </h1>
        <p class="max-w-2xl text-sm leading-relaxed text-slate-300">
          {{ t('cert.description') }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <div class="max-w-md min-w-60 flex-1">
          <label for="search" class="sr-only">
            {{ t('cert.busca') }}
          </label>
          <UInput id="search" v-model="searchQuery" :placeholder="t('cert.busca')" icon="lucide:search" size="md" class="w-full" />
        </div>

        <div class="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span class="rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1">
            {{ filteredCertificates.length }} / {{ certificates.length }} {{ t('cert.exibidos') }}
          </span>
          <span class="hidden rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 sm:inline-flex">
            {{ t('cert.filter_realtime') }}
          </span>
        </div>
      </div>
    </header>

    <section class="mt-12" data-aos="fade-up" data-aos-delay="80">
      <div v-if="filteredCertificates.length" class="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        <UCard v-for="cert in filteredCertificates" :key="cert.foto" as="article" data-aos="zoom-in" class="relative overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl backdrop-blur-xl">
          <div class="pointer-events-none absolute inset-0 bg-radial from-emerald-500/12 via-slate-950/0 to-slate-950/0" />
          <div class="relative z-10 flex h-full flex-col">
            <div class="relative overflow-hidden rounded-2xl">
              <NuxtImg :src="cert.foto" :alt="cert.titulo" class="h-40 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
            </div>

            <div class="mt-4 flex-1 space-y-3">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <p class="text-xs font-semibold tracking-[0.18em] text-emerald-300 uppercase">
                    {{ cert.nome || 'Certificado' }}
                  </p>
                  <h3 class="text-sm font-semibold text-slate-50">
                    {{ cert.titulo }}
                  </h3>
                </div>

                <div class="flex flex-col items-end gap-1">
                  <span v-for="icon in cert.icons" :key="icon" class="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80">
                    <Icon :name="icon" class="text-[18px] text-slate-200" />
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-end text-[11px] text-slate-400">
              <NuxtLink v-if="cert.link" :to="cert.link" external target="_blank" class="inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20">
                <Icon name="lucide:external-link" class="text-[14px]" />
                <span>{{ t('cert.ver_cert') }}</span>
              </NuxtLink>
            </div>
          </div>
        </UCard>
      </div>

      <div v-else class="mt-16 flex flex-col items-center justify-center gap-3 text-center text-sm text-slate-400" data-aos="fade-up">
        <Icon name="lucide:search-x" class="text-slate-600" size="32" />
        <p>
          {{ t('cert.no_results_prefix') }}
          <span class="font-semibold text-slate-200">{{ `"${searchQuery}"` }}</span>.
        </p>
        <p class="text-xs text-slate-500">
          {{ t('cert.no_results_tip') }}
        </p>
      </div>
    </section>
  </UContainer>
</template>
