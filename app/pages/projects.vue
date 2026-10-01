<script setup lang="ts">
  import { projects } from '~/data/projects'

  type Filter = 'all' | 'solo' | 'team'

  const { t } = useI18n({ useScope: 'local' })
  const list = useTemplateRef<HTMLElement>('list')
  const filter = ref<Filter>('all')

  useHead({ title: t('head') })
  useSeoMeta({ description: t('lede') })
  defineOgImage('Model.takumi', { title: t('title'), description: t('lede') })

  useStage(list, {
    tone: 'light',
    state: ({ mobile }) =>
      scene({
        bot: mobile
          ? { x: 0.5, y: -1.7, scale: 0.4, turn: -0.4 }
          : { x: 0.86, y: -0.88, scale: 0.5, turn: -0.6 },
      }),
  })

  const solo = projects.filter((project) => !project.team)
  const team = projects.filter((project) => project.team)

  const options = computed(() => [
    { value: 'all' as const, label: t('all'), count: projects.length },
    { value: 'solo' as const, label: t('solo'), count: solo.length },
    { value: 'team' as const, label: t('team'), count: team.length },
  ])

  const visible = computed(() => {
    if (filter.value === 'solo') return solo
    if (filter.value === 'team') return team
    return projects
  })
</script>

<template>
  <div>
    <PageIntro :eyebrow="t('eyebrow')" :title="t('title')" :lede="t('lede')" />

    <section ref="list" class="mx-auto min-h-dvh max-w-7xl px-5 pb-32 sm:px-8">
      <div class="sticky top-12 z-20 -mx-5 flex items-center glass px-5 py-3 sm:-mx-8 sm:px-8">
        <Segmented v-model="filter" :options="options" :label="t('filter')" />
      </div>

      <LayoutGroup>
        <ul class="mt-4 grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" :initial="false">
            <Motion
              v-for="(project, index) in visible"
              :key="project.slug"
              as="li"
              layout
              class="border-b border-line"
              :initial="{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }"
              :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
              :exit="{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }"
              :transition="{
                type: 'spring',
                bounce: 0,
                duration: 0.45,
                delay: Math.min(index, 8) * 0.025,
              }">
              <ProjectRow :project="project" />
            </Motion>
          </AnimatePresence>
        </ul>
      </LayoutGroup>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "head": "Projects",
    "eyebrow": "Projects",
    "title": "Everything I've put online.",
    "lede": "Solo work and team work, from a DNS panel to graduate enrollment systems. Most of it is live; some only survives as a video demo.",
    "filter": "Filter projects",
    "all": "All",
    "solo": "Solo",
    "team": "With a team"
  },
  "pt": {
    "head": "Projetos",
    "eyebrow": "Projetos",
    "title": "Tudo que coloquei no ar.",
    "lede": "Trabalhos solo e em equipe, de um painel de DNS a sistemas de inscrição de pós-graduação. A maioria está no ar; alguns sobrevivem só como demo em vídeo.",
    "filter": "Filtrar projetos",
    "all": "Todos",
    "solo": "Solo",
    "team": "Em equipe"
  }
}
</i18n>
