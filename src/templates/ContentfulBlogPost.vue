<template>
	<layout>
		<v-container>
			<v-row>
				<v-col cols="8" offset="2">
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