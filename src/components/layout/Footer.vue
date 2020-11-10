  
<template>
	<v-footer app padless dark class="">
		<v-col cols="12" class="text-center">
			<small>
				© {{ getCurrentYear }}
				<strong>Danijel Džankić</strong>
				- Powered by
				<a href="https://gridsome.org" target="_blank">Gridsome</a>,
				<a href="https://vuetifyjs.com" target="_blank">Vuetify</a>
			</small>
		</v-col>
	</v-footer>
</template>

<script>
export default {
	computed: {
		getCurrentYear() {
			return new Date().getFullYear();
		},
	},
};
</script>