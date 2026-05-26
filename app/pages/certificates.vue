<script setup lang="ts">
  const { t } = useI18n()

  useHead({ title: t('cert.head') })
  useSeoMeta({ description: t('home.subtitle') })

  const certificates = computed(() => [
    {
      titulo: t('cert.js'),
      foto: '/cursos/js.png',
      link: '/certificates/js.jpg',
      icons: ['devicon:javascript'],
      nome: 'JavaScript',
    },
    {
      titulo: t('cert.ts'),
      foto: '/cursos/ts.png',
      link: '/certificates/ts.jpg',
      icons: ['devicon:typescript'],
      nome: 'TypeScript',
    },
    {
      titulo: t('cert.go'),
      foto: '/cursos/go.png',
      link: '/certificates/go.jpg',
      icons: ['devicon:go'],
      nome: 'Golang',
    },
    {
      titulo: t('cert.docker'),
      foto: '/cursos/docker.png',
      link: '/certificates/docker.jpg',
      icons: ['devicon:docker'],
      nome: 'Docker',
    },
    {
      titulo: t('cert.vuejs'),
      foto: '/cursos/vuejs.png',
      link: '/certificates/vuejs.jpg',
      icons: ['devicon:vuejs'],
      nome: 'VueJS',
    },
    {
      titulo: t('cert.nuxtjs'),
      foto: '/cursos/nuxtjs.png',
      link: '/certificates/nuxtjs.jpg',
      icons: ['devicon:nuxtjs'],
      nome: 'NuxtJS',
    },
    {
      titulo: t('cert.node'),
      foto: '/cursos/node.png',
      link: '/certificates/node.jpg',
      icons: ['devicon:nodejs'],
      nome: 'NodeJS',
    },
    {
      titulo: t('cert.oauth'),
      foto: '/cursos/oauth.png',
      link: '/certificates/oauth.png',
      icons: ['devicon:oauth'],
      nome: 'OAuth',
    },
    {
      titulo: t('cert.git_github'),
      foto: '/cursos/git_github.png',
      link: '/certificates/git_github.pdf',
      icons: ['devicon:git', 'devicon:github'],
      nome: 'Git e Github',
    },
    {
      titulo: t('cert.html_css1'),
      foto: '/cursos/html_css01.png',
      link: '/certificates/html_css01.pdf',
      icons: ['devicon:html5', 'devicon:css3'],
      nome: 'HTML5 e CSS3 modulo 1',
    },
    {
      titulo: t('cert.html_css2'),
      foto: '/cursos/html_css02.png',
      link: '/certificates/html_css02.pdf',
      icons: ['devicon:html5', 'devicon:css3'],
      nome: 'HTML5 e CSS3 modulo 2',
    },
    {
      titulo: t('cert.html_css3'),
      foto: '/cursos/html_css03.png',
      link: '/certificates/html_css03.pdf',
      icons: ['devicon:html5', 'devicon:css3'],
      nome: 'HTML5 e CSS3 modulo 3',
    },
    {
      titulo: t('cert.html_css4'),
      foto: '/cursos/html_css04.png',
      link: '/certificates/html_css04.pdf',
      icons: ['devicon:html5', 'devicon:css3'],
      nome: 'HTML5 e CSS3 modulo 4',
    },
    {
      titulo: t('cert.html_css5'),
      foto: '/cursos/html_css05.png',
      link: '/certificates/html_css04.pdf',
      icons: ['devicon:html5', 'devicon:css3'],
      nome: 'HTML5 e CSS3 modulo 5',
    },
    {
      titulo: t('cert.linux00'),
      foto: '/cursos/linux00.png',
      link: '/certificates/linux00.pdf',
      icons: ['devicon:linux'],
      nome: 'Linux modulo 0',
    },
    {
      titulo: t('cert.linux01'),
      foto: '/cursos/linux01.png',
      link: '/certificates/linux01.pdf',
      icons: ['devicon:linux'],
      nome: 'Linux modulo 1',
    },
    {
      titulo: t('cert.linux02'),
      foto: '/cursos/linux02.png',
      link: '/certificates/linux02.pdf',
      icons: ['devicon:linux'],
      nome: 'Linux modulo 2',
    },
    {
      titulo: t('cert.linux03'),
      foto: '/cursos/linux03.png',
      link: '/certificates/linux03.pdf',
      icons: ['devicon:linux'],
      nome: 'Linux modulo 3',
    },
    {
      titulo: t('cert.linux04'),
      foto: '/cursos/linux05.png',
      link: '/certificates/linux04.pdf',
      icons: ['devicon:linux'],
      nome: 'Linux modulo 4',
    },
    {
      titulo: t('cert.linux05'),
      foto: '/cursos/linux05.png',
      link: '/certificates/linux05.pdf',
      icons: ['devicon:linux'],
      nome: 'Linux modulo 5',
    },
    {
      titulo: t('cert.dns'),
      foto: '/cursos/dns.png',
      link: '/certificates/dns.pdf',
      icons: ['lucide:server'],
      nome: 'DNS',
    },
  ])

  const searchQuery = ref('')

  function normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replaceAll(/[\u0300-\u036F]/gu, '')
  }

  const filteredCertificates = computed(() => {
    const query = normalizeText(searchQuery.value)
    return certificates.value.filter((cert) =>
      normalizeText(`${cert.titulo} ${cert.nome}`).includes(query),
    )
  })
