<template>
	<v-app>
		<v-navigation-drawer
			app
			class="d-flex d-md-none"
			v-model="drawer"
			temporary
			right
		>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="accent--text text--accent-4"
				>
					<v-list-item>
						<v-list-item-title>Foo</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>Bar</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>Fizz</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-title>Buzz</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app elevate-on-scroll color="primary darken-1">
			<v-toolbar-title class="d-md-flex align-center">
				<g-link to="/" class="d-flex align-center info--text">
					<span class="font-weight-light">Danijel</span>
					<span class="font-weight-medium">Džankić</span>
				</g-link>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items class="d-none d-md-flex text-capitalize">
				<v-btn text class="text-capitalize info--text" to="/"
					>Home</v-btn
				>
				<v-btn to="/blog" text class="text-capitalize info--text"
					>Blog</v-btn
				>
				<v-btn text class="text-capitalize info--text" to="/cv/">
					<!-- <g-link to="/about-me/">About Me</g-link> -->
					CV
				</v-btn>
				<v-btn
					@click="scrollRouter('#sectionProjects')"
					text
					class="text-capitalize info--text"
				>
					Code
				</v-btn>
				<v-btn text class="text-capitalize info--text" to="/contact">
					Contact
				</v-btn>
			</v-toolbar-items>
			<v-app-bar-nav-icon
				class="d-flex d-md-none"
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
		</v-app-bar>

		<v-main>
			<slot />
		</v-main>

		<Footer />
	</v-app>
</template>

<script>
import Footer from "~/components/layout/Footer.vue";
export default {
	data() {
		return {
			drawer: false,
			group: null,
		};
	},
	components: {
		Footer,
	},
	watch: {
		group() {
			this.drawer = false;
		},
	},
	methods: {
		scrollRouter(element) {
			if (this.$route.path == "/") {
				this.$vuetify.goTo(element);
			} else {
				this.$router.push({ name: "home" }).then(() => {
					this.$vuetify.goTo(element);
				});
			}
		},
	},
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
	font-family: -apple-system, system-ui, Roboto, BlinkMacSystemFont,
		"Segoe UI", "Helvetica Neue", Arial, sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.5;
}
</style>
