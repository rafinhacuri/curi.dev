export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: {
		port: 3000,
		host: 'http://localhost',
	},
	css: ['~/assets/global.sass'],
	modules: ['@nuxt/ui', '@vueuse/nuxt'],
	ui: {
		icons: ['skill-icons', 'logos', 'fa6-brands'],
	},
	app: {
		pageTransition: { name: 'slide-right', mode: 'out-in' },
	},
})
