import process from 'node:process'

const { DEV_URL, DEV_KEY, DEV_CERT } = process.env

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-aos',
    'nuxt-security',
  ],
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' } } },
  css: ['~/assets/main.css'],
  site: {
    url: 'https://curi.dev.br/',
    name: 'Rafael Curi',
    description: 'Full Stack Developer',
    identity: { type: 'Person' },
  },
  devServer: {
    host: DEV_URL,
    https: DEV_KEY && DEV_CERT ? { key: DEV_KEY, cert: DEV_CERT } : undefined,
  },
  compatibilityDate: '2025-10-14',
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', name: 'English (US)', file: 'en-US.json' },
      { code: 'pt_br', language: 'pt-BR', name: 'Português (BR)', file: 'pt-BR.json' },
    ],
  },
  linkChecker: { enabled: false },
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'blob:'],
        'script-src': [
          "'self'",
          'https:',
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          "'wasm-unsafe-eval'",
        ],
        'worker-src': ["'self'", 'blob:'],
      },
    },
  },
})
