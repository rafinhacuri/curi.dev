<script setup lang="ts">
const { href, icon } = defineProps({
	href: { type: String, required: true },
	icon: { type: String, required: true },
	text: { type: String, required: true },
})
const iconSize = ref('45')
</script>

<template>
	<NuxtLink
		:href="href"
		target="_blank"
		class="flex justify-start items-center text-gray-900 hover:text-white dark:text-white pb-4 pt-2 px-4
         hover:bg-gradient-to-r hover:from-slate-800 hover:to-gray-600
         dark:hover:from-slate-600 dark:hover:to-gray-400
        rounded-2xl transition-all hover:pb-5 hover:pt-3"
		@mouseenter="iconSize = '55'"
		@mouseleave="iconSize = '45'"
	>
		<Icon
			:name="icon"
			:size="iconSize"
			class="transform translate-y-[0.45rem] p-2 text-white  rounded-full transition-all"
		/>
		<span class="ms-2 mt-2"> {{ text }}</span>
	</NuxtLink>
</template>
