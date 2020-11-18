<template>
	<section id="sectionProjects" class="home_section info--text primary">
		<v-container>
			<v-row>
				<v-col cols="12" class="text-center">
					<h1>Coding playground</h1>
					<p>Here are some of my recent coding experiments.</p>
				</v-col>
			</v-row>
			<v-row class="justify-center flex-wrap">
				<v-col
					v-for="project in $static.project.edges"
					:key="project.node.id"
					cols="10"
					class="col-sm-6 col-md-4 col-lg-3 col-xl-2"
				>
					<v-card
						color="info"
						height="100%"
						max-height="400"
						class="mb-4 d-flex flex-column"
					>
						<v-img
							:src="project.node.coverImage.file.url"
							:alt="project.node.coverImage.title"
							:title="project.node.coverImage.description"
							max-height="175"
							class="grey darken-4"
						></v-img>

						<v-card-title>
							<div v-text="project.node.title" class=""></div>
						</v-card-title>

						<v-card-subtitle>
							<v-chip
								x-small
								outlined
								class="mr-1"
								v-for="(tag, index) in project.node.stack"
								:key="index"
								>{{ tag }}
							</v-chip>
						</v-card-subtitle>

						<v-card-text class="mb-0 pb-0">
							<div
								v-html="content(project.node.description)"
								class="mb-0 caption"
							></div>
						</v-card-text>

						<v-card-actions class="mt-auto pt-0 justify-end">
							<v-btn
								x-small
								depressed
								elevation="1"
								:href="project.node.demo"
								target="_blank"
								color="success"
							>
								<v-icon small class="mr-1">mdi-play</v-icon>
								Demo</v-btn
							>
							<v-btn
								color="blue-grey darken-3"
								class="white--text"
								x-small
								:href="project.node.repo"
								target="_blank"
							>
								<v-icon small class="mr-1">mdi-github</v-icon>
								Repo</v-btn
							>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
import MarkdownIt from "markdown-it";
export default {
	data() {
		return {};
	},
	methods: {
		content(markdown) {
			const md = new MarkdownIt();
			return md.render(markdown);
		},
	},
};
</script>

<style>
#sectionProjects {
	min-height: 50ch;
}
</style>

<static-query>
query {
  project: allContentfulProject {
    edges {
      node {
        id
        title
        description
        demo
        repo
		stack
        coverImage {
          title
          description
          file {
            url
          }
        }
      }
    }
  }
}
</static-query>