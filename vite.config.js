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
				aynurEyeberdiyewa: resolve(__dirname, 'articles/aynur-eyeberdiyeva3222.html'),
				babajanMowlyanow: resolve(__dirname, 'articles/babajan-mowlyanow3222.html'),
				ejebayBaylyyeva: resolve(__dirname, 'articles/ejebay-baylyyeva3222.html'),
				halnabatNurmyradova: resolve(__dirname, 'articles/halnabat-nurmyradova3222.html'),
				jumayevMeylis: resolve(__dirname, 'articles/jumayev-meylis3222.html'),
				magtymgulySaparow: resolve(__dirname, 'articles/magtymguly-saparow3222.html'),
				mavygulInerova: resolve(__dirname, 'articles/mavygul-inerova3222.html'),
				oguljanReyimbayeva: resolve(__dirname, 'articles/oguljan-reyimbayeva3222.html'),

				rowshenAgalyyew: resolve(__dirname, 'articles/rowshen-agalyyew3222.html'),
				salyhAnnagurbanow: resolve(__dirname, 'articles/salyh-annagurbanow3222.html'),
				tagandurdyTaganow: resolve(__dirname, 'articles/tagandurdy-taganow3222.html'),
				akmuhammetAshyrow: resolve(__dirname, 'articles/akmuhammet-ashyrow3222.html'),
				mommadowHudaynazar: resolve(__dirname, 'articles/hudaynazar-mommadow3222.html'),
				shirmammetAshyrow: resolve(__dirname, 'articles/shirmammet-ashyrow3222.html'),


				orazdurdyyewAhmet: resolve(__dirname, 'articles/orazdurdyyew-ahmet3223.html'),
				yusubowAziz: resolve(__dirname, 'articles/yusubow-aziz3223.html'),
				charyyewMyrat: resolve(__dirname, 'articles/charyyew-myrat3223.html'),
				guwanchShadow: resolve(__dirname, 'articles/guwanch-shadow3223.html'),
				gurbannazarHowmayew: resolve(__dirname, 'articles/gurbannazar-howmayew3223.html'),
			},
		},
	},
})