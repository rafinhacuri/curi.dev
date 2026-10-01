<script setup lang="ts">
  import type { Certificate, Track } from '~/data/certificates'
  import { certificates, tracks } from '~/data/certificates'

  type Filter = Track | 'all'

  const { t } = useI18n({ useScope: 'local' })
  const text = useLocalized()
  const list = useTemplateRef<HTMLElement>('list')
  const query = ref('')
  const track = ref<Filter>('all')
  const selected = ref<Certificate | null>(null)

  useHead({ title: t('head') })
  useSeoMeta({ description: t('lede', { n: certificates.length }) })
  defineOgImage('Model.takumi', { title: t('title'), description: t('head') })

  useStage(list, {
    tone: 'light',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0.5, y: -1.7, scale: 0.4, turn: -0.4 }
          : { x: 0.86, y: -0.88, scale: 0.5, turn: -0.6 },
      }),
  })

  const options = computed(() => [
    { value: 'all' as const, label: t('all'), count: certificates.length },
    ...tracks.map((item) => ({
      value: item.id,
      label: text(item.label),
      count: certificates.filter((certificate) => certificate.track === item.id).length,
    })),
  ])

  const visible = computed(() => {
    const search = normalize(query.value)
    return certificates.filter((certificate) => {
      const inTrack = track.value === 'all' || certificate.track === track.value
      const haystack = normalize(
        `${certificate.topic} ${certificate.title.en} ${certificate.title.pt}`,
      )
      return inTrack && haystack.includes(search)
    })
  })

  function reset(): void {
    query.value = ''
    track.value = 'all'
  }
</script>

<template>
  <div>
    <PageIntro
      :eyebrow="t('eyebrow')"
      :title="t('title')"
      :lede="t('lede', { n: certificates.length })" />

    <section ref="list" class="mx-auto min-h-dvh max-w-7xl px-5 pb-32 sm:px-8">
      <div
        class="sticky top-12 z-20 -mx-5 flex flex-col gap-3 glass px-5 py-3 sm:-mx-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div class="-mx-5 no-scrollbar overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <Segmented v-model="track" :options="options" :label="t('filter')" />
        </div>
        <label class="relative block sm:w-72">
          <span class="sr-only">{{ t('search') }}</span>
          <Icon
            name="ph:magnifying-glass"
            class="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted" />
          <input
            v-model="query"
            type="search"
            :placeholder="t('placeholder')"
            class="h-11 w-full rounded-full bg-surface-2 pr-4 pl-10 text-base text-fg placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-[0.9375rem]" />
        </label>
      </div>

      <p class="mt-6 font-mono text-micro text-muted" aria-live="polite">
        {{ t('showing', { n: visible.length }) }}
      </p>

      <LayoutGroup>
        <ul class="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" :initial="false">
            <Motion
              v-for="(certificate, index) in visible"
              :key="certificate.slug"
              as="li"
              layout
              :initial="{ opacity: 0, y: 16, filter: 'blur(6px)' }"
              :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
              :exit="{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }"
              :transition="{
                type: 'spring',
                bounce: 0,
                duration: 0.5,
                delay: Math.min(index, 9) * 0.03,
              }">
              <Motion
                as="button"
                type="button"
                class="block w-full text-left"
                :aria-label="t('view', { name: text(certificate.title) })"
                :while-hover="{ y: -4, rotate: -0.6 }"
                :while-press="{ scale: 0.97 }"
                :transition="{ type: 'spring', bounce: 0.2, duration: 0.4 }"
                @click="selected = certificate">
                <Pass :certificate="certificate" />
              </Motion>
            </Motion>
          </AnimatePresence>
        </ul>
      </LayoutGroup>

      <div
        v-if="!visible.length"
        class="mx-auto mt-16 flex max-w-sm flex-col items-center gap-4 text-center">
        <Icon name="ph:magnifying-glass" class="size-7 text-muted" />
        <p class="text-[1.0625rem]">{{ t('empty', { q: query }) }}</p>
        <p class="text-[0.9375rem] text-muted">{{ t('tip') }}</p>
        <button
          type="button"
          class="h-10 rounded-full bg-surface-2 px-5 text-[0.875rem] font-medium transition-transform active:scale-95"
          @click="reset">
          {{ t('reset') }}
        </button>
      </div>
    </section>

    <CertificateViewer v-model="selected" />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "head": "Certificates",
    "eyebrow": "Certificates",
    "title": "Every course, kept.",
    "lede": "{n} certificates across languages, web and infrastructure. Tap any pass to see the original.",
    "filter": "Filter by track",
    "all": "All",
    "search": "Search certificates",
    "placeholder": "Search, e.g. Linux or Docker",
    "showing": "{n} shown",
    "view": "View certificate: {name}",
    "empty": "No certificate matches “{q}”.",
    "tip": "Try a broader term like JavaScript, Linux or Docker.",
    "reset": "Clear search"
  },
  "pt": {
    "head": "Certificados",
    "eyebrow": "Certificados",
    "title": "Cada curso, guardado.",
    "lede": "{n} certificados entre linguagens, web e infraestrutura. Toque em qualquer passe para ver o original.",
    "filter": "Filtrar por trilha",
    "all": "Todos",
    "search": "Buscar certificados",
    "placeholder": "Buscar, ex.: Linux ou Docker",
    "showing": "{n} exibidos",
    "view": "Ver certificado: {name}",
    "empty": "Nenhum certificado corresponde a “{q}”.",
    "tip": "Tente um termo mais geral, como JavaScript, Linux ou Docker.",
    "reset": "Limpar busca"
  }
}
</i18n>
