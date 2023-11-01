<script setup lang="ts">
import {ref, onMounted, watchEffect} from 'vue'

const typeValue = ref('')
const typeStatus = ref(false)
const typeArray = ref(['desenvolvedor web', 'full-stack', 'cursando ciência da computação'])
const typingSpeed = 100
const erasingSpeed = 100
const newTextDelay = 500
let typeArrayIndex = 0
let charIndex = 0

const typeText = () => {
	if (charIndex < typeArray.value[typeArrayIndex].length) {
		if (!typeStatus.value) typeStatus.value = true
		typeValue.value += typeArray.value[typeArrayIndex].charAt(charIndex)
		charIndex += 1
		setTimeout(typeText, typingSpeed)
	} else {
		typeStatus.value = false
		setTimeout(eraseText, newTextDelay)
	}
}

const eraseText = () => {
	if (charIndex > 0) {
		if (!typeStatus.value) typeStatus.value = true
		typeValue.value = typeArray.value[typeArrayIndex].substring(0, charIndex - 1)
		charIndex -= 1
		setTimeout(eraseText, erasingSpeed)
	} else {
		typeStatus.value = false
		typeArrayIndex += 1
		if (typeArrayIndex >= typeArray.value.length) typeArrayIndex = 0
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
	typeArray.value = ['desenvolvedor web', 'full-stack', 'cursando ciência da computação']
})

const backgroundImage = ref('url(fundo.gif)')
const backgroundImageStyle = computed(() => ({
	backgroundImage: backgroundImage.value
}))
const cursorChar = ref('|')

setInterval(() => {
	cursorChar.value = cursorChar.value === '|' ? '\u00A0' : '|'
}, 250)
</script>

<template>
	<div class="relative h-screen flex items-center justify-center">
		<div class="absolute inset-0 bg-cover bg-no-repeat blur-sm" :style="backgroundImageStyle"></div>
		<!-- <ul id="menu" class="absolute top-0 right-0 m-4 z-20">
			<div id="toggle"><UIcon name="i-heroicons-plus-small-solid" /></div>
			<li class="text-red-700" style="--i: 0">
				<UIcon name="i-heroicons-light-bulb" />
			</li>
			<li class="text-yellow-300" style="--i: 1">
				<UIcon name="i-heroicons-light-bulb" />
			</li>
			<li class="text-yellow-500" style="--i: 2">
				<UIcon name="i-heroicons-light-bulb" />
			</li>
			<li class="text-blue-500" style="--i: 3">
				<UIcon name="i-heroicons-light-bulb" />
			</li>
			<li class="text-blue-300" style="--i: 4">
				<UIcon name="i-heroicons-light-bulb" />
			</li>
			<li class="text-yellow-600" style="--i: 5">
				<UIcon name="i-heroicons-light-bulb" />
			</li>
			<li class="text-blue-700" style="--i: 6">
				<UIcon name="i-heroicons-light-bulb" />
			</li>
			<li class="text-green-200" style="--i: 7">
				<UIcon name="i-heroicons-light-bulb" />
			</li>
		</ul> -->
		<div class="relative text-center z-10">
			<h1 class="text-4xl font-extrabold tracking-wide mb-4">Rafael Curi</h1>
			<p class="text-4xl font-extrabold italic">
				{{ typeValue }}<span>{{ cursorChar }}</span>
			</p>
		</div>
	</div>
</template>
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
ul {
	position: relative;
	width: 280px;
	height: 280px;
	display: flex;
	justify-content: center;
	align-items: center;
}
li {
	position: absolute;
	left: 0;
	list-style: none;
	transition: 0.5s;
	transform-origin: 140px;
	transform: rotate(0deg) translateX(110px);
}
#toggle {
	position: absolute;
	width: 60px;
	height: 60px;
	background: #2f363e;
	border: 2px solid #fff;
	border-radius: 50%;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	z-index: 10000;
	font-size: 2em;
	transition: transform 1.25s;
}
</style>
