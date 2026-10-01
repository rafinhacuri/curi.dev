<script setup lang="ts">
  import { capabilities } from '~/data/content'

  const { t } = useI18n({ useScope: 'local' })
  const text = useLocalized()
  const section = useTemplateRef<HTMLElement>('section')
  const steps = useTemplateRef<HTMLElement>('steps')

  const total = capabilities.length

  function stepsProgress(sectionProgress: number): number {
    if (!section.value || !steps.value) return 0
    const start = steps.value.offsetTop / section.value.offsetHeight
    return clamp((sectionProgress - start) / (1 - start))
  }

  function activeStep(progress: number): number {
    if (progress <= 0) return -1
    return Math.min(total - 1, Math.floor(progress * total))
  }

  useStage(section, {
    tone: 'light',
    state: ({ mobile, progress: sectionProgress }) => {
      const progress = stepsProgress(sectionProgress)
      const explode = Math.min(1, 0.2 + progress * 3)
      const active = activeStep(progress)
      return mobile
        ? scene({
            bot: { x: 0.62, y: 0.78, scale: 0.26, turn: -0.5 },
            layers: { x: 0, y: 0.38, scale: 0.42, turn: -0.5, show: 1, explode, active },
          })
        : scene({
            bot: { x: 0.52, y: 0.3 + explode * 0.16, scale: 0.36, turn: -0.35 },
            layers: { x: 0.5, y: -0.16, scale: 0.74, turn: -0.55, show: 1, explode, active },
          })
    },
  })

  function stepLabel(index: number): string {
    return `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`
  }
</script>

<template>
  <section id="capabilities" ref="section" class="relative">
    <div class="mx-auto max-w-7xl px-5 pt-32 sm:px-8 md:pt-40">
      <Reveal class="max-w-xl">
        <p class="font-mono text-micro text-muted uppercase">{{ t('eyebrow') }}</p>
        <h2 class="mt-3 text-display font-semibold font-stretch-112%">{{ t('title') }}</h2>
        <p class="mt-5 text-lede text-pretty text-muted">{{ t('lede') }}</p>
      </Reveal>
    </div>

    <ol ref="steps" class="mx-auto max-w-7xl px-5 pb-[20vh] sm:px-8">
      <li
        v-for="(capability, index) in capabilities"
        :key="index"
        class="flex min-h-[92vh] items-end pb-6 md:min-h-[80vh] md:items-center md:pb-0">
        <Motion
          as="article"
          class="max-md:rounded-3xl max-md:glass max-md:p-5 max-md:shadow-float md:w-[46%]"
          :initial="{ opacity: 0.2 }"
          :while-in-view="{ opacity: 1 }"
          :in-view-options="{ margin: '-42% 0px -42% 0px' }"
          :transition="{ duration: 0.5 }">
          <p class="flex items-center gap-3 font-mono text-micro text-muted uppercase">
            <span class="text-accent">{{ stepLabel(index) }}</span>
            <span class="h-px w-6 bg-line" />
            {{ text(capability.layer) }}
          </p>
          <h3
            class="mt-3 text-[1.75rem] leading-[1.05] font-semibold tracking-tight text-balance md:mt-4 md:text-headline">
            {{ text(capability.title) }}
          </h3>
          <p
            class="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-muted md:mt-5 md:text-[1.0625rem]">
            {{ text(capability.body) }}
          </p>
          <ul class="mt-4 flex flex-wrap gap-1.5 md:mt-6">
            <li
              v-for="tag in capability.tags"
              :key="text(tag)"
              class="rounded-full border border-line px-3 py-1 font-mono text-micro text-fg/80">
              {{ text(tag) }}
            </li>
          </ul>
        </Motion>
      </li>
    </ol>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "eyebrow": "What I do",
    "title": "Built from the ground up.",
    "lede": "Five layers I know how to take care of, starting at the network and ending where nobody has to notice anything went wrong."
  },
  "pt": {
    "eyebrow": "O que eu faço",
    "title": "Construído de baixo para cima.",
    "lede": "Cinco camadas que eu sei cuidar, começando pela rede e terminando onde ninguém precisa perceber que algo deu errado."
  }
}
</i18n>
