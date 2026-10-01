<script setup lang="ts">
  import { socials } from '~/data/content'

  const { t, locale } = useI18n({ useScope: 'local' })
  const now = useNow({ interval: 30_000 })

  const time = computed(() =>
    new Intl.DateTimeFormat(locale.value === 'pt' ? 'pt-BR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo',
    }).format(now.value),
  )

  const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 border-t border-line">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div class="flex flex-col gap-1.5">
        <p class="flex items-center gap-2">
          <span class="live-dot relative size-1.5 rounded-full bg-[#30d158]" />
          <span>
            Rio de Janeiro
            <ClientOnly>
              <span class="font-mono text-micro">· {{ time }}</span>
            </ClientOnly>
          </span>
        </p>
        <p>{{ t('copyright', { year }) }}</p>
      </div>

      <ul class="flex items-center gap-1">
        <li v-for="social in socials" :key="social.name">
          <TooltipRoot :delay-duration="300">
            <TooltipTrigger as-child>
              <a
                :href="social.href"
                :target="social.href.startsWith('http') ? '_blank' : undefined"
                rel="noopener"
                :aria-label="social.name"
                class="flex size-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-surface-2 hover:text-fg">
                <Icon :name="social.icon" class="size-5" />
              </a>
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent
                side="top"
                :side-offset="6"
                class="rounded-lg bg-fg px-2.5 py-1 font-mono text-micro text-bg shadow-float">
                {{ social.handle }}
              </TooltipContent>
            </TooltipPortal>
          </TooltipRoot>
        </li>
      </ul>
    </div>
  </footer>
</template>

<i18n lang="json">
{
  "en": {
    "copyright": "© {year} Rafael Curi. Built with Nuxt, three.js and a lot of coffee."
  },
  "pt": {
    "copyright": "© {year} Rafael Curi. Feito com Nuxt, three.js e muito café."
  }
}
</i18n>
