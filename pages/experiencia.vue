<script setup lang="ts">
const { t } = useI18n()
const estudo = ref(true)
const trabalho = ref(true)
const isMobile = useMediaQuery('(max-width: 780px)')
</script>

<template>
	<div class="h-screen dark:bg-gray-800 bg-white flex items-center justify-center">
		<div class="space-y-20 p-3">
			<div class="bg-gray-900 p-10 rounded-xl cursor-wait transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @mouseover="!isMobile ? estudo = false : ''" @mouseleave="estudo = true">
				<Progress
					:title="t('experiencia.titulo1')"
					:location="t('experiencia.local1')"
					year="2023"
					:subtitle="t('experiencia.descricao1')"
				/>
			</div>
			<div class="bg-gray-900 p-10 rounded-xl cursor-wait transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @mouseover="!isMobile ? trabalho = false : ''" @mouseleave="trabalho = true">
				<Progress
					:title="t('experiencia.titulo2')"
					:location="t('experiencia.local2')"
					year="2023"
					:subtitle="t('experiencia.descricao1')"
				/>
			</div>
		</div>
		<img src="/image/estudo.gif" alt="gif de estudo" class="absolute w-64 right-1 bottom-1 transform -scale-x-100" :class="{ hidden: estudo }">
		<img src="/image/trabalho.gif" alt="gif de trabalho" class="absolute w-64 left-1 top-20 transform -scale-x-100" :class="{ hidden: trabalho }">
	</div>
</template>
