<script setup lang="ts">
  import type { Certificate } from '~/data/certificates'

  const certificate = defineModel<Certificate | null>({ required: true })

  const { t } = useI18n({ useScope: 'local' })
  const text = useLocalized()

  const open = computed({
    get: () => certificate.value !== null,
    set: (value) => {
      if (!value) certificate.value = null
    },
  })

  const isPdf = computed(() => certificate.value?.file?.endsWith('.pdf') ?? false)
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="scrim fixed inset-0 z-60 bg-black/50 backdrop-blur-sm" />
      <DialogContent
        class="sheet fixed inset-x-3 bottom-3 z-60 mx-auto flex max-h-[92dvh] max-w-4xl flex-col overflow-hidden rounded-[1.75rem] bg-surface text-fg shadow-float sm:inset-x-6 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2">
        <template v-if="certificate">
          <header class="flex items-start justify-between gap-4 border-b border-line p-5 sm:p-6">
            <div class="min-w-0">
              <p class="font-mono text-micro text-muted uppercase">{{ certificate.topic }}</p>
              <DialogTitle class="mt-1.5 text-title font-semibold text-balance">
                {{ text(certificate.title) }}
              </DialogTitle>
              <DialogDescription class="sr-only">{{ t('description') }}</DialogDescription>
            </div>
            <DialogClose
              class="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-2 transition-transform active:scale-95"
              :aria-label="t('close')">
              <Icon name="ph:x" class="size-4" />
            </DialogClose>
          </header>

          <div class="min-h-0 flex-1 overflow-auto bg-surface-2/60">
            <iframe
              v-if="certificate.file && isPdf"
              :src="`${certificate.file}#view=FitH&toolbar=0`"
              :title="text(certificate.title)"
              class="block h-[62dvh] w-full border-0" />
            <img
              v-else-if="certificate.file"
              :src="certificate.file"
              :alt="text(certificate.title)"
              class="mx-auto block max-h-[62dvh] w-auto object-contain p-4" />
            <div
              v-else
              class="flex h-48 flex-col items-center justify-center gap-2 p-6 text-center">
              <Icon name="ph:file-image" class="size-6 text-muted" />
              <p class="text-[0.9375rem] text-muted">{{ t('missing') }}</p>
            </div>
          </div>

          <footer v-if="certificate.file" class="flex justify-end gap-2 p-4 sm:p-5">
            <NuxtLink
              :to="certificate.file"
              external
              target="_blank"
              class="inline-flex h-10 items-center gap-2 rounded-full bg-fg px-5 text-[0.875rem] font-medium text-bg transition-transform active:scale-[0.97]">
              {{ t('original') }}
              <Icon name="ph:arrow-up-right" class="size-3.5" />
            </NuxtLink>
          </footer>
        </template>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<i18n lang="json">
{
  "en": {
    "description": "Preview of the certificate file",
    "close": "Close",
    "original": "Open original file",
    "missing": "The file for this module isn't available yet."
  },
  "pt": {
    "description": "Prévia do arquivo do certificado",
    "close": "Fechar",
    "original": "Abrir arquivo original",
    "missing": "O arquivo deste módulo ainda não está disponível."
  }
}
</i18n>
