<script setup>
const { t } = useI18n()

const techStack = ref([
	{
		img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		name: 'JavaScript',
	},
	{
		img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		name: 'TypeScript',
	},
	{
		img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
		name: 'Nuxt',
	},
	{
		img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
		name: 'HTML',
	},
	{
		img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		name: 'CSS',
	},
	{
		img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
		name: 'TailwindCss',
	},
	{
		img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
		name: 'Vue',
	},
	{
		img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
		name: 'Eslint',
	},
])

const cur = ref([
	{
		name: t('sobre.subtitulo1'),
	},
	{
		name: t('sobre.subtitulo2'),
	},
	{
		name: t('sobre.subtitulo3'),
	},
	{
		name: t('sobre.subtitulo4'),
	},
	{
		name: t('sobre.subtitulo5'),
	},
	{
		name: t('sobre.subtitulo6'),
	},
])
const descricao = ref([
	{
		name: t('sobre.descricao'),
	},
])
</script>

<template>
	<div class="h-full flex flex-col bg-slate-900">
		<div class="flex-grow overflow-auto">
			<div class="card p-4 space-y-8">
				<Panel toggleable class="dark:bg-slate-800">
					<template #header>
						<div class="flex align-items-center gap-2">
							<span class="font-bold text-2xl">{{ t('sobre.titulo4') }}</span>
						</div>
					</template>

					<ol class="space-y-7">
						<li v-for="(item, index) in techStack" :key="index" class="flex items-center space-x-2">
							<img class="w-8 h-8" :src="item.img" :alt="item.name">
							<p class="text-xl font-bold">
								{{ item.name }}
							</p>
						</li>
					</ol>
				</Panel>
				<Sobre :items="cur" :title="t('sobre.titulo5')" />
				<Sobre :items="descricao" :title="t('sobre.titulo1')" />
			</div>
		</div>
	</div>
</template>
