<script setup lang="ts">
  const props = defineProps({
    large: { type: Boolean, default: false },
  })

  const emit = defineEmits<{ switched: [] }>()

  const { t, locale } = useI18n({ useScope: 'local' })
  const switchLocalePath = useSwitchLocalePath()
  const group = useId()

  function pathFor(code: 'en' | 'pt'): string {
    return switchLocalePath(code).replace(/#.*$/u, '')
  }

  const languages = [
    { code: 'en', short: 'EN', name: 'English', html: 'en-US' },
    { code: 'pt', short: 'PT', name: 'Português', html: 'pt-BR' },
  ] as const
</script>

<template>
  <nav :aria-label="t('label')">
    <ul
      class="relative flex rounded-full bg-surface-2 p-0.5"
      :class="props.large ? 'w-full' : 'w-fit'">
      <li v-for="language in languages" :key="language.code" :class="{ 'flex-1': props.large }">
        <NuxtLink
          :to="pathFor(language.code)"
          :lang="language.html"
          :hreflang="language.html"
          :aria-current="locale === language.code ? 'true' : undefined"
          :aria-label="language.name"
          class="relative flex items-center justify-center rounded-full font-medium transition-colors duration-200"
          :class="[
            props.large ? 'h-11 gap-2 text-[0.9375rem]' : 'h-7 px-2.5 text-[0.75rem] tracking-wide',
            locale === language.code ? 'text-fg' : 'text-muted hover:text-fg',
          ]"
          @click="emit('switched')">
          <Motion
            v-if="locale === language.code"
            :layout-id="`language-${group}`"
            class="absolute inset-0 rounded-full bg-surface shadow-[0_1px_3px_rgb(0_0_0/0.14)]"
            :transition="{ type: 'spring', bounce: 0.15, duration: 0.45 }" />
          <span class="relative">{{ props.large ? language.name : language.short }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<i18n lang="json">
{
  "en": { "label": "Language" },
  "pt": { "label": "Idioma" }
}
</i18n>
