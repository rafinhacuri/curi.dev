<script setup lang="ts">
  import type { Project } from '~/data/projects'
  import { projectHost, projectKind } from '~/data/projects'

  const props = defineProps({
    project: { type: Object as PropType<Project>, required: true },
  })

  const { t } = useI18n({ useScope: 'local' })
  const text = useLocalized()
  const kind = computed(() => projectKind(props.project))
  const external = computed(() => kind.value !== 'here')

  const actionClass =
    'flex h-8 shrink-0 items-center rounded-full bg-surface-2 px-4 text-[0.8125rem] font-semibold text-accent transition-[transform,background-color] duration-150 hover:bg-accent hover:text-accent-ink active:scale-95'
</script>

<template>
  <article class="flex items-center gap-4 py-5">
    <AppIcon :icon="props.project.icon" :tint="props.project.tint" :size="60" />

    <div class="min-w-0 flex-1">
      <h3 class="truncate text-[1.0625rem] font-semibold tracking-[-0.01em]">
        {{ props.project.name }}
      </h3>
      <p class="mt-0.5 line-clamp-2 text-[0.875rem] leading-snug text-muted">
        {{ text(props.project.summary) }}
      </p>
      <div class="mt-2 flex items-center gap-2">
        <span class="truncate font-mono text-micro text-muted/80">
          {{ projectHost(props.project) }}
        </span>
        <span v-if="props.project.contributors" class="flex shrink-0 -space-x-1.5">
          <TooltipRoot
            v-for="person in props.project.contributors"
            :key="person.name"
            :delay-duration="200">
            <TooltipTrigger as-child>
              <NuxtLink
                :to="person.href"
                external
                target="_blank"
                :aria-label="t('with', { name: person.name })"
                class="relative block size-5 overflow-hidden rounded-full ring-2 ring-bg transition-transform duration-200 hover:z-10 hover:scale-110">
                <img
                  :src="person.avatar"
                  :alt="person.name"
                  class="size-full object-cover"
                  loading="lazy" />
              </NuxtLink>
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent
                side="top"
                :side-offset="6"
                class="z-60 rounded-lg bg-fg px-2.5 py-1 text-[0.75rem] text-bg shadow-float">
                {{ t('with', { name: person.name }) }}
              </TooltipContent>
            </TooltipPortal>
          </TooltipRoot>
        </span>
      </div>
    </div>

    <NuxtLink
      v-if="external"
      :to="props.project.href"
      external
      target="_blank"
      :class="actionClass"
      :aria-label="t('open', { name: props.project.name })">
      {{ t(`action.${kind}`) }}
    </NuxtLink>
    <NuxtLinkLocale
      v-else
      :to="props.project.href"
      :class="actionClass"
      :aria-label="t('open', { name: props.project.name })">
      {{ t(`action.${kind}`) }}
    </NuxtLinkLocale>
  </article>
</template>

<i18n lang="json">
{
  "en": {
    "with": "Built with {name}",
    "open": "Open {name}",
    "action": { "live": "Open", "video": "Watch", "source": "Code", "here": "Here" }
  },
  "pt": {
    "with": "Feito com {name}",
    "open": "Abrir {name}",
    "action": { "live": "Abrir", "video": "Assistir", "source": "Código", "here": "Aqui" }
  }
}
</i18n>
