<script setup lang="ts">
  const props = defineProps({
    icon: { type: String, required: true },
    tint: { type: Array as PropType<string[]>, required: true },
    size: { type: Number, default: 56 },
  })

  const style = computed(() => ({
    width: `${props.size}px`,
    height: `${props.size}px`,
    borderRadius: `${props.size * 0.2237}px`,
    background: `linear-gradient(160deg, ${props.tint.join(', ')})`,
  }))
</script>

<template>
  <span
    class="relative flex shrink-0 items-center justify-center text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_6px_16px_-6px_rgb(0_0_0/0.35)]"
    :style="style"
    aria-hidden="true">
    <Icon
      :name="props.icon"
      :style="{ width: `${props.size * 0.5}px`, height: `${props.size * 0.5}px` }" />
  </span>
</template>
