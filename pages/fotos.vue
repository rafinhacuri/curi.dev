<script setup lang="ts">
const { t } = useI18n()

const imagensPessoal = ref([
	{ img: '/fotosPessoal/1.jpg' },
	{ img: '/fotosPessoal/2.jpg' },
	{ img: '/fotosPessoal/3.jpg' },
	{ img: '/fotosPessoal/4.jpg' },
	{ img: '/fotosPessoal/5.jpg' },
	{ img: '/fotosPessoal/6.jpg' },
	{ img: '/fotosPessoal/7.jpg' },
])
const title1 = computed(() => t('foto.titulo1'))
const title2 = computed(() => t('foto.titulo2'))
const title3 = computed(() => t('foto.titulo3'))
const title4 = computed(() => t('foto.titulo4'))

const categories = ref([
	{ title: title1, icon: 'line-md:image-twotone', items: imagensPessoal },
	{ title: title2, icon: 'line-md:heart-filled', items: imagensPessoal },
	{ title: title3, icon: 'line-md:person', items: imagensPessoal },
	{ title: title4, icon: 'line-md:map-marker', items: imagensPessoal },
])
</script>

<template>
	<section>
		<div class="dark:bg-slate-900 bg-white lg:h-screen sm:h-full p-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div v-for="(category, index) in categories" :key="index" class="rounded-lg overflow-hidden shadow-lg p-3 dark:bg-slate-800 bg-slate-300">
					<h2 class="text-xl font-bold text-black dark:text-white mb-4 italic">
						{{ category.title }} <Icon class="text-2xl" :name="category.icon" />
					</h2>
					<SwiperCard :items="category.items" />
				</div>
			</div>
		</div>
	</section>
</template>
