<template>
	<section id="sectionProjects" class="home_section info--text primary">
		<v-container>
			<v-row>
				<v-col cols="12" class="text-center">
					<h1>My Projects</h1>
				</v-col>
				<v-col
					class="col-xs-12 offset-xs-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"
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
		return {};
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