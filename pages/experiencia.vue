<script setup lang="ts">
const estudo = ref(true)
const trabalho = ref(true)
const isMobile = useMediaQuery('(max-width: 780px)')
</script>

<template>
	<Section class=" h-[calc(100vh-64px)] dark:bg-slate-800 flex items-center justify-center">
		<Card>
			<div class="space-y-20 m-3">
				<div class=" dark:bg-slate-700 bg-slate-300 p-10 rounded-xl cursor-wait " @mouseover="!isMobile ? estudo = false : ''" @mouseleave="estudo = true">
					<Progress
						title="Academico"
						location="Universidade Veiga de Almeida"
						year="2023"
						subtitle="Ciência da Computação"
					/>
				</div>
				<div class=" dark:bg-slate-700 bg-slate-300 p-10 rounded-xl cursor-wait " @mouseover="!isMobile ? trabalho = false : ''" @mouseleave="trabalho = true">
					<Progress
						title="Profissional"
						location="Centro Brazileiro de Pesquisas Fisicas"
						year="2023"
						subtitle="Desenvolvedor Web"
					/>
				</div>
			</div>
		</Card>
		<img src="/estudo.gif" alt="gif de estudo" class="absolute w-64 right-1 bottom-1 transform -scale-x-100" :class="{ hidden: estudo }">
		<img src="/trabalho.gif" alt="gif de trabalho" class="absolute w-64 left-1 top-20 transform -scale-x-100" :class="{ hidden: trabalho }">
	</Section>
</template>
