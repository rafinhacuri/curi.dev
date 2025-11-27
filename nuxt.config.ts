import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/color-mode', '@nuxtjs/seo', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/icon', 'nuxt-aos'],
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' } } },
  css: ['~/assets/main.css'],
  site: {
    url: 'https://curi.dev.br/',
    name: 'Rafael Curi',
    description: 'Full Stack Developer',
    identity: { type: 'Person' },
  },
  compatibilityDate: '2025-10-14',
  vite: { plugins: [tailwindcss()] },
  i18n: {
    baseUrl: 'https://curi.dev.br/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', name: 'English (US)', file: 'en-US.json' },
      { code: 'pt', language: 'pt-BR', name: 'Português (BR)', file: 'pt-BR.json' },
    ],
    skipSettingLocaleOnNavigate: true,
  },
  linkChecker: { enabled: false },
})
