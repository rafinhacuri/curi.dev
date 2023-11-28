<script setup lang="ts">
const { t } = useI18n()

const isMobile = useMediaQuery('(max-width: 780px)')
</script>

<template>
	<section>
		<div class="bg-[url('/image/sobreMim.gif')]">
			<div class="flex justify-center items-center p-10 md:h-screen lg:h-screen sm:h-full">
				<div class="bg-slate-200 dark:bg-slate-950 rounded-lg p-9 space-y-7 " :class="isMobile ? 'w-full' : 'w-[calc(100%-300px)]'">
					<div class="flex justify-center items-center ">
						<img src="/image/fotopessoal.png" alt="minha-foto" class=" w-36 rounded-full">
					</div>
					<span class=" flex justify-center items-center space-x-4">
						<p>{{ t('sobre.titulo1') }}</p>
						<p>{{ t('sobre.titulo2') }}</p>
						<p>{{ t('sobre.titulo3') }}</p>
					</span>

					<h2 class="font-bold text-center">
						{{ t('sobre.titulo4') }}
					</h2>
					<ol class="space-y-4">
						<li>{{ t('sobre.subtitulo1') }}</li>
						<li>{{ t('sobre.subtitulo2') }}</li>
						<li>{{ t('sobre.subtitulo3') }}</li>
						<li>{{ t('sobre.subtitulo4') }}</li>
						<li>{{ t('sobre.subtitulo5') }}</li>
						<li>{{ t('sobre.subtitulo6') }}</li>
					</ol>
					<h2 class="font-bold ">
						{{ t('sobre.titulo5') }}
					</h2>
					<p>
						{{ t('sobre.descricao') }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
