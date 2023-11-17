<script setup lang="ts">
const { items } = defineProps({
	items: {
		type: Array as () => {
			img: string
			titulo: string
			descricao: string
			url: string
		}[],
		required: true,
	},
})
const titulo = ref(true)
const isMobile = useMediaQuery('(max-width: 780px)')
</script>

<template>
	<div class="grid place-items-center">
		<span>
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
				<div v-for="(item, index) in items" :key="index">

					<NuxtLink :to="item.url" external target="_blank">
						<img :src="item.img" :alt="item.descricao" class="hover:brightness-50 w-full h-auto ml-0 sm:ml-9 mt-5 rounded-2xl shadow-2xl" @mouseover="!isMobile ? titulo = false : ''" @mouseleave="titulo = true">
						<p v-if="!isMobile" class="p-1 text-xl font-bold text-center   " :class="{ hidden: titulo }">{{ item.titulo }} </p>
						<p v-else class="p-1 text-xl font-bold text-center"> {{ item.titulo }} </p>
					</NuxtLink>
				</div>

			</div>
		</span>
	</div>
</template>
