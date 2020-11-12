<template>
	<Layout>
		<section id="sectionCV">
			<v-container>
				<v-row>
					<v-col
						class="col-xs-12 offset-xs-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"
					>
						<h1>{{ this.$page.person.name }}</h1>
						<p class="subtitle-1">{{ this.$page.person.title }}</p>
						<div v-html="content"></div>
					</v-col>
				</v-row>
			</v-container>
		</section>
	</Layout>
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
	data() {
		return {};
	},
	metaInfo() {
		return {
			title: this.name,
		};
	},
	computed: {
		content() {
			const md = new MarkdownIt();
			return md.render(this.$page.person.shortBio);
		},
	},
};
</script>

<page-query>
query{
  person: contentfulPerson(id: "5mL66kkPCVvPCkRaC6Axcf") {
    
        id
        title
        name
        shortBio
        email
        phone
        github
        
        discord
        image {
          title
          description
          file {
            url
          }
 
    }
  }
}
</page-query>

<style>
#sectionCV ul {
	padding-bottom: 1em;
}
</style>