<script setup lang="ts">
const { title, location, year, subtitle } = defineProps({
	title: String,
	location: String,
	year: String,
	subtitle: String,
})
</script>

<template>
	<h3 v-if="title" class="text-2xl font-bold mb-3 text-white">
		{{ title }}
	</h3>
	<div class="pl-3 pt-5 border-l-4 border-gray-700 relative">
		<h4 class="text-xl font-semibold text-gray-300 mb-2 tracking-wider">
			{{ location }}
		</h4>
		<h5
			class="inline-block bg-blue-500 text-white font-semibold py-1 px-4 mb-2 rounded-lg"
		>
			{{ year }}
		</h5>
		<p class="text-white text-lg">
			{{ subtitle }}
		</p>
		<div
			class="absolute left-0 top-[2.19rem] bg-blue-500 border-4 border-gray-700 rounded-full w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
		/>
	</div>
</template>
