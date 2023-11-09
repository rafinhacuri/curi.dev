<script setup lang="ts">
const { x, y } = useMouse()
const hidden = ref(true)
function nope() {
	hidden.value = false
	setTimeout(() => hidden.value = true, 5000)
}
if (process.client) {
	window.addEventListener('keydown', (event) => {
		if (event.code === 'F12') {
			event.preventDefault()
			nope()
			return false
		}
	})
}
</script>

<template>
	<Navbar />

	<main class="min-h-full " @contextmenu.prevent="nope">
		<slot />
		<img src="/nao.gif" alt="nope emoji gif" class="absolute -translate-x-[75%] -translate-y-1/2 h-32 cursor-none z-50 rounded-md" :class="{ hidden }" :style="{ left: `${x}px`, top: `${y}px` }" @contextmenu.prevent>
	</main>
</template>
