<script setup lang="ts">
import 'animate.css'

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const isMobile = useMediaQuery('(max-width: 780px)')

const dx = computed(() => isMobile.value ? 0 : Math.abs(x.value - width.value / 2))
const dy = computed(() => isMobile.value ? 0 : Math.abs(y.value - height.value / 2))
const distance = computed(() => isMobile.value ? 0 : Math.sqrt(dx.value * dx.value + dy.value * dy.value))
const size = computed(() => isMobile.value ? 0 : Math.max(300 - distance.value / 3, 150))
const opacity = computed(() => isMobile.value ? 0 : Math.min(Math.max(size.value / 300, 0.7), 1))
const brightness = computed(() => isMobile.value ? 0 : Math.max(100 - distance.value / 5, 50))
const logo = ref<HTMLElement>()
const logoGradient = computed(() => {
	if (!isMobile.value) {
		const rect = logo.value?.getBoundingClientRect()
		const xPos = x.value - (rect?.left ?? 0)
		const yPos = y.value - (rect?.top ?? 0)
		return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`
	}
})

const typeValue = ref('')
const typeStatus = ref(false)
const typeArrayDesktop = ref(['Desenvolvedor Web', 'Full-Stack', 'Cursando Ciência da Computação'])
const typeArrayCel = ref(['Desenvolvedor', 'Full-stack'])
const typeArray = computed(() => (isMobile.value ? typeArrayCel.value : typeArrayDesktop.value))
const typingSpeed = 100
const erasingSpeed = 100
const newTextDelay = 500
let typeArrayIndex = 0
let charIndex = 0

function typeText() {
	if (charIndex < typeArray.value[typeArrayIndex].length) {
		if (!typeStatus.value)
			typeStatus.value = true
		typeValue.value += typeArray.value[typeArrayIndex].charAt(charIndex)
		charIndex += 1
		setTimeout(typeText, typingSpeed)
	}
	else {
		typeStatus.value = false
		setTimeout(eraseText, newTextDelay)
	}
}

function eraseText() {
	if (charIndex > 0) {
		if (!typeStatus.value)
			typeStatus.value = true
		typeValue.value = typeArray.value[typeArrayIndex].substring(0, charIndex - 1)
		charIndex -= 1
		setTimeout(eraseText, erasingSpeed)
	}
	else {
		typeStatus.value = false
		typeArrayIndex += 1
		if (typeArrayIndex >= typeArray.value.length)
			typeArrayIndex = 0
		setTimeout(() => {
			typeText()
		}, typingSpeed + 1000)
	}
}

onMounted(() => {
	setTimeout(() => {
		typeText()
	}, newTextDelay + 200)
})
function tada() {
	if (logo.value) {
		logo.value.classList.add('animate__animated', 'animate__tada')
		setTimeout(() => logo.value?.classList.remove('animate__animated', 'animate__tada'), 1000)
	}
}
</script>

<template>
	<Section class="cursor-none overflow-hidden relative">
		<div class="h-[calc(100vh-64px)] bg-[url('/image/fundo.gif')] blur-sm  " />
		<div
			class="absolute bg-blue-400/50 dark:bg-sky-200/30 rounded-full -translate-x-[75%] -translate-y-1/2 blur-2xl dark:blur-3xl"
			:style="{ left: `${x}px`, top: `${y}px`, width: `${size}px`, height: `${size}px`, opacity }"
		/>

		<h2
			ref="logo"
			class="font-bold text-center text-5xl dark:text-white transition-500 absolute inset-0 flex items-center justify-center"
			:style="{ maskImage: logoGradient, filter: isMobile ? 'brightness(1)' : `brightness(${brightness}%)` }" @click="tada"
		>
			<div>
				<p class="text-white">
					Rafael Curi
				</p>
				<span class="inline-block mr-[-15px] text-white pr-4">{{ typeValue }}</span>
				<span class="cursor inline-block text-white">|</span>
			</div>
		</h2>
	</Section>
</template>

<style scoped lang="sass">
span.cursor
    animation: blink 800ms infinite
@keyframes blink
    0%
        opacity: 1
    50%
        opacity: 0
    100%
        opacity: 1
</style>
