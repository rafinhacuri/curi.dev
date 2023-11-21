export default defineNuxtConfig({
	site: {
		url: 'https://curi.dev.br/',
		name: 'Rafael Curi',
		description: 'Full Stack Developer | IT Technician | Persona Fan',
		defaultLocale: 'pt-br',

	},
	devtools: { enabled: true },
	devServer: {
		port: 3000,
		host: 'http://localhost',
	},
	css: ['~/assets/global.sass'],
	modules: ['@nuxt/ui', '@vueuse/nuxt', 'nuxt-icon', '@nuxtseo/module'],
	ui: {
		icons: ['skill-icons', 'logos', 'fa6-brands'],
	},
	app: {
		pageTransition: { name: 'fade-down', mode: 'out-in' },
	},

})
