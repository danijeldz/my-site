  
<template>
	<v-footer
		app
		padless
		absolute
		color="primary darken-1"
		class="info--text py-2"
	>
		<v-row>
			<v-col cols="12" class="text-center text--info">
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
				<v-btn
					fab
					small
					color="grey darken-3"
					@click="scrollRouter('#sectionContact')"
					class="mx-3"
				>
					<v-icon color="info">mdi-message-outline</v-icon>
				</v-btn>
			</v-col>
			<v-col cols="12" class="text-center">
				<small>
					© {{ getCurrentYear }}
					<strong>Danijel Džankić</strong>
					- Powered by
					<a href="https://gridsome.org" target="_blank">Gridsome</a>,
					<a href="https://www.netlify.com" target="_blank"
						>Netlify</a
					>
					&
					<a href="https://www.contentful.com/" target="_blank"
						>Contentful</a
					>
				</small>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script>
export default {
	computed: {
		getCurrentYear() {
			return new Date().getFullYear();
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