</script>

<template>
  <div class="relative overflow-hidden font-mono text-zinc-100">
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] opacity-50" />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(250,204,21,0.18),transparent_24%),radial-gradient(circle_at_85%_10%,rgba(236,72,153,0.16),transparent_26%)]" />

    <UContainer class="relative z-10 mt-8 space-y-10 pb-10 sm:mt-12">
      <header class="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end" data-aos="fade-up">
        <div class="border-4 border-yellow-300 bg-black shadow-[10px_10px_0_#22d3ee]">
          <div
            class="flex items-center justify-between border-b-4 border-yellow-300 bg-yellow-300 px-4 py-3 text-black">
            <p class="text-xs font-black tracking-[0.24em] uppercase">certificate.library</p>
            <div class="flex gap-1.5">
              <span class="size-3 border-2 border-black bg-cyan-300" />
              <span class="size-3 border-2 border-black bg-pink-400" />
              <span class="size-3 border-2 border-black bg-lime-300" />
            </div>
          </div>

          <div class="p-4 sm:p-6">
            <p
              class="mb-4 inline-flex border-2 border-pink-300 bg-pink-400 px-2 py-1 text-xs font-black tracking-[0.18em] text-black uppercase shadow-[4px_4px_0_#000]">
              {{ t('cert.head') }}
            </p>
            <h1 class="max-w-4xl text-4xl leading-none font-black text-white uppercase sm:text-6xl">
              {{ t('cert.title') }}
            </h1>
            <p
              class="mt-5 max-w-3xl border-l-4 border-cyan-300 pl-4 text-sm leading-7 text-cyan-100 sm:text-base">
              {{ t('cert.description') }}
            </p>
          </div>
        </div>

        <aside class="border-4 border-pink-300 bg-pink-400 p-4 text-black shadow-[8px_8px_0_#000]">
          <div class="mb-4 flex items-center justify-between border-b-4 border-black pb-3">
            <p class="text-xs font-black tracking-[0.2em] uppercase">
              {{ t('cert.floppy_search') }}
            </p>
            <UIcon name="i-lucide-search" class="size-5" />
          </div>

          <label for="search" class="sr-only">
            {{ t('cert.busca') }}
          </label>
          <UInput
            id="search"
            v-model="searchQuery"
            :placeholder="t('cert.busca')"
            icon="i-lucide-search"
            size="xl"
            :ui="{
              base: 'rounded-none border-4 border-black bg-white font-mono font-black text-black placeholder:text-zinc-500 focus-visible:ring-4 focus-visible:ring-cyan-300',
              leadingIcon: 'text-black',
            }"
            class="w-full" />

          <div class="mt-4 grid grid-cols-2 gap-2 text-xs font-black uppercase">
            <div class="border-2 border-black bg-black px-3 py-2 text-lime-300">
              {{ filteredCertificates.length }} / {{ certificates.length }}
            </div>
            <div class="border-2 border-black bg-yellow-300 px-3 py-2 text-black">
              {{ t('cert.realtime') }}
            </div>
          </div>
        </aside>
      </header>

      <section data-aos="fade-up" data-aos-delay="80">
        <div v-if="filteredCertificates.length" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="(cert, index) in filteredCertificates" :key="cert.foto" data-aos="zoom-in">
            <article
              class="group relative flex min-h-97.5 flex-col border-4 border-zinc-100 bg-black shadow-[8px_8px_0_#000] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[10px_10px_0_#ec4899]">
              <div
                class="flex items-center justify-between border-b-4 border-zinc-100 bg-zinc-100 px-3 py-2 text-black">
                <p class="text-xs font-black uppercase">
                  cert_{{ String(index + 1).padStart(2, '0') }}.png
                </p>
                <div class="flex gap-1">
                  <span class="size-3 border-2 border-black bg-yellow-300" />
                  <span class="size-3 border-2 border-black bg-cyan-300" />
                </div>
              </div>

              <div class="relative border-b-4 border-zinc-100 bg-zinc-900 p-3">
                <NuxtImg
                  :src="cert.foto"
                  :alt="cert.titulo"
                  class="h-44 w-full border-2 border-black object-cover contrast-110 saturate-125 transition duration-500 group-hover:scale-[1.02]" />
                <div
                  class="pointer-events-none absolute inset-3 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.22)_50%)] bg-size-[100%_4px]" />
              </div>

              <div class="flex flex-1 flex-col p-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-xs font-black tracking-[0.18em] text-yellow-300 uppercase">
                      {{ cert.nome }}
                    </p>
                    <h3 class="mt-2 text-sm leading-6 font-black text-white uppercase">
                      {{ cert.titulo }}
                    </h3>
                  </div>

                  <div class="grid shrink-0 gap-1">
                    <span
                      v-for="icon in cert.icons"
                      :key="icon"
                      class="flex size-9 items-center justify-center border-2 border-cyan-300 bg-cyan-300 text-black">
                      <Icon :name="icon" class="text-[22px]" />
                    </span>
                  </div>
                </div>

                <div class="mt-auto pt-5">
                  <NuxtLink
                    v-if="cert.link"
                    :to="cert.link"
                    external
                    target="_blank"
                    class="flex min-h-11 items-center justify-between border-4 border-lime-300 bg-lime-300 px-3 py-2 text-xs font-black text-black uppercase shadow-[5px_5px_0_#000] transition hover:-translate-y-0.5">
                    <span>{{ t('cert.ver_cert') }}</span>
                    <Icon name="lucide:external-link" class="text-[16px]" />
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div
          v-else
          class="mt-16 border-4 border-yellow-300 bg-black p-8 text-center shadow-[8px_8px_0_#ec4899]"
          data-aos="fade-up">
          <Icon name="lucide:search-x" class="mx-auto text-yellow-300" size="36" />
          <p class="mt-4 text-sm font-black text-zinc-100 uppercase">
            {{ t('cert.no_results_prefix') }}
            <span class="text-pink-300">{{ `"${searchQuery}"` }}</span
            >.
          </p>
          <p class="mt-2 text-xs font-bold text-cyan-100">
            {{ t('cert.no_results_tip') }}
          </p>
        </div>
      </section>
    </UContainer>
  </div>
</template>
