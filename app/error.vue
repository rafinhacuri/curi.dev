<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: { type: Object as PropType<NuxtError>, required: true },
  })

  const { t } = useI18n({ useScope: 'local' })
  const localePath = useLocalePath()
  const route = useRoute()
  const section = useTemplateRef<HTMLElement>('section')

  const status = computed(() => props.error.status || props.error.statusCode || 500)
  const missing = computed(() => status.value === 404)
  const title = computed(() => (missing.value ? t('missing.title') : t('broken.title')))
  const message = computed(() => (missing.value ? t('missing.message') : t('broken.message')))

  useHead({ title: String(status.value), htmlAttrs: { 'data-tone': 'dark' } })

  useStage(section, {
    tone: 'dark',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0, y: 0.42, scale: 0.55, turn: 0 }
          : { x: 0.5, y: 0.02, scale: 0.95, turn: -0.3 },
        orbits: missing.value ? 0 : 0.35,
        mood: 'lost',
      }),
  })

  function goHome(): void {
    clearError({ redirect: localePath('/') })
  }
</script>

<template>
  <NuxtLayout>
    <section
      ref="section"
      class="mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-5 pt-[52vh] pb-16 sm:px-8 md:justify-center md:pt-24">
      <Reveal class="max-w-xl">
        <p class="font-mono text-micro text-muted uppercase">{{ t('label', { status }) }}</p>
        <h1 class="mt-4 text-display font-semibold text-balance font-stretch-112%">{{ title }}</h1>
        <p class="mt-6 max-w-md text-lede text-pretty text-muted">{{ message }}</p>
        <p
          class="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-micro text-muted">
          <Icon name="ph:link" class="size-3.5 shrink-0" />
          <span class="truncate">{{ route.fullPath }}</span>
        </p>
      </Reveal>

      <Reveal class="mt-10 flex flex-wrap gap-3" :delay="0.1">
        <button
          type="button"
          class="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[0.9375rem] font-medium text-bg transition-transform duration-150 active:scale-[0.97]"
          @click="goHome">
          <Icon name="ph:house" class="size-4" />
          {{ t('home') }}
        </button>
        <button
          type="button"
          class="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-[0.9375rem] font-medium transition-[transform,background-color] duration-150 hover:bg-surface-2 active:scale-[0.97]"
          @click="reloadNuxtApp()">
          <Icon name="ph:arrow-counter-clockwise" class="size-4" />
          {{ t('reload') }}
        </button>
      </Reveal>
    </section>
  </NuxtLayout>
</template>

<i18n lang="json">
{
  "en": {
    "label": "Error {status}",
    "home": "Back to home",
    "reload": "Reload page",
    "missing": {
      "title": "This page isn't here.",
      "message": "The link may be outdated or mistyped. The robot looked everywhere and came back empty-handed."
    },
    "broken": {
      "title": "Something broke while loading this page.",
      "message": "It's on my side, not yours. Reloading usually fixes it; if it doesn't, the home page still works."
    }
  },
  "pt": {
    "label": "Erro {status}",
    "home": "Voltar para o início",
    "reload": "Recarregar página",
    "missing": {
      "title": "Esta página não existe.",
      "message": "O link pode estar desatualizado ou digitado errado. O robô procurou em todo canto e voltou de mãos vazias."
    },
    "broken": {
      "title": "Algo quebrou ao carregar esta página.",
      "message": "O problema é do meu lado, não do seu. Recarregar costuma resolver; se não resolver, o início continua funcionando."
    }
  }
}
</i18n>
