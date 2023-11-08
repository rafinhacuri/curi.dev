<script setup lang="ts">
const { x, y } = useMouse()
const { width, height } = useWindowSize()

const isLargeScreen = useMediaQuery('(min-width: 781px)')

const dx = computed(() => isLargeScreen.value ? Math.abs(x.value - width.value / 2) : 0)
const dy = computed(() => isLargeScreen.value ? Math.abs(y.value - height.value / 2) : 0)
const distance = computed(() => isLargeScreen.value ? Math.sqrt(dx.value * dx.value + dy.value * dy.value) : 0)
const size = computed(() => isLargeScreen.value ? Math.max(300 - distance.value / 3, 150) : 0)
const opacity = computed(() => isLargeScreen.value ? Math.min(Math.max(size.value / 300, 0.7), 1) : 0)
const brightness = computed(() => isLargeScreen.value ? Math.max(100 - distance.value / 5, 50) : 0)
const logo = ref<HTMLElement>()
const logoGradient = computed(() => {
	if (isLargeScreen.value) {
		const rect = logo.value?.getBoundingClientRect()
		const xPos = x.value - (rect?.left ?? 0)
		const yPos = y.value - (rect?.top ?? 0)
		return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`
	}
})

const typeValue = ref('')
const typeStatus = ref(false)
const typeArray = ref(['desenvolvedor web', 'full-stack', 'cursando ciencia da computaçao'])
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

watchEffect(() => {
	typeArray.value = ['desenvolvedor web', 'full-stack', 'cursando ciencia da computaçao']
})
</script>

<template>
	<Section class="cursor-none overflow-hidden">
		<div class="h-[calc(100vh-64px)] bg-[url('/fundo.gif')] blur-sm" />
		<div
			class="absolute bg-blue-400/50 dark:bg-sky-200/30 rounded-full -translate-x-[75%] -translate-y-1/2 blur-2xl dark:blur-3xl"
			:style="{ left: `${x}px`, top: `${y}px`, width: `${size}px`, height: `${size}px`, opacity }"
		/>

		<h2
			ref="logo"
			class="font-bold text-center text-5xl dark:text-white transition-500 absolute inset-0 flex items-center justify-center"
			:style="{ maskImage: logoGradient, filter: isLargeScreen ? `brightness(${brightness}%)` : 'brightness(100%)' }"
		>
			<div>
				<p class="text-white">
					Rafael Curi
				</p>
				<span class="inline-block mr-[-15px] text-white pr-4">{{ typeValue }}</span>
				<span class="cursor inline-block text-white">|</span>
				<span class="hidden">{{ 'desenvolvedor web' }} {{ 'full-stack' }} {{ 'cursando ciencia da computaçao' }}</span>
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
