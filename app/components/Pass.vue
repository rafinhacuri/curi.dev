<script setup lang="ts">
  import type { Certificate } from '~/data/certificates'
  import { trackOf } from '~/data/certificates'

  const props = defineProps({
    certificate: { type: Object as PropType<Certificate>, required: true },
  })

  const { t } = useI18n({ useScope: 'local' })
  const text = useLocalized()
  const track = computed(() => trackOf(props.certificate))

  const style = computed(() => ({
    background: `linear-gradient(155deg, ${track.value.tint[0]}, ${track.value.tint[1]})`,
  }))
</script>

<template>
  <div
    class="relative flex aspect-[1.586] w-full flex-col justify-between overflow-hidden rounded-[1.25rem] p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.22),0_18px_40px_-18px_rgb(0_0_0/0.55)]"
    :class="track.ink === 'light' ? 'text-white' : 'text-[#1d1d1f]'"
    :style="style">
    <div class="flex items-center justify-between gap-3">
      <span class="flex items-center gap-2">
        <Icon :name="props.certificate.icon" class="size-5" />
        <span class="font-mono text-micro uppercase opacity-70">{{ text(track.label) }}</span>
      </span>
      <Icon name="ph:seal-check" class="size-5 opacity-70" />
    </div>

    <div>
      <p class="text-[1.75rem] leading-none font-semibold tracking-[-0.03em]">
        {{ props.certificate.topic }}
      </p>
      <p class="mt-2 line-clamp-2 text-[0.8125rem] leading-snug opacity-75">
        {{ text(props.certificate.title) }}
      </p>
    </div>

    <div
      class="flex items-center justify-between border-t pt-3 font-mono text-[0.625rem] tracking-wider uppercase opacity-60"
      :class="track.ink === 'light' ? 'border-white/20' : 'border-black/15'">
      <span>{{ t('holder') }}</span>
      <span>Rafael Curi</span>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": { "holder": "Certificate holder" },
  "pt": { "holder": "Titular do certificado" }
}
</i18n>
