<script setup lang="ts">
  import { orbits, ringOf } from '~/data/content'

  const { t } = useI18n({ useScope: 'local' })
  const text = useLocalized()
  const section = useTemplateRef<HTMLElement>('section')

  useStage(section, {
    tone: 'dark',
    state: ({ mobile, progress }) =>
      scene({
        bot: mobile
          ? { x: 0, y: 0.24, scale: 0.4, turn: 0 }
          : { x: 0, y: 0.02, scale: 0.44, turn: progress * 0.6 - 0.3 },
        orbits: 1,
      }),
  })

  function focus(index: number): void {
    sceneSignals.orbitFocus = ringOf(index)
  }

  function blur(): void {
    sceneSignals.orbitFocus = -1
  }

  onBeforeUnmount(blur)
</script>

<template>
  <section ref="section" class="relative">
    <div
      class="mx-auto flex min-h-dvh max-w-7xl flex-col justify-between px-5 pt-20 pb-6 sm:px-8 md:pt-28 md:pb-10">
      <Reveal class="mx-auto text-center">
        <p class="font-mono text-micro text-muted uppercase">{{ t('eyebrow') }}</p>
        <h2 class="mt-3 text-headline font-semibold font-stretch-112%">{{ t('title') }}</h2>
        <p
          class="mx-auto mt-4 hidden max-w-xl text-[1.0625rem] leading-relaxed text-muted md:block">
          {{ t('lede') }}
        </p>
      </Reveal>

      <ul class="grid gap-2 md:grid-cols-3 md:gap-5">
        <Reveal
          v-for="(orbit, index) in orbits"
          :key="orbit.id"
          as="li"
          :delay="index * 0.08"
          :amount="0.1">
          <div
            class="group h-full rounded-2xl border border-line p-3 transition-colors duration-300 hover:border-accent/50 hover:bg-white/3 md:rounded-3xl md:p-6"
            @pointerenter="focus(index)"
            @pointerleave="blur">
            <div class="flex items-baseline justify-between gap-3">
              <h3 class="text-[1.0625rem] font-semibold md:text-title">{{ text(orbit.title) }}</h3>
              <span class="font-mono text-micro text-muted">{{
                t('ring', { n: ringOf(index) + 1 })
              }}</span>
            </div>
            <p class="mt-2 hidden text-[0.9375rem] leading-relaxed text-muted md:block">
              {{ text(orbit.summary) }}
            </p>
            <ul class="mt-2 flex flex-wrap gap-1 md:mt-5 md:gap-1.5">
              <li
                v-for="tool in orbit.tools"
                :key="tool.name"
                class="flex items-center gap-1.5 rounded-full bg-surface-2/80 px-2 py-0.5 text-[0.6875rem] text-fg/85 transition-colors duration-300 group-hover:text-fg md:px-2.5 md:py-1 md:text-[0.8125rem]">
                <Icon :name="tool.icon" class="size-3 opacity-80 md:size-3.5" />
                {{ tool.name }}
              </li>
            </ul>
          </div>
        </Reveal>
      </ul>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "eyebrow": "Stack",
    "title": "Three orbits, one system.",
    "lede": "Everything I ship crosses all three: the interface people touch, the services behind it and the infrastructure that keeps it answering.",
    "ring": "ring {n}"
  },
  "pt": {
    "eyebrow": "Stack",
    "title": "Três órbitas, um sistema.",
    "lede": "Tudo que eu entrego atravessa as três: a interface que as pessoas tocam, os serviços por trás dela e a infraestrutura que mantém tudo respondendo.",
    "ring": "órbita {n}"
  }
}
</i18n>
