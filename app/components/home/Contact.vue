<script setup lang="ts">
  import { email, socials } from '~/data/content'

  const { t } = useI18n({ useScope: 'local' })
  const section = useTemplateRef<HTMLElement>('section')
  const { copy, copied } = useClipboard({ source: email, copiedDuring: 1800 })

  const profiles = socials.filter((social) => social.href.startsWith('http'))

  useStage(section, {
    tone: 'dark',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0, y: 0.58, scale: 0.42, turn: 0 }
          : { x: 0, y: 0.6, scale: 0.44, turn: 0 },
        mood: 'wave',
      }),
  })
</script>

<template>
  <section
    id="contact"
    ref="section"
    class="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-5 pt-[50vh] pb-20 text-center sm:px-8 md:pt-[46vh]">
    <Reveal>
      <h2 class="text-giant font-semibold font-stretch-118%">{{ t('title') }}</h2>
      <p class="mx-auto mt-6 max-w-md text-lede text-pretty text-muted">{{ t('lede') }}</p>
    </Reveal>

    <Reveal class="mt-10 flex flex-col items-center gap-5" :delay="0.1">
      <div class="flex flex-wrap items-center justify-center gap-2">
        <a
          :href="`mailto:${email}`"
          class="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[0.9375rem] font-medium text-accent-ink transition-transform duration-150 active:scale-[0.97]">
          <Icon name="ph:envelope-simple" class="size-4" />
          {{ email }}
        </a>
        <button
          type="button"
          class="relative inline-flex size-12 items-center justify-center rounded-full border border-line transition-[transform,background-color] duration-150 hover:bg-surface-2 active:scale-95"
          :aria-label="copied ? t('copied') : t('copy')"
          @click="copy()">
          <AnimatePresence mode="popLayout" :initial="false">
            <Motion
              :key="copied ? 'done' : 'idle'"
              as="span"
              class="flex"
              :initial="{ opacity: 0, scale: 0.5, filter: 'blur(4px)' }"
              :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
              :exit="{ opacity: 0, scale: 0.5, filter: 'blur(4px)' }"
              :transition="{ type: 'spring', bounce: 0, duration: 0.3 }">
              <Icon :name="copied ? 'ph:check' : 'ph:copy'" class="size-4" />
            </Motion>
          </AnimatePresence>
        </button>
      </div>
      <p class="sr-only" aria-live="polite">{{ copied ? t('copied') : '' }}</p>

      <ul class="flex items-center gap-2">
        <li v-for="profile in profiles" :key="profile.name">
          <a
            :href="profile.href"
            target="_blank"
            rel="noopener"
            class="inline-flex h-11 items-center gap-2 rounded-full px-4 text-[0.9375rem] text-muted transition-colors hover:text-fg">
            <Icon :name="profile.icon" class="size-4.5" />
            {{ profile.name }}
            <Icon name="ph:arrow-up-right" class="size-3.5" />
          </a>
        </li>
      </ul>
    </Reveal>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Say hello.",
    "lede": "Have a system that needs building, migrating or simply answering again? My inbox is open.",
    "copy": "Copy email address",
    "copied": "Email address copied"
  },
  "pt": {
    "title": "Diga oi.",
    "lede": "Tem um sistema para construir, migrar ou simplesmente fazer voltar a responder? Meu e-mail está aberto.",
    "copy": "Copiar endereço de e-mail",
    "copied": "Endereço de e-mail copiado"
  }
}
</i18n>
