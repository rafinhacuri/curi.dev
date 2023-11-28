<script setup lang="ts">
const { t, locale } = useI18n()
const language = useCookie('language')
const computedLanguage = computed({
	get() {
		return locale.value
	},
	set(val) {
		locale.value = val
		language.value = val
	},
})

if (language.value === 'pt')
	computedLanguage.value = 'pt'
else computedLanguage.value = 'en'

function changeLanguage() {
	if (computedLanguage.value === 'en')
		return computedLanguage.value = 'pt'
	computedLanguage.value = 'en'
}

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
const menuItems = computed(() => [
	{ name: t('navbar.inicio'), route: '/' },
	{ name: t('navbar.sobre'), route: '/sobreMim' },
	{ name: t('navbar.experiencia'), route: '/experiencia' },
	{ name: t('navbar.certificado'), route: '/certificados' },
	{ name: t('navbar.projetos'), route: '/projetos' },
	{ name: t('navbar.fotos'), route: '/fotos' },
	{ name: t('navbar.social'), route: '/social' },
])
</script>

<template>
	<div class="dark:bg-slate-900 bg-white bg-transparent h-[65px] flex sticky justify-between items-center transition-all duration-500 ease-in-out z-50">
		<ClientOnly>
			<img :src="!isDark ? '/image/logo.png' : '/image/logo-branca.png'" alt="Logo do site" class="w-30 h-12 m-2 ml-3">
			<template #fallback>
				<USkeleton
					class="w-8 h-8 ml-3"
					:ui="{ rounded: 'rounded-full', background: 'bg-gray-300 dark:bg-gray-600' }"
				/>
			</template>
		</ClientOnly>
		<nav class="flex justify-center flex-grow">
			<ul class="hidden md:flex gap-8">
				<li v-for="item in menuItems" :key="item.name" class="link link-underline link-underline-black dark:text-white text-black font-mono cursor-pointer">
					<NuxtLink :to="item.route">
						{{ item.name }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<ClientOnly>
			<span class="hidden md:flex group navbar-link cursor-pointer text-lg transition-all duration-500 ease-in-out rounded-md " @click="changeLanguage">

				<Icon :name="computedLanguage === 'pt' ? 'flag:br-4x3' : 'flag:lr-4x3'" class="mr-2" />

			</span>
			<template #fallback>
				<USkeleton
					class="w-8 h-8 mr-3"
					:ui="{ rounded: 'rounded-full', background: 'bg-gray-300 dark:bg-gray-600' }"
				/>
			</template>
		</ClientOnly>
		<div class="transition-all duration-500 ease-in-out rounded-md hover:bg-slate-300 dark:hover:bg-slate-500 mr-4 md:block flex items-center justify-center">
			<ClientOnly>
				<span class="bg group navbar-link text-2xl  cursor-pointer" @click="isDark = !isDark">
					<Icon v-if="!isDark" name="line-md:moon-alt-to-sunny-outline-loop-transition" class="m-2 hover:none" />
					<Icon v-else name="line-md:sunny-outline-to-moon-loop-transition" class="m-2 hover:none" />
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
			<Icon name="line-md:menu" class="text-2xl mr-4 cursor-pointer" @click="showMenu = true" />
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
							<li>
								<span class="group navbar-link cursor-pointer text-lg transition-all duration-500 ease-in-out rounded-md mb-1" @click="changeLanguage">

									<Icon :name="computedLanguage === 'pt' ? 'flag:br-4x3' : 'flag:lr-4x3'" class="mr-2 text-xl" />

								</span>
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
