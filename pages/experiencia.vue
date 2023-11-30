<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<div class="h-screen dark:bg-gray-800 bg-white flex items-center justify-center">
		<div class="space-y-20 p-3">
			<div class="bg-gray-900 p-10 rounded-xl cursor-wait transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
				<Progress
					:title="t('experiencia.titulo1')"
					:location="t('experiencia.local1')"
					:year="t('experiencia.tempo')"
					:subtitle="t('experiencia.descricao1')"
				/>
			</div>
			<div class="bg-gray-900 p-10 rounded-xl cursor-wait transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
				<Progress
					:title="t('experiencia.titulo2')"
					:location="t('experiencia.local2')"
					:year="t('experiencia.tempo')"
					:subtitle="t('experiencia.descricao1')"
				/>
			</div>
		</div>
	</div>
</template>
