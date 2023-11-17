<script setup lang="ts">
const projetos = [
	{ titulo: 'Mesonpi CBPF', img: '/image/mesonpi.png', descricao: 'Site do centro brazileiro de pesquisas fisicas', url: 'https://mesonpi.cbpf.br/' },
]
</script>

<template>
	<section class="bg-white dark:bg-slate-800 h-screen">
		<projetoCard :items="projetos" />
	</section>
</template>
