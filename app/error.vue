<script setup lang="ts">
  import type { NuxtError } from '#app'

  const { t } = useI18n({ useScope: 'local' })
  const localePath = useLocalePath()

  const props = defineProps({
    error: {
      type: Object as PropType<NuxtError>,
      default() {
        return {
          status: 500,
          message: 'Server error',
        }
      },
    },
  })

  const status = computed(() => props.error.status || props.error.statusCode || 500)
  const title = computed(() => (status.value === 404 ? t('title_404') : t('title_default')))
  const message = computed(() => props.error.statusMessage || props.error.message || t('message'))

  useHead({ title: String(status.value) })

  function handleError(): void {
    clearError({ redirect: localePath('/') })
  }
</script>

<template>
  <main
    class="relative min-h-dvh overflow-hidden bg-black px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
    <div
      class="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
    <div
      class="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[48px_48px]" />

    <section
      class="relative mx-auto flex min-h-[calc(100dvh-5rem)] max-w-5xl items-center justify-center">
      <div
        class="w-full border-4 border-zinc-100 bg-black p-5 shadow-[12px_12px_0_#ec4899] sm:p-8 lg:p-10">
        <div
          class="mb-8 flex flex-col gap-4 border-b-4 border-zinc-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p
              class="mb-3 inline-flex border-2 border-zinc-100 bg-zinc-100 px-3 py-1 text-xs font-black tracking-[0.3em] text-black uppercase shadow-[4px_4px_0_#3b82f6]">
              {{ t('label') }} {{ status }}
            </p>
            <h1
              class="max-w-3xl text-5xl font-black tracking-tight text-white uppercase sm:text-7xl lg:text-8xl">
              {{ title }}
            </h1>
          </div>

          <div
            class="flex h-24 w-24 shrink-0 items-center justify-center border-4 border-zinc-100 bg-pink-500 text-4xl font-black text-black shadow-[6px_6px_0_#fff] sm:h-32 sm:w-32 sm:text-6xl">
            {{ status }}
          </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div class="space-y-6">
            <p
              class="max-w-2xl border-l-4 border-pink-500 pl-4 text-lg leading-8 text-zinc-300 sm:text-xl">
              {{ message }}
            </p>

            <div class="flex flex-col gap-3 sm:flex-row">
              <button
                class="border-4 border-zinc-100 bg-zinc-100 px-6 py-3 text-sm font-black tracking-[0.18em] text-black uppercase shadow-[6px_6px_0_#ec4899] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[8px_8px_0_#ec4899]"
                @click="handleError">
                {{ t('back_home') }}
              </button>

              <button
                class="border-4 border-zinc-100 bg-black px-6 py-3 text-sm font-black tracking-[0.18em] text-white uppercase shadow-[6px_6px_0_#3b82f6] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[8px_8px_0_#3b82f6]"
                @click="reloadNuxtApp()">
                {{ t('reload') }}
              </button>
            </div>
          </div>

          <div class="grid gap-3 text-sm font-bold text-zinc-300 uppercase">
            <div class="border-4 border-zinc-100 bg-zinc-950 p-4 shadow-[6px_6px_0_#000]">
              <span class="block text-xs tracking-[0.25em] text-pink-400">{{ t('status') }}</span>
              <span class="mt-2 block text-2xl font-black text-white">{{ status }}</span>
            </div>

            <div class="border-4 border-zinc-100 bg-zinc-950 p-4 shadow-[6px_6px_0_#000]">
              <span class="block text-xs tracking-[0.25em] text-blue-400">{{ t('route') }}</span>
              <span class="mt-2 block break-all text-white">{{ $route.fullPath }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<i18n lang="json">
{
  "en": {
    "label": "Error",
    "title_404": "Page not found",
    "title_default": "Something went wrong",
    "message": "Could not load this page.",
    "back_home": "Back to home",
    "reload": "Reload",
    "status": "Status",
    "route": "Route"
  },
  "pt": {
    "label": "Erro",
    "title_404": "Página não encontrada",
    "title_default": "Algo saiu do controle",
    "message": "Não foi possível carregar essa página.",
    "back_home": "Voltar para o início",
    "reload": "Recarregar",
    "status": "Status",
    "route": "Rota"
  }
}
</i18n>
