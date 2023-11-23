<script setup lang="ts">
const { t } = useI18n()

const projetos = computed(() => [
	{ titulo: t('projetos.titulo1'), img: '/image/mesonpi.png', descricao: t('projetos.subtitulo1'), url: 'https://mesonpi.cbpf.br/' },
])
</script>

<template>
	<div class="bg-white dark:bg-slate-800 h-screen">
		<projetoCard :items="projetos" />
	</div>
</template>
