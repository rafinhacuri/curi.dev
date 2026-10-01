<script setup lang="ts">
  import { useScroll } from 'motion-v'

  import { certificates } from '~/data/certificates'

  const { t } = useI18n({ useScope: 'local' })
  const section = useTemplateRef<HTMLElement>('section')
  const deck = useTemplateRef<HTMLElement>('deck')

  const highlights = new Set(['go', 'typescript', 'nuxt', 'docker', 'dns', 'oauth', 'linux-5'])
  const hand = certificates.filter((certificate) => highlights.has(certificate.slug))
  const middle = (hand.length - 1) / 2

  useStage(section, {
    tone: 'dark',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0, y: -1.7, scale: 0.4, turn: 0 }
          : { x: -0.82, y: -1.6, scale: 0.5, turn: 0.4 },
      }),
  })

  const { scrollYProgress } = useScroll({ target: deck, offset: ['start end', 'center center'] })
  const spread = ref(0)

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    spread.value = smoothstep(0.2, 0.9, value)
  })

  function cardTransform(index: number): Record<string, string | number> {
    const offset = index - middle
    const s = spread.value
    return {
      transform: [
        `translateX(${offset * 15 * s}%)`,
        `translateY(${Math.abs(offset) * 5 * s + (1 - s) * offset * -1.2}%)`,
        `rotate(${offset * 6 * s}deg)`,
        `rotateX(${(1 - s) * 28}deg)`,
      ].join(' '),
      zIndex: 10 - Math.round(Math.abs(offset)),
    }
  }
</script>

<template>
  <section ref="section" class="relative overflow-hidden py-32 md:py-44">
    <div class="mx-auto max-w-7xl px-5 text-center sm:px-8">
      <Reveal>
        <p class="font-mono text-micro text-muted uppercase">{{ t('eyebrow') }}</p>
        <h2 class="mt-3 text-display font-semibold font-stretch-112%">{{ t('title') }}</h2>
        <p class="mx-auto mt-5 max-w-xl text-lede text-pretty text-muted">
          {{ t('lede', { n: certificates.length }) }}
        </p>
      </Reveal>
    </div>

    <div
      ref="deck"
      class="relative mx-auto mt-16 h-60 w-[min(19rem,72vw)] perspective-[1400px] sm:mt-20 sm:h-68 sm:w-88"
      aria-hidden="true">
      <div
        v-for="(certificate, index) in hand"
        :key="certificate.slug"
        class="absolute inset-x-0 top-0 origin-[50%_120%] will-change-transform"
        :style="cardTransform(index)">
        <Pass :certificate="certificate" />
      </div>
    </div>

    <Reveal class="mt-10 text-center sm:mt-16" :delay="0.1">
      <NuxtLinkLocale
        to="/certificates"
        class="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[0.9375rem] font-medium text-bg transition-transform duration-150 active:scale-[0.97]">
        {{ t('cta') }}
        <Icon
          name="ph:arrow-right"
          class="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </NuxtLinkLocale>
    </Reveal>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "eyebrow": "Certificates",
    "title": "Still studying.",
    "lede": "{n} courses so far, from the first Linux module to the nuts and bolts of OAuth 2.0.",
    "cta": "Open the wallet"
  },
  "pt": {
    "eyebrow": "Certificados",
    "title": "Sempre estudando.",
    "lede": "{n} cursos até aqui, do primeiro módulo de Linux aos detalhes práticos do OAuth 2.0.",
    "cta": "Abrir a carteira"
  }
}
</i18n>
