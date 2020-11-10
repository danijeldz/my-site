// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import DefaultLayout from "~/layouts/Default.vue"
import "~/assets/styles.css"
import VueDisqus from "vue-disqus"

export default function(Vue, { router, head, isClient, appOptions }) {
	head.link.push({
		rel: "stylesheet",
		href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
	})

	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Roboto&family=Yanone+Kaffeesatz:wght@200;300;400;500;600;700&display=swap",
	})

	const opts = {} //opts includes, vuetify themes, icons, etc.
	Vue.use(Vuetify)
	Vue.use(VueDisqus)

	appOptions.vuetify = new Vuetify(opts)

	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout)
}
