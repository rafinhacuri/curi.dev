<script setup lang="ts">
const imagensPessoal = ref([
	{ img: '/fotosPessoal/1.jpg' },
	{ img: '/fotosPessoal/2.jpg' },
	{ img: '/fotosPessoal/3.jpg' },
	{ img: '/fotosPessoal/4.jpg' },
	{ img: '/fotosPessoal/5.jpg' },
	{ img: '/fotosPessoal/6.jpg' },
	{ img: '/fotosPessoal/7.jpg' },
])

const categories = ref([
	{ title: 'Foto gerais', icon: 'line-md:image-twotone', items: imagensPessoal },
	{ title: 'Amores', icon: 'line-md:heart-filled', items: imagensPessoal },
	{ title: 'Família', icon: 'line-md:person', items: imagensPessoal },
	{ title: 'Viagens', icon: 'line-md:map-marker', items: imagensPessoal },
])
</script>

<template>
	<section>
		<div class="bg-slate-900 lg:h-screen sm:h-full p-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div v-for="(category, index) in categories" :key="index" class="rounded-lg overflow-hidden shadow-lg p-3 bg-slate-800">
					<h2 class="text-xl font-bold text-white mb-4 italic">
						{{ category.title }} <Icon class="text-2xl" :name="category.icon" />
					</h2>
					<SwiperCard :items="category.items" />
				</div>
			</div>
		</div>
	</section>
</template>
