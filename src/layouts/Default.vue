<template>
	<v-app>
		<v-navigation-drawer
			app
			class="d-flex d-md-none"
			v-model="drawer"
			temporary
			color="info"
			right
		>
			<v-list nav dense>
				<v-list-item to="/">
					<v-list-item-content>
						<v-list-item-title
							class="text-center"
							style="font-size: 1.5em; line-height: inherit"
						>
							<span class="font-weight-light yanone heading"
								>Danijel
							</span>
							<span class="font-weight-medium yanone"
								>Džankić</span
							>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item-group
					v-model="group"
					active-class="accent--text text--accent-4"
				>
					<v-list-item to="/">
						<v-list-item-icon>
							<v-icon> mdi-home-variant-outline </v-icon>
						</v-list-item-icon>
						<v-list-item-title> Home </v-list-item-title>
					</v-list-item>

					<v-list-item to="/blog/">
						<v-list-item-icon>
							<v-icon> mdi-post-outline </v-icon>
						</v-list-item-icon>
						<v-list-item-title> Blog </v-list-item-title>
					</v-list-item>

					<v-list-item to="/cv/">
						<v-list-item-icon>
							<v-icon> mdi-file-account-outline </v-icon>
						</v-list-item-icon>
						<v-list-item-title> CV </v-list-item-title>
					</v-list-item>

					<v-list-item @click="scrollRouter('#sectionProjects')">
						<v-list-item-icon>
							<v-icon> mdi-apps </v-icon>
						</v-list-item-icon>
						<v-list-item-title> Projects </v-list-item-title>
					</v-list-item>
					<v-list-item to="/contact/">
						<v-list-item-icon>
							<v-icon> mdi-human-greeting </v-icon>
						</v-list-item-icon>
						<v-list-item-title> Contact </v-list-item-title>
					</v-list-item>
				</v-list-item-group>
				<v-divider></v-divider>
				<v-list-item-group class="d-flex flex-row justify-center my-4">
					<v-btn
						fab
						small
						color="grey darken-3"
						href="https://github.com/danijeldz/"
						class="mx-3"
						target="_blank"
					>
						<v-icon color="accent">mdi-github</v-icon>
					</v-btn>
					<v-btn
						fab
						small
						color="grey darken-3"
						href="https://www.linkedin.com/in/danijeldzankic/"
						class="mx-3"
						target="_blank"
					>
						<v-icon color="blue lighten-1">mdi-linkedin</v-icon>
					</v-btn>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app elevate-on-scroll color="primary darken">
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
				class="d-flex d-md-none info--text"
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
		</v-app-bar>

		<v-main class="info">
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
	font-family: -apple-system, "Helvetica", "Segoe UI", "Arial", sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.5;
}
</style>
