<script setup lang="ts">
  import { useScroll } from '@vueuse/core'

  import { highlights, projectHost, projectKind, projects } from '~/data/projects'

  const { t } = useI18n({ useScope: 'local' })
  const text = useLocalized()
  const section = useTemplateRef<HTMLElement>('section')
  const rail = useTemplateRef<HTMLElement>('rail')

  const { arrivedState } = useScroll(rail)

  useStage(section, {
    tone: 'light',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0.5, y: -1.7, scale: 0.4, turn: -0.4 }
          : { x: 0.8, y: -0.86, scale: 0.55, turn: -0.5 },
      }),
  })

  function slide(direction: 1 | -1): void {
    const element = rail.value
    if (!element) return
    const card = element.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 20 : element.clientWidth * 0.8
    element.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  function cardBackground(tint: [string, string]): string {
    return `radial-gradient(120% 80% at 20% 0%, ${tint[0]}, transparent 70%), linear-gradient(180deg, ${tint[1]}, #000 130%)`
  }
</script>

<template>
  <section ref="section" class="relative py-32 md:py-40">
    <div class="mx-auto flex max-w-7xl items-end justify-between gap-6 px-5 sm:px-8">
      <Reveal>
        <p class="font-mono text-micro text-muted uppercase">{{ t('eyebrow') }}</p>
        <h2 class="mt-3 text-display font-semibold font-stretch-112%">{{ t('title') }}</h2>
      </Reveal>
      <NuxtLinkLocale
        to="/projects"
        class="group hidden shrink-0 items-center gap-1.5 pb-2 text-[0.9375rem] font-medium text-accent sm:flex">
        {{ t('all', { n: projects.length }) }}
        <Icon
          name="ph:arrow-right"
          class="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </NuxtLinkLocale>
    </div>

    <div class="mx-auto mt-12 max-w-7xl">
      <ul
        ref="rail"
        class="no-scrollbar flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-6 sm:scroll-px-8 sm:px-8">
        <Reveal
          v-for="(project, index) in highlights"
          :key="project.slug"
          as="li"
          class="w-[82vw] shrink-0 snap-start sm:w-88"
          :delay="index * 0.06"
          :amount="0.2">
          <NuxtLink :to="project.href" external target="_blank" class="block rounded-4xl">
            <Motion
              class="relative flex aspect-4/5 flex-col justify-between overflow-hidden rounded-4xl p-7 text-white"
              :style="{ background: cardBackground(project.tint) }"
              :while-hover="{ scale: 1.015 }"
              :while-press="{ scale: 0.98 }"
              :transition="{ type: 'spring', bounce: 0, duration: 0.4 }">
              <div class="flex items-start justify-between">
                <AppIcon :icon="project.icon" :tint="project.tint" :size="64" />
                <span
                  class="flex size-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                  <Icon name="ph:arrow-up-right" class="size-4" />
                </span>
              </div>
              <div>
                <p class="font-mono text-micro text-white/60 uppercase">
                  {{ t(`kind.${projectKind(project)}`) }} · {{ projectHost(project) }}
                </p>
                <h3 class="mt-3 text-[2rem] leading-none font-semibold tracking-[-0.03em]">
                  {{ project.name }}
                </h3>
                <p class="mt-3 text-[0.9375rem] leading-snug text-white/75">
                  {{ text(project.summary) }}
                </p>
              </div>
            </Motion>
          </NuxtLink>
        </Reveal>
      </ul>
    </div>

    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
      <NuxtLinkLocale
        to="/projects"
        class="flex items-center gap-1.5 text-[0.9375rem] font-medium text-accent sm:invisible">
        {{ t('all', { n: projects.length }) }}
        <Icon name="ph:arrow-right" class="size-4" />
      </NuxtLinkLocale>
      <div class="flex gap-2">
        <button
          type="button"
          class="flex size-11 items-center justify-center rounded-full bg-surface-2 transition-[opacity,transform] duration-200 active:scale-95 disabled:opacity-35"
          :disabled="arrivedState.left"
          :aria-label="t('previous')"
          @click="slide(-1)">
          <Icon name="ph:caret-left" class="size-4" />
        </button>
        <button
          type="button"
          class="flex size-11 items-center justify-center rounded-full bg-surface-2 transition-[opacity,transform] duration-200 active:scale-95 disabled:opacity-35"
          :disabled="arrivedState.right"
          :aria-label="t('next')"
          @click="slide(1)">
          <Icon name="ph:caret-right" class="size-4" />
        </button>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "eyebrow": "Projects",
    "title": "Things I've put online.",
    "all": "All {n} projects",
    "previous": "Previous project",
    "next": "Next project",
    "kind": {
      "live": "Live",
      "private": "Private",
      "source": "Source code",
      "here": "You are here"
    }
  },
  "pt": {
    "eyebrow": "Projetos",
    "title": "Coisas que coloquei no ar.",
    "all": "Todos os {n} projetos",
    "previous": "Projeto anterior",
    "next": "Próximo projeto",
    "kind": {
      "live": "No ar",
      "private": "Privado",
      "source": "Código-fonte",
      "here": "Você está aqui"
    }
  }
}
</i18n>
