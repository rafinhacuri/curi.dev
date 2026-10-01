<script setup lang="ts">
  const props = defineProps({
    as: { type: String as PropType<'div' | 'li'>, default: 'div' },
    delay: { type: Number, default: 0 },
    y: { type: Number, default: 28 },
    amount: { type: Number, default: 0.35 },
  })
</script>

<template>
  <Motion
    :as="props.as"
    :initial="{ opacity: 0, y: props.y, filter: 'blur(10px)' }"
    :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
    :in-view-options="{ once: true, amount: props.amount }"
    :transition="{ type: 'spring', bounce: 0, duration: 0.9, delay: props.delay }">
    <slot />
  </Motion>
</template>
