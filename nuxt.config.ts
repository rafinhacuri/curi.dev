import process from 'node:process'

import tailwindcss from '@tailwindcss/vite'

const { DEV_URL, DEV_KEY, DEV_CERT } = process.env

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-security',
    '@vercel/analytics',
    '@vercel/speed-insights',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/fonts',
    '@nuxt/icon',
    'reka-ui/nuxt',
    'motion-v/nuxt',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      templateParams: { separator: '•' },
      meta: [{ name: 'theme-color', content: '#f5f5f7' }],
    },
  },
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
  compatibilityDate: '2026-09-30',
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'three',
        'three/addons/environments/RoomEnvironment.js',
        'three/addons/geometries/RoundedBoxGeometry.js',
      ],
    },
  },
  fonts: {
    families: [
      {
        name: 'Mona Sans',
        provider: 'google',
        weights: ['200 900'],
        styles: ['normal'],
        subsets: ['latin', 'latin-ext'],
        providerOptions: { google: { experimental: { variableAxis: { wdth: [['75', '125']] } } } },
      },
      {
        name: 'Martian Mono',
        provider: 'google',
        weights: ['300 600'],
        styles: ['normal'],
        subsets: ['latin'],
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', name: 'English (US)' },
      { code: 'pt', language: 'pt-BR', name: 'Português (BR)' },
    ],
  },
  icon: {
    serverBundle: { collections: ['ph', 'simple-icons'] },
  },
  linkChecker: { enabled: false },
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'blob:', 'https:'],
        'script-src': [
          "'self'",
          'https:',
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          "'wasm-unsafe-eval'",
        ],
        'worker-src': ["'self'", 'blob:'],
        'frame-src': ["'self'"],
        'object-src': ["'self'"],
      },
      crossOriginEmbedderPolicy: false,
    },
  },
})
