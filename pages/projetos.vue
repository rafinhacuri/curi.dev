<script setup lang="ts">
const { t } = useI18n()

const projetos = computed(() => [
	{ titulo: t('projetos.titulo1'), img: '/image/mesonpi.png', descricao: t('projetos.subtitulo1'), url: 'https://mesonpi.cbpf.br/' },
	{ titulo: t('projetos.titulo2'), img: '/image/riodm.png', descricao: t('projetos.subtitulo1'), url: 'https://cbpf.br/riodmmeeting/' },
])
</script>

<template>
	<div class="bg-white dark:bg-slate-800 h-screen">
		<ProjetoCard :items="projetos" />
	</div>
</template>
