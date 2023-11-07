<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	},
})
</script>

<template>
	<div
		class="dark:bg-slate-900 bg-white bg-transparent flex sticky justify-between items-center transition-all duration-500 ease-in-out z-50"
	>
		<img src="/logo.png" alt="Logo do site" class="w-30 h-12 m-2 ml-3">
		<nav class="flex justify-center flex-grow">
			<ul class="flex gap-8">
				<li
					class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer"
				>
					<NuxtLink to="/">
						Início
					</NuxtLink>
				</li>
				<li
					class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer"
				>
					<NuxtLink to="/sobreMim">
						Sobre mim
					</NuxtLink>
				</li>
				<li
					class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer"
				>
					Experiência
				</li>
				<li
					class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer"
				>
					Certificados
				</li>
				<li
					class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer"
				>
					Projetos
				</li>
				<li
					class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer"
				>
					Fotos
				</li>
				<li
					class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer"
				>
					Social
				</li>
			</ul>
		</nav>
		<div
			class="transition-all duration-500 ease-in-out rounded-md hover:bg-slate-300 dark:hover:bg-slate-500 mr-4"
		>
			<ClientOnly>
				<UButton
					:icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
					color="black"
					variant="ghost"
					aria-label="Mudar tema"
					@click="isDark = !isDark"
				/>
				<template #fallback>
					<USkeleton
						class="w-8 h-8 mr-3"
						:ui="{ rounded: 'rounded-full', background: 'bg-gray-300 dark:bg-gray-600' }"
					/>
				</template>
			</ClientOnly>
		</div>
	</div>
</template>

<style scoped>
.link-underline {
	border-bottom-width: 0;
	background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
	background-size: 0 3px;
	background-position: 0 100%;
	background-repeat: no-repeat;
	transition: background-size 0.5s ease-in-out;
}

.link-underline-black {
	background-image: linear-gradient(transparent, transparent), linear-gradient(#f2c, #f2c);
}

.link-underline:hover {
	background-size: 100% 3px;
	background-position: 0 100%;
}
</style>
