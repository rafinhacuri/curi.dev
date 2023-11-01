export default defineNuxtConfig({
	devtools: {enabled: true},
	devServer: {
		port: 3000,
		host: 'http://localhost'
	},
	css: ['~/assets/global.css'],
	modules: ['@nuxt/ui'],
	ui: {
		icons: ['skill-icons', 'logos', 'fa6-brands']
	}
})
