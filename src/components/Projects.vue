<template>
	<section id="sectionProjects">
		<v-container>
			<v-row>
				<v-col cols="12" class="text-center">
					<h1>My Projects</h1>
				</v-col>
				<v-col sm="12" sm-offset="0" md="6" offset-md="3">
					<v-card
						color="grey lighten-5"
						v-for="(project, index) in projects"
						:key="index"
						class="mb-4 d-flex d-flex-row"
					>
						<v-avatar size="100" class="ma-3" tile>
							<v-img :src="project.coverImage"></v-img>
						</v-avatar>
						<div
							class="d-flex justify-space-between flex-column flex-grow-1"
						>
							<!-- <v-card-title
								class="subtitle-1"
								v-text="project.title"
							></v-card-title> -->
							<div
								v-text="project.title"
								class="subtitle-1 ml-2 mt-2"
							></div>

							<div class="ml-2">
								<p
									v-text="project.description"
									class="mb-0"
								></p>
								<v-chip
									x-small
									outlined
									class="mr-1"
									v-for="(tag, index) in project.stack"
									:key="index"
									>{{ tag }}
								</v-chip>
							</div>

							<v-card-actions class="justify-end mb-1 mr-1">
								<v-btn
									x-small
									depressed
									elevation="1"
									:href="project.demo"
									target="_blank"
									color="teal lighten-2"
								>
									<v-icon small class="mr-1">mdi-play</v-icon>
									Demo</v-btn
								>
								<v-btn
									color="blue-grey darken-1"
									class="white--text"
									x-small
									:href="project.repo"
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
	border: 1px solid yellow;
}
</style>