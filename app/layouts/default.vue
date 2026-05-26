<template>
  <Header />
  <UMain class="min-h-screen bg-zinc-950">
    <div class="pointer-events-none fixed inset-0 -z-10 bg-zinc-950">
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.08)_1px,transparent_1px)] bg-size-[48px_48px]" />
      <div
        class="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#22d3ee,#facc15,#ec4899,#a3e635)]" />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.82)_74%)]" />
    </div>
    <slot />
  </UMain>
  <Footer />
</template>
