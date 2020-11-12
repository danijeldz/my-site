<template>
	<layout>
		<v-container>
			<v-row>
				<v-col
					class="col-xs-12 offset-xs-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"
				>
					<h1>{{ $page.Post.title }}</h1>
					<div v-html="content" />
					<Disqus
						shortname="danijeldzankic"
						:identifier="$page.Post.title"
					/>
				</v-col>
			</v-row>
		</v-container>
	</layout>
</template>

<page-query>
query($id: ID!) {
  Post: contentfulBlogPost(id: $id){
    title
    body
  }
}
</page-query>

<script>
import MarkdownIt from "markdown-it";

export default {
	name: "BlogPost",
	metaInfo() {
		return {
			title: this.$page.Post.title,
		};
	},
	computed: {
		content() {
			const md = new MarkdownIt();
			return md.render(this.$page.Post.body);
		},
	},
};
</script>