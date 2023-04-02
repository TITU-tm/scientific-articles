import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/scientific-articles/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				students3222: resolve(__dirname, 'articles/students-3222.html'),


				bezirgenYaylymow: resolve(__dirname, 'articles/3222/bezirgen-yaylymow.html'),
			},
		},
	},
})