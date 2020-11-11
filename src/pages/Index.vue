<template>
	<Layout>
		<About />
		<Projects />
		<Contact />
	</Layout>
</template>

<script>
import About from "~/components/About.vue";
import Projects from "~/components/Projects.vue";
import Contact from "~/components/Contact.vue";

export default {
	components: {
		About,
		Projects,
		Contact,
	},
	metaInfo: {
		title: "Danijel Džankić, personal website",
	},
};
</script>

<style>
</style>
