import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/scientific-articles/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),


				bezirgenYaylymow: resolve(__dirname, 'articles/bezirgen-yaylymow3222.html'),
				meylisBabayew: resolve(__dirname, 'articles/meylis-babayew3222.html'),
				mekanSaparow: resolve(__dirname, 'articles/mekan-saparow3222.html'),
			},
		},
	},
})