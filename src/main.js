// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from "vuetify/lib/framework"
import "vuetify/dist/vuetify.min.css"
import DefaultLayout from "~/layouts/Default.vue"

import "~/assets/styles.css"
import VueDisqus from "vue-disqus"

export default function(Vue, { appOptions, head }) {
	head.link.push({
		rel: "stylesheet",
		href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
	})

	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
	})

	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Roboto&family=Yanone+Kaffeesatz:wght@200;300;400;500;600;700&display=swap",
	})

	const opts = {
		iconfont: "md",
		theme: {
			themes: {
				light: {
					primary: "#26262E", // dark blue
					secondary: "#92897A", // light brown
					accent: "#8CA4A5", // semi grey
					success: "#2E8E7A", // green
					info: "#EEF0ED", // semiwhite
					warning: "#FB8C00",
					error: "#FF5252",
					anchor: "#2db696",
				},
			},
		},
	} //opts includes, vuetify themes, icons, etc.
	Vue.use(Vuetify)
	appOptions.vuetify = new Vuetify(opts)

	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout)
	Vue.use(VueDisqus)
}
