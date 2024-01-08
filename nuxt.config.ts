export default defineNuxtConfig({
	site: {
		url: 'https://curi.dev.br/',
		name: 'Rafael Curi',
		description: 'Full Stack Developer | IT Technician | Persona Fan',
		defaultLocale: 'en',
		identity: {
			type: 'Person',
		},
	},
	devtools: { enabled: true },
	devServer: {
		port: 3000,
		host: 'http://localhost',
	},
	css: ['~/assets/global.sass', 'primevue/resources/primevue.min.css', 'primevue/resources/themes/lara-light-blue/theme.css'],
	modules: ['@nuxt/ui', '@nuxtseo/module', '@vueuse/nuxt', 'nuxt-icon', 'nuxt-swiper', '@nuxtjs/i18n', 'nuxt-primevue'],
	i18n: {
		baseUrl: 'https://curi.dev.br/',
		defaultLocale: 'en',
		langDir: 'locales',
		locales: [
			{ code: 'en', iso: 'en-US', name: 'English (US)', file: 'en.ts' },
			{ code: 'pt', iso: 'pt-BR', name: 'Português (BR)', file: 'pt.ts' },
		],
	},
	linkChecker: {
		enabled: false,
	},
	tailwindcss: { cssPath: false },
	ui: {
		icons: ['skill-icons', 'logos', 'fa6-brands'],
	},
	app: {
		head: {
			titleTemplate: '%s | Rafael Curi',
			meta: [
				{ property: 'og:image', content: '/og.jpg' },
			],
		},
		pageTransition: { name: 'fade-down', mode: 'out-in' },
	},

})
