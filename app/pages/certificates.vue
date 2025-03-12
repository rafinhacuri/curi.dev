<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('cert.head') })
useSeoMeta({ description: t('home.subtitle') })

const certificates = computed(() => [
  { titulo: t('cert.js'), foto: '/cursos/js.png', link: '/certificates/js.jpg', icons: ['devicon:javascript'], nome: 'JavaScript' },
  { titulo: t('cert.ts'), foto: '/cursos/ts.png', link: '/certificates/ts.jpg', icons: ['devicon:typescript'], nome: 'TypeScript' },
  { titulo: t('cert.vuejs'), foto: '/cursos/vuejs.png', link: '/certificates/vuejs.jpg', icons: ['devicon:vuejs'], nome: 'vuejs' },
  { titulo: t('cert.nuxtjs'), foto: '/cursos/nuxtjs.png', link: '/certificates/nuxtjs.jpg', icons: ['devicon:nuxtjs'], nome: 'nuxtjs' },
  { titulo: t('cert.node'), foto: '/cursos/node.png', link: '/certificates/node.jpg', icons: ['devicon:nodejs'], nome: 'nodeJS' },
  { titulo: t('cert.git-github'), foto: '/cursos/git-github.png', link: '/certificates/git-github.pdf', icons: ['devicon:git', 'devicon:github'], nome: 'git e github' },
  { titulo: t('cert.html-css1'), foto: '/cursos/html-css01.png', link: '/certificates/html-css01.pdf', icons: ['devicon:html5', 'devicon:css3'], nome: 'html5 e css3 modulo 1' },
  { titulo: t('cert.html-css2'), foto: '/cursos/html-css02.png', link: '/certificates/html-css02.pdf', icons: ['devicon:html5', 'devicon:css3'], nomde: 'html5 e css3 modulo 2' },
  { titulo: t('cert.html-css3'), foto: '/cursos/html-css03.png', link: '/certificates/html-css03.pdf', icons: ['devicon:html5', 'devicon:css3'], nome: 'html5 e css3 modulo 3' },
  { titulo: t('cert.html-css3'), foto: '/cursos/html-css04.png', link: '/certificates/html-css04.pdf', icons: ['devicon:html5', 'devicon:css3'], nome: 'html5 e css3 modulo 4' },
  { titulo: t('cert.html-css5'), foto: '/cursos/html-css05.png', link: '/certificates/html-css04.pdf', icons: ['devicon:html5', 'devicon:css3'], nome: 'html5 d css3 modulo 5' },
  { titulo: t('cert.linux00'), foto: '/cursos/linux00.png', link: '/certificates/linux00.pdf', icons: ['devicon:linux'], nome: 'linux modulo 0' },
  { titulo: t('cert.linux01'), foto: '/cursos/linux01.png', link: '/certificates/linux01.pdf', icons: ['devicon:linux'], nome: 'linux modulo 1' },
  { titulo: t('cert.linux02'), foto: '/cursos/linux02.png', link: '/certificates/linux02.pdf', icons: ['devicon:linux'], nome: 'linux modulo 2' },
  { titulo: t('cert.linux03'), foto: '/cursos/linux03.png', link: '/certificates/linux03.pdf', icons: ['devicon:linux'], nome: 'linux modulo 3' },
  { titulo: t('cert.linux04'), foto: '/cursos/linux05.png', link: '/certificates/linux04.pdf', icons: ['devicon:linux'], nome: 'linux modulo 4' },
  { titulo: t('cert.linux05'), foto: '/cursos/linux05.png', link: '/certificates/linux05.pdf', icons: ['devicon:linux'], nome: 'linux modulo 5' },
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
      <input id="search" v-model="searchQuery" type="text" :placeholder="t('cert.busca')" class="mb-6 w-full max-w-md rounded-lg border border-gray-300 bg-gray-800 p-3 text-white shadow-md outline-none transition-all focus:border-yellow-400 focus:ring focus:ring-yellow-400/50">

      <transition-group tag="div" class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3" enter-active-class="transition-all duration-400 ease-in-out" enter-from-class="opacity-0 translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-400 ease-in-out" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2">
        <div v-for="cert in filteredCertificates" :key="cert.foto" class="group relative flex max-w-[280px] flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <div class="relative w-full overflow-hidden rounded-lg">
            <img :src="cert.foto" :alt="cert.titulo" class="h-[200px] w-full rounded-lg object-cover transition-all duration-500 ease-out group-hover:rotate-2 group-hover:scale-110 group-hover:shadow-[0_5px_20px_rgba(255,255,255,0.2)] md:grayscale md:group-hover:grayscale-0">
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
          <button v-if="cert.link" class="mt-5 rounded-lg border border-white px-5 py-2 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" @click="navigateTo(cert.link, { external: true, open: { target: '_blank' } })">
            {{ t("cert.ver_cert") }}
          </button>
        </div>
      </transition-group>
    </div>
  </section>
</template>
