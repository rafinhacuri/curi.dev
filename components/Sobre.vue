<script setup lang="ts">
const { items, title } = defineProps({
	title: String,
	items: {
		type: Array as () => {
			img: string
			name: string
		}[],
	},

})
</script>

<template>
	<Panel toggleable class="dark:bg-slate-800">
		<template #header>
			<div class="flex align-items-center gap-2">
				<span class="font-bold text-2xl">{{ title }}</span>
			</div>
		</template>

		<ol class="space-y-7">
			<li v-for="(item, index) in items" :key="index" class="flex items-center space-x-2">
				<p class="text-xl font-bold">
					{{ item.name }}
				</p>
			</li>
		</ol>
	</Panel>
</template>
