<script setup lang="ts">
const midias = ref([
	{ href: 'mailto:rafael@curi.dev.br', icon: 'line-md:email-opened', text: 'E-mail' },
	{ href: 'https://github.com/rafinhacuri', icon: 'line-md:github-loop', text: 'Github' },
	{
		href: 'https://www.linkedin.com/in/rafael-curi-a4a837292/',
		icon: 'line-md:linkedin',
		text: 'LinkedIn',
	},
	{
		href: 'https://www.instagram.com/rafinha_curi/',
		icon: 'line-md:instagram',
		text: 'Instagram',
	},
])
</script>

<template>
	<div class="h-screen dark:bg-slate-800 bg-white flex justify-center items-center">
		<div class="bg-gray-400 dark:bg-slate-900 w-[300px] font-semibold space-y-4 rounded-xl m-5 lg:mx-60 p-4">
			<CardCtt v-for="midia in midias" :key="midia.href" :href="midia.href" :icon="midia.icon" :text="midia.text" />
		</div>
	</div>
</template>
