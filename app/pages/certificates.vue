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

function normalizeText(text: string){
  return text.toLowerCase().normalize('NFD').replaceAll(/[\u0300-\u036F]/g, '')
}

const filteredCertificates = computed(() => {
  const query = normalizeText(searchQuery.value)
  return certificates.value.filter(cert => normalizeText(cert.titulo).includes(query))
})
</script>

<template>
  <section class="min-h-[calc(100vh-183px)]">
    <div class="flex flex-col items-center justify-center p-10">
      <h2 class="mb-8 text-center font-['Dancing_Script'] text-5xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
        {{ t("cert.head") }}
      </h2>
      <label for="search" class="sr-only">{{ t('cert.busca') }}</label>
      <input id="search" v-model="searchQuery" type="text" :placeholder="t('cert.busca')" class="mb-6 w-full max-w-md rounded-lg border border-gray-300 bg-gray-800 p-3 text-white shadow-md transition-all outline-none focus:border-yellow-400 focus:ring focus:ring-yellow-400/50">

      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="cert in filteredCertificates" :key="cert.foto" data-aos="zoom-in" class="group relative flex max-w-[280px] flex-col items-center justify-center overflow-hidden rounded-xl bg-linear-to-b from-slate-900 to-slate-800 p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <div class="relative w-full overflow-hidden rounded-lg">
            <img :src="cert.foto" :alt="cert.titulo" class="h-[200px] w-full rounded-lg object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_5px_20px_rgba(255,255,255,0.2)] md:grayscale md:group-hover:grayscale-0">
          </div>
          <h3 class="mt-5 text-lg font-semibold text-white transition-all duration-300 group-hover:text-yellow-400">
            <div class="flex items-center justify-center space-x-3">
              <div class="flex flex-col items-center space-y-2">
                <span v-for="icon in cert.icons" :key="icon">
                  <Icon :name="icon" class="text-2xl transition-all duration-300 group-hover:scale-125" />
                </span>
              </div>
              <span>{{ cert.titulo }}</span>
            </div>
          </h3>
          <NuxtLink v-if="cert.link" :to="cert.link" external target="_blank" class="mt-5 rounded-lg border border-white px-5 py-2 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            {{ t("cert.ver_cert") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
