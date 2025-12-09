<template>
  <div class="pointer-events-none fixed inset-0 -z-10">
    <div class="fixed top-0 left-0 h-64 w-64 rounded-full bg-emerald-500/15 blur-[100px]" />
    <div class="fixed top-32 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-[100px]" />
    <div class="fixed top-150 left-0 h-72 w-72 rounded-full bg-gray-400/6 blur-[100px]" />
  </div>
  <Header />
  <UMain>
    <slot />
  </UMain>
  <Footer />
</template>
