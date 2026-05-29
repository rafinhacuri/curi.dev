export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3000,
    host: "http://localhost",
  },
  css: [
    "~/assets/global.sass",
    "primevue/resources/primevue.min.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
  ],
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "nuxt-primevue",
  ],
  i18n: {
    baseUrl: "https://curi.dev.br/",
    defaultLocale: "en",
    langDir: "locales",
    locales: [
      { code: "en", iso: "en-US", name: "English (US)", file: "en.ts" },
      { code: "pt", iso: "pt-BR", name: "Português (BR)", file: "pt.ts" },
    ],
  },
  tailwindcss: { cssPath: false },
  app: {
    head: {
      titleTemplate: "%s | Rafael Curi",
    },
    pageTransition: { name: "fade-down", mode: "out-in" },
  },
});
