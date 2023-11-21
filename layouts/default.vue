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
if (process.client) {
	window.addEventListener('scroll', () => {
		const btnScrollTop = document.getElementById('scrollTop')
		if (btnScrollTop) {
			if (window.pageYOffset === 0)
				btnScrollTop.style.opacity = '0'
			else btnScrollTop.style.opacity = '100%'
		}
	})
}

function ScrollTopDiv() {
	scrollTo({ top: 0 - 65, behavior: 'smooth' })
}
</script>

<template>
	<Navbar />
	<!-- @contextmenu.prevent="nope" -->
	<main class="min-h-full ">
		<slot />
		<img src="/image/nao.gif" alt="nope emoji gif" class="absolute -translate-x-[75%] -translate-y-1/2 h-32 cursor-none z-50 rounded-md" :class="{ hidden }" :style="{ left: `${x}px`, top: `${y}px` }" @contextmenu.prevent>
		<UButton
			id="scrollTop"
			color="blue"
			class="fixed z-50 transition-opacity ease-in-out rounded-full opacity-0 animate-bounce bottom-5 right-5"
			variant="solid"
			icon="i-heroicons-arrow-small-up-solid"
			@click="ScrollTopDiv"
		/>
	</main>
</template>
