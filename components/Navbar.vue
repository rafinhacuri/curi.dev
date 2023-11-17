<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set(value) {
		colorMode.preference = value ? 'dark' : 'light'
	},
})

const showMenu = ref(false)
const menuItems = [
	{ name: 'Início', route: '/' },
	{ name: 'Sobre mim', route: '/sobreMim' },
	{ name: 'Experiência', route: '/experiencia' },
	{ name: 'Certificados', route: '/certificados' },
	{ name: 'Projetos', route: '/projetos' },
	{ name: 'Fotos', route: '/fotos' },
	{ name: 'Social', route: '/social' },
]
</script>

<template>
	<div class="dark:bg-slate-900 bg-white bg-transparent flex sticky justify-between items-center transition-all duration-500 ease-in-out z-50">
		<img :src="!isDark ? '/image/logo.png' : '/image/logo-branca.png'" alt="Logo do site" class="w-30 h-12 m-2 ml-3">
		<nav class="flex justify-center flex-grow">
			<ul class="hidden md:flex gap-8">
				<li v-for="item in menuItems" :key="item.name" class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer">
					<NuxtLink :to="item.route">
						{{ item.name }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<div class="transition-all duration-500 ease-in-out rounded-md hover:bg-slate-300 dark:hover:bg-slate-500 mr-4 md:block flex items-center justify-center">
			<ClientOnly>
				<span class="bg group navbar-link text-2xl  cursor-pointer" @click="isDark = !isDark">
					<Icon v-if="!isDark" name="line-md:moon-to-sunny-outline-transition" class="m-2 hover:none" />
					<Icon v-else name="line-md:sunny-outline-to-moon-transition" class="m-2 hover:none" />
				</span>
				<template #fallback>
					<USkeleton
						class="w-8 h-8 mr-3"
						:ui="{ rounded: 'rounded-full', background: 'bg-gray-300 dark:bg-gray-600' }"
					/>
				</template>
			</ClientOnly>
		</div>

		<div class="md:hidden flex items-center text-black dark:text-white ">
			<UButton
				icon="i-heroicons-bars-3-20-solid"
				size="xl"
				color="white"
				variant="ghost"
				trailing-icon="false"
				@click="showMenu = true"
			/>
			<UModal v-model="showMenu" prevent-close>
				<UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
					<template #header>
						<div class="flex items-center justify-between">
							<h3 class=" text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
								Menu
							</h3>
							<UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showMenu = false" />
						</div>
					</template>
					<nav>
						<ul class="space-y-6">
							<li v-for="item in menuItems" :key="item.name" class="dark:text-white text-black font-mono text-2xl underline">
								<NuxtLink :to="item.route" @click="showMenu = false">
									{{ item.name }}
								</NuxtLink>
							</li>
						</ul>
					</nav>
				</UCard>
			</UModal>
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
