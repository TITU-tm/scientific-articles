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
				salyhIlmyradowWepamyratOrazmyradow: resolve(__dirname, 'articles/salyh-ilmyradow-Wepamyrat-orazmyradow3222.html'),
				malikgulyyewaAylarBegiyewAydogdy: resolve(__dirname, 'articles/dayanch-rejepow3222.html'),

				orazdurdyyewAhmet: resolve(__dirname, 'articles/orazdurdyyew-ahmet3223.html'),
				yusubowAziz: resolve(__dirname, 'articles/yusubow-aziz3223.html'),
				charyyewMyrat: resolve(__dirname, 'articles/charyyew-myrat3223.html'),
				guwanchShadow: resolve(__dirname, 'articles/guwanch-shadow3223.html'),



				durdylyyewYusupGaryagdyyewOsman: resolve(__dirname, 'articles/durdylyyew-yusup-Garyagdyyew-osman3111.html'),
				gadamGapurowMammetGylyjow: resolve(__dirname, 'articles/gadam-gapurow-Mammet-gylyjow3111.html'),

				seyitdurdyAhmetdurdyyewAtamyratAkmyradow: resolve(__dirname, 'articles/seyitdurdy-ahmetdurdyyew-Atamyrat-akmyradow3111.html'),
				hojaahmetRahimbayewAlisherMahmudow: resolve(__dirname, 'articles/hojaahmet-rahimbayew-Alisher-mahmudow3111.html'),
				baharDowletowaGulnazaYunusowa: resolve(__dirname, 'articles/bahar-dowletowa-gulnaza-yunusowa3111.html'),


				selbiSapargeldiyewaHatyjaRejepowa: resolve(__dirname, 'articles/selbi-sapargeldiyewa-Hatyja-rejepowa3112.html'),

				lukmanOkdemjanowGozelShohradowa: resolve(__dirname, 'articles/lukman-okdemjanow-Gozel-Shohradowa3112.html'),


				gunchajumamyradowaOgulhallyNurmyradowa: resolve(__dirname, 'articles/guncha-jumamyradowa-Ogulhally-nurmyradowa3411.html'),
				sopyyewHalylmuhammetAmannazarowaNurana: resolve(__dirname, 'articles/sopyyew-halylmuhammet-Amannazarowa-nurana3411.html'),
				jumadurdyyewaGulshatBegpoladowaOguljeren: resolve(__dirname, 'articles/jumadurdyyewa-gulshat-Begpoladowa-oguljeren3411.html'),


				altynayAshyrowaGurbanmyratAllamyradow: resolve(__dirname, 'articles/altynay-ashyrowa-Gurbanmyrat-allamyradow.html'),
				dowletgeldiHanowManzuraYermetowa: resolve(__dirname, 'articles/dowletgeldi-hanow-Manzura-yermetowa.html'),
				merdanEmirowSalayewIlhambek: resolve(__dirname, 'articles/merdan-emirow-Salayew-ilhambek.html'),
				merdanGarlyyewMuhammetamanDurdyyew: resolve(__dirname, 'articles/merdan-garlyyew-Muhammetaman-durdyyew.html'),
			},
		},
	},
})