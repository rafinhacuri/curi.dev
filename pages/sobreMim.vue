<script setup lang="ts">
const isMobile = useMediaQuery('(max-width: 780px)')
</script>

<template>
	<section>
		<div class="bg-[url('/image/sobreMim.gif')]">
			<div class="    flex justify-center items-center p-10 h-full">
				<div class="bg-slate-200 dark:bg-slate-950 rounded-lg p-9 space-y-7 " :class="isMobile ? 'w-full' : 'w-[calc(100%-300px)]'">
					<div class="flex justify-center items-center ">
						<img src="/image/fotopessoal.png" alt="minha-foto" class=" w-36 rounded-full">
					</div>
					<span class=" flex justify-center items-center space-x-4">
						<p>🧑‍💻Desenvolvedor Web Full-Stack</p>
						<p>🎮Amante de jogos</p>
						<p>🧑Adoro Codar</p>
					</span>

					<h2 class="font-bold text-center">
						💼 Competencias:
					</h2>
					<ol class="space-y-4">
						<li>🚀 Media experiência em Node.js, Vue.js e Nuxt.js</li>
						<li>💡 Mediano em TypeScript e proficiente Tailwind CSS</li>
						<li>🌐 Começando minha carreira de dev</li>
						<li>🎮 Adoro jogos como valorant e mobile legends</li>
						<li>📊 Em busca de me desenvolver como um bom dev back-end</li>
						<li>📂 Aprendendo sobre Git, GitHub e GitLab</li>
					</ol>
					<h2 class="font-bold ">
						📜 Resumo:
					</h2>
					<p>
						Como um desenvolvedor web full-stack, eu sou apaixonado por codificação e jogos. Tenho experiência em Node.js, Vue.js, Nuxt.js, TypeScript e Tailwind CSS. Estou no início da minha carreira de desenvolvedor e adoro jogos como Valorant e Mobile Legends. Estou me esforçando para me tornar um excelente desenvolvedor back-end e atualmente estou aprendendo sobre Git, GitHub e GitLab
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
