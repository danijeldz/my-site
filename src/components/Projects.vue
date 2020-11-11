<template>
	<section id="sectionProjects" class="home_section info--text primary">
		<v-container>
			<v-row>
				<v-col cols="12" class="text-center">
					<h1>My Projects</h1>
				</v-col>
				<v-col
					cols="12"
					offset="0"
					sm="12"
					sm-offset="0"
					md="6"
					offset-md="3"
				>
					<v-card
						color="info"
						v-for="project in $static.project.edges"
						:key="project.node.id"
						class="mb-4 d-flex d-flex-row"
					>
						<v-avatar size="100" class="ma-3" tile>
							<v-img
								:src="project.node.coverImage.file.url"
								:alt="project.node.coverImage.title"
								:title="project.node.coverImage.description"
							></v-img>
						</v-avatar>
						<div
							class="d-flex justify-space-between flex-column flex-grow-1"
						>
							<!-- <v-card-title
								class="subtitle-1"
								v-text="project.title"
							></v-card-title> -->
							<div
								v-text="project.node.title"
								class="subtitle-1 ml-2 mt-2"
							></div>

							<div class="ml-2">
								<p
									v-text="project.node.description"
									class="mb-0"
								></p>
								<v-chip
									x-small
									outlined
									class="mr-1"
									v-for="(tag, index) in project.node.stack"
									:key="index"
									>{{ tag }}
								</v-chip>
							</div>

							<v-card-actions class="justify-end mb-1 mr-1">
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
									<v-icon small class="mr-1"
										>mdi-github</v-icon
									>
									Repo</v-btn
								>
							</v-card-actions>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					title: "Project 1",
					description: "Lorem",
					stack: ["Vue.js", "FIrebase", "Vuetify"],
					demo: "https://www.danijeldzankic.com",
					repo: "https://www.github.com",
					coverImage: "https://via.placeholder.com/150",
				},
				{
					title: "Project 2",
					description: "Lorem",
					stack: ["Vue.js", "FIrebase", "Vuetify"],
					demo: "https://www.danijeldzankic.com",
					repo: "https://www.github.com",
					coverImage: "https://via.placeholder.com/150",
				},
				{
					title: "Project 3",
					description: "Lorem",
					stack: ["Vue.js", "FIrebase", "Vuetify"],
					demo: "https://www.danijeldzankic.com",
					repo: "https://www.github.com",
					coverImage: "https://via.placeholder.com/150",
				},
				{
					title: "Project 4",
					description: "Lorem",
					stack: ["Vue.js", "FIrebase", "Vuetify"],
					demo: "https://www.danijeldzankic.com",
					repo: "https://www.github.com",
					coverImage: "https://via.placeholder.com/150",
				},
			],
		};
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