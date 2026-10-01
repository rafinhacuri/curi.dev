<script setup lang="ts">
  const props = defineProps({
    eyebrow: { type: String, required: true },
    title: { type: String, required: true },
    lede: { type: String, required: true },
  })

  const section = useTemplateRef<HTMLElement>('section')

  useStage(section, {
    tone: 'light',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0.62, y: 0.6, scale: 0.3, turn: -0.4 }
          : { x: 0.66, y: 0.28, scale: 0.62, turn: -0.35 },
        mood: 'wave',
      }),
  })
</script>

<template>
  <section ref="section" class="mx-auto max-w-7xl px-5 pt-40 pb-16 sm:px-8 md:pt-48 md:pb-20">
    <Reveal class="max-w-2xl">
      <p class="font-mono text-micro text-muted uppercase">{{ props.eyebrow }}</p>
      <h1 class="mt-4 text-display font-semibold text-balance font-stretch-112%">
        {{ props.title }}
      </h1>
      <p class="mt-6 max-w-xl text-lede text-pretty text-muted">{{ props.lede }}</p>
    </Reveal>
    <slot />
  </section>
</template>
