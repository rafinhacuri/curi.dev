<script setup lang="ts" generic="T extends string">
  interface SegmentedOption<V extends string> {
    value: V
    label: string
    count?: number
  }

  const props = defineProps({
    options: { type: Array as PropType<SegmentedOption<T>[]>, required: true },
    label: { type: String, required: true },
  })
  const model = defineModel<T>({ required: true })
  const group = useId()

  function select(value: unknown): void {
    if (typeof value === 'string' && value) model.value = value as T
  }
</script>

<template>
  <ToggleGroupRoot
    type="single"
    :model-value="model"
    :aria-label="props.label"
    class="flex w-full rounded-full bg-surface-2 p-1 sm:inline-flex sm:w-auto"
    @update:model-value="select">
    <ToggleGroupItem
      v-for="option in props.options"
      :key="option.value"
      :value="option.value"
      class="relative h-9 flex-auto rounded-full px-1.5 text-[0.75rem] font-medium whitespace-nowrap text-muted transition-colors duration-200 data-[state=on]:text-fg sm:flex-none sm:px-4 sm:text-[0.8125rem]">
      <Motion
        v-if="model === option.value"
        :layout-id="`segment-${group}`"
        class="absolute inset-0 rounded-full bg-surface shadow-[0_1px_3px_rgb(0_0_0/0.12)]"
        :transition="{ type: 'spring', bounce: 0.15, duration: 0.45 }" />
      <span class="relative flex items-center justify-center gap-1.5">
        {{ option.label }}
        <span
          v-if="option.count !== undefined"
          class="hidden font-mono text-micro opacity-60 sm:inline">
          {{ option.count }}
        </span>
      </span>
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>
