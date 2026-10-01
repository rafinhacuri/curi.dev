<script setup lang="ts">
  import { useScroll } from 'motion-v'

  const { t } = useI18n({ useScope: 'local' })
  const section = useTemplateRef<HTMLElement>('section')

  useStage(section, {
    tone: 'light',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0.3, y: -1.7, scale: 0.5, turn: 0 }
          : { x: -0.6, y: 0.02, scale: 0.78, turn: 0.55 },
      }),
  })

  const { scrollYProgress } = useScroll({ target: section, offset: ['start 0.7', 'end end'] })
  const revealed = ref(0)
  const photo = '§'
  const words = computed(() => t('story', { photo }).split(' '))
  const label = computed(() => t('story', { photo: '' }).replace('  ', ', '))

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    revealed.value = value * words.value.length * 1.1
  })

  function wordOpacity(index: number): number {
    return Math.min(Math.max(revealed.value - index, 0.14), 1)
  }
</script>

<template>
  <section ref="section" class="relative h-[220vh]">
    <div class="sticky top-0 flex h-dvh items-center">
      <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p
          class="ml-auto max-w-176 text-[clamp(1.75rem,3.5vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance md:w-[60%]">
          <span class="sr-only">{{ label }}</span>
          <template v-for="(word, index) in words" :key="index">
            <span
              v-if="word === photo"
              class="relative mx-[0.08em] inline-block h-[0.82em] w-[1.5em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline transition-opacity duration-150"
              :style="{ opacity: wordOpacity(index) }"
              aria-hidden="true">
              <NuxtImg
                src="/rosto.png"
                alt=""
                width="96"
                height="96"
                class="size-full object-cover object-[50%_30%]" />
            </span>
            <span
              v-else
              class="transition-opacity duration-150"
              :style="{ opacity: wordOpacity(index) }"
              aria-hidden="true">
              {{ word }}
            </span>
            {{ ' ' }}
          </template>
        </p>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "story": "I'm Rafael {photo} a full-stack developer from Rio. I write interfaces in Nuxt and APIs in Go, keep DNS answering and containers healthy, and turn legacy PHP into code people enjoy maintaining."
  },
  "pt": {
    "story": "Sou o Rafael {photo} desenvolvedor full-stack do Rio. Escrevo interfaces em Nuxt e APIs em Go, mantenho o DNS respondendo e os containers saudáveis, e transformo PHP legado em código que dá gosto de manter."
  }
}
</i18n>
