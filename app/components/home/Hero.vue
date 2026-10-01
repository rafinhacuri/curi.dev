<script setup lang="ts">
  import { useScroll } from 'motion-v'

  const { t } = useI18n({ useScope: 'local' })
  const section = useTemplateRef<HTMLElement>('section')

  useStage(section, {
    tone: 'light',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0, y: -0.56, scale: 0.62, turn: 0 }
          : { x: 0.44, y: -0.04, scale: 1.12, turn: -0.22 },
        mood: 'wave',
      }),
  })

  const { scrollY } = useScroll()
  const scrollYProgress = useTransform(scrollY, (y) => y / (section.value?.offsetHeight || 1))
  const lift = useTransform(scrollYProgress, [0, 1], [0, -140])
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const nameLines = ['Rafael', 'Curi']

  function letterDelay(line: number, index: number): number {
    return 0.15 + line * 0.12 + index * 0.035
  }
</script>

<template>
  <section ref="section" class="relative min-h-dvh">
    <Motion
      class="mx-auto flex min-h-dvh max-w-7xl flex-col justify-start px-5 pt-28 pb-16 sm:px-8 md:justify-center md:pt-12"
      :style="{ y: lift, opacity: fade }">
      <Motion
        as="p"
        class="font-mono text-micro text-muted uppercase"
        :initial="{ opacity: 0, y: 8 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.05 }">
        {{ t('eyebrow') }}
      </Motion>

      <h1 class="mt-5 text-hero font-semibold font-stretch-118%" :aria-label="nameLines.join(' ')">
        <span
          v-for="(line, lineIndex) in nameLines"
          :key="line"
          class="block overflow-hidden pb-[0.06em]"
          aria-hidden="true">
          <Motion
            v-for="(letter, index) in line"
            :key="index"
            as="span"
            class="inline-block"
            :initial="{ y: '110%', rotate: 6 }"
            :animate="{ y: '0%', rotate: 0 }"
            :transition="{
              type: 'spring',
              bounce: 0,
              duration: 1.1,
              delay: letterDelay(lineIndex, index),
            }">
            {{ letter }}
          </Motion>
        </span>
      </h1>

      <Motion
        as="p"
        class="mt-7 max-w-124 text-lede text-pretty text-muted"
        :initial="{ opacity: 0, y: 16, filter: 'blur(8px)' }"
        :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :transition="{ type: 'spring', bounce: 0, duration: 1, delay: 0.7 }">
        {{ t('lede') }}
      </Motion>

      <Motion
        class="mt-9 flex flex-wrap items-center gap-3"
        :initial="{ opacity: 0, y: 12 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', bounce: 0, duration: 0.9, delay: 0.85 }">
        <NuxtLinkLocale
          to="/projects"
          class="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[0.9375rem] font-medium text-bg transition-transform duration-150 active:scale-[0.97]">
          {{ t('projects') }}
          <Icon
            name="ph:arrow-right"
            class="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
        </NuxtLinkLocale>
        <NuxtLinkLocale
          :to="{ path: '/', hash: '#contact' }"
          class="inline-flex h-12 items-center rounded-full px-5 text-[0.9375rem] font-medium text-accent transition-colors hover:bg-accent/10 active:scale-[0.97]">
          {{ t('contact') }}
        </NuxtLinkLocale>
      </Motion>
    </Motion>

    <Motion
      as="p"
      class="pointer-events-none absolute inset-x-0 bottom-8 mx-auto hidden max-w-7xl px-5 text-right font-mono text-micro text-muted sm:px-8 md:block"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ delay: 2.2, duration: 0.8 }">
      {{ t('hint') }}
    </Motion>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "eyebrow": "Full-stack developer · Rio de Janeiro",
    "lede": "I build web systems end to end and keep them running, from the DNS record to the button you click.",
    "projects": "See projects",
    "contact": "Get in touch",
    "hint": "Psst, try clicking the robot."
  },
  "pt": {
    "eyebrow": "Desenvolvedor full-stack · Rio de Janeiro",
    "lede": "Construo sistemas web de ponta a ponta e mantenho tudo no ar, do registro de DNS até o botão que você clica.",
    "projects": "Ver projetos",
    "contact": "Falar comigo",
    "hint": "Psiu, experimente clicar no robô."
  }
}
</i18n>
