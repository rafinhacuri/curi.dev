<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('cert.head') })
useSeoMeta({ description: t('home.subtitle') })
defineOgImageComponent('Home', { title: t('cert.head'), subtitle: t('home.title') })

const certificates = ref([
  { titulo: 'JavaScript', foto: '/cursos/js.png', link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8edb710a-0a99-4ec3-8f90-2fbd32442e3f.jpg?v=1712845766000', icon: 'devicon:javascript' },
  { titulo: 'NodeJS', foto: '/cursos/node.png', link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2c9e050a-f4ee-40d9-b44f-0d8ed31184ee.jpg?v=1725544221000', icon: 'devicon:nodejs' },
  { titulo: 'Linux:00', foto: '/cursos/linux00.png', link: 'https://www.estudonauta.com/certificates/certificado-20h/?quiz=49338&cert-nonce=aaa73294e4', icon: 'devicon:linux' },
  { titulo: 'Linux:01', foto: '/cursos/linux01.png', link: 'https://www.estudonauta.com/certificates/certificado-20h/?quiz=49591&cert-nonce=b2c175a169', icon: 'devicon:linux' },
])
</script>

<template>
  <div class="flex flex-col items-center justify-center p-10">
    <!-- Título aprimorado -->
    <h1 class="mb-8 text-center font-['Dancing_Script'] text-5xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
      {{ t('cert.head') }}
    </h1>

    <!-- Grid de Certificados -->
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="{ titulo, foto, link, icon } of certificates"
        :key="titulo"
        class="group relative flex max-w-[280px] flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        <!-- Imagem com efeito 3D e brilho -->
        <div class="relative w-full overflow-hidden rounded-lg">
          <img
            :src="foto"
            :alt="titulo"
            class="h-[200px] w-full rounded-lg object-cover grayscale transition-all duration-500 ease-out group-hover:rotate-2 group-hover:scale-110 group-hover:shadow-[0_5px_20px_rgba(255,255,255,0.2)] group-hover:grayscale-0"
          >
        </div>

        <!-- Título com ícone -->
        <h3 class="mt-5 text-lg font-semibold text-white transition-all duration-300 group-hover:text-yellow-400">
          <div class="flex items-center justify-center space-x-3">
            <Icon :name="icon" class="text-2xl transition-all duration-300 group-hover:scale-125" />
            <span>{{ titulo }}</span>
          </div>
        </h3>

        <!-- Botão "Ver Certificado" estilizado -->
        <button
          v-if="link"
          class="mt-5 rounded-lg border border-white px-5 py-2 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          @click="navigateTo(link, { external: true, open: { target: '_blank' } })"
        >
          {{ t('cert.ver_cert') }}
        </button>
      </div>
    </div>
  </div>
</template>
