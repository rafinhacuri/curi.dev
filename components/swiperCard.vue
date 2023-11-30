<script setup lang="ts">
const { items } = defineProps({
	items: {
		type: Array as () => {
			img: string
		}[],
		required: true,
	},
})

const slides = ref(items.map((item) => {
	return { img: item.img }
}))
</script>

<template>
	<Swiper
		class="w-60 h-60"
		:modules="[SwiperAutoplay, SwiperEffectCards]"
		:loop="true"
		effect="cards"
		:autoplay="{
			delay: 4000,
			disableOnInteraction: true,
		}"
	>
		<SwiperSlide
			v-for="slide in slides"
			:key="slide.img"
			class="rounded-xl "
		>
			<img :src="slide.img" class="h-full w-full" alt="foto pessoal">
		</SwiperSlide>
	</swiper>
</template>
