<template>
  <!-- eslint-disable-next-line vue/no-restricted-static-attribute -->
  <div class="min-h-[calc(100vh-158px)]" style="background: radial-gradient(circle at top left, rgba(50,0,100,1) 0%, rgba(50,0,100,0.5) 35%, rgba(50,0,100,0) 80%);">
    <Nav />
    <main class="min-h-[calc(100vh-193px)]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
