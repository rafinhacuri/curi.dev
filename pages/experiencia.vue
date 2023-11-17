<script setup lang="ts">
const estudo = ref(true)
const trabalho = ref(true)
const isMobile = useMediaQuery('(max-width: 780px)')
if (process.client) {
	window.addEventListener('scroll', () => {
		const btnScrollTop = document.getElementById('scrollTop')
		if (btnScrollTop) {
			if (window.pageYOffset === 0)
				btnScrollTop.style.opacity = '0'
			else btnScrollTop.style.opacity = '100%'
		}
	})
}

function ScrollTopDiv() {
	scrollTo({ top: 0 - 65, behavior: 'smooth' })
}
</script>

<template>
	<div class=" h-screen dark:bg-slate-800 flex items-center justify-center">
		<Card>
			<div class="space-y-20 p-3">
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
		<img src="/image/estudo.gif" alt="gif de estudo" class="absolute w-64 right-1 bottom-1 transform -scale-x-100" :class="{ hidden: estudo }">
		<img src="/image/trabalho.gif" alt="gif de trabalho" class="absolute w-64 left-1 top-20 transform -scale-x-100" :class="{ hidden: trabalho }">
		<UButton
			id="scrollTop"
			color="blue"
			class="fixed z-50 transition-opacity ease-in-out rounded-full opacity-0 animate-bounce bottom-5 right-5"
			variant="solid"
			icon="i-heroicons-arrow-small-up-solid"
			@click="ScrollTopDiv"
		/>
	</div>
</template>
