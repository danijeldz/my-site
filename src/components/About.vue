<template>
	<section id="sectionAbout" class="home_section info">
		<v-container>
			<v-row>
				<v-col cols="12" class="text-center my-2">
					<h1>Who am I?</h1>
				</v-col>
				<v-col
					class="col-xs-12 offset-xs-0 col-lg-10 offset-lg-1 col-xl-6 offset-xl-3"
				>
					<v-card style="height: 100%" class="primary info--text">
						<v-row class="px-3">
							<v-col cols="12" lg="4" md="4" sm="12">
								<v-card class="text-center secondary">
									<div
										class="d-flex flex-column flex-sm-row flex-md-column"
									>
										<div
											class="flex-grow-0 pa-sm-4 pa-md-0"
										>
											<g-image
												src="~/assets/images/danijel.png"
												width="175"
												class="rounded-circle mt-4"
												style="opacity: 0.7"
												alt="Danijel's profile image"
												title="Danijel Džankić"
											/>
										</div>
										<div
											class="d-flex flex-column flex-grow-1 pa-sm-4 pa-md-0"
										>
											<v-card-title
												class="justify-center flex-column flex-sm-row flex-md-row flex-lg-column"
											>
												<span class="font-weight-bold"
													>Danijel Džankić&nbsp;
												</span>
												<span>Frontend Developer</span>
											</v-card-title>
											<v-card-subtitle
												><v-icon>mdi-map-marker</v-icon>
												Lausanne,
												Switzerland</v-card-subtitle
											>
											<v-divider></v-divider>
											<v-card-text
												class="text-center pb-1"
											>
												Get in touch:
											</v-card-text>
											<v-card-actions
												class="text-center justify-center pb-5"
											>
												<v-btn
													fab
													small
													color="grey darken-3"
													href="https://www.linkedin.com/in/danijeldzankic/"
													target="_blank"
												>
													<v-icon
														color="blue lighten-1"
														>mdi-linkedin</v-icon
													>
												</v-btn>
												<v-btn
													fab
													small
													color="grey darken-3"
													href="https://github.com/danijeldz/"
													target="_blank"
												>
													<v-icon color="accent"
														>mdi-github</v-icon
													>
												</v-btn>
												<v-btn
													fab
													small
													color="grey darken-3"
													@click="
														$vuetify.goTo(
															'#sectionContact'
														)
													"
												>
													<v-icon color="info"
														>mdi-message-outline</v-icon
													>
												</v-btn>
											</v-card-actions>
										</div>
									</div>
								</v-card>
								<!-- <div
						v-for="asset in $static.assets.edges"
						:key="asset.node.id"
					>
						{{ asset.node.title }} -- {{ asset.node.file.url }}
						<g-image :src="renderThumbnail(asset.node.file.url)" />
					</div> -->
							</v-col>
							<v-col
								cols="12"
								lg="8"
								md="8"
								sm="12"
								class="pl-md-4"
							>
								<v-row>
									<v-col cols="12" sm="6" md="6" lg="6">
										<v-card-title>Experience</v-card-title>
										<v-divider color="white"></v-divider>
										<v-list-item>
											<v-list-item-content
												class="info--text"
											>
												<div
													class="subtitle-2 font-weight-bold"
												>
													BUTLERS GmbH
												</div>
												<div class="body-2">
													Frontend Dev -
													<span class="caption"
														>10/2017-02/2020</span
													>
												</div>
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content
												class="info--text"
											>
												<div
													class="subtitle-2 font-weight-bold"
												>
													THE KASE GERMANY GmbH
												</div>
												<div class="body-2">
													Web Dev -
													<span class="caption"
														>11/2014-05/2017</span
													>
												</div>
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content
												class="info--text"
											>
												<div
													class="subtitle-2 font-weight-bold"
												>
													Printheos @ Technabit
												</div>
												<div class="body-2">
													Web Dev -
													<span class="caption"
														>10/2012-10/2014</span
													>
												</div>
											</v-list-item-content>
										</v-list-item>
										<v-list-item>
											<v-list-item-content
												class="info--text"
											>
												<div
													class="subtitle-2 font-weight-bold"
												>
													Omega software d.o.o.
												</div>
												<div class="body-2">
													Junior Consultant -
													<span class="caption"
														>06/2011-08/2012</span
													>
												</div>
											</v-list-item-content>
										</v-list-item>
									</v-col>
									<v-col cols="12" sm="6" md="6" lg="6">
										<div>
											<v-card-title
												>Tech stack</v-card-title
											>
											<v-divider
												color="white"
											></v-divider>
											<v-card-text
												>Vue.js, ES6, HTML5, CSS3,
												GraphQL, Firebase, Vuetify,
												MaterializeCSS, SFCC, Wordpress,
												Gridsome, Contentful
												CMS</v-card-text
											>
										</div>
										<div>
											<v-card-title
												>Education</v-card-title
											>
											<v-divider
												color="white"
											></v-divider>
											<v-list-item>
												<v-list-item-content
													class="info--text"
												>
													<div
														class="subtitle-2 font-weight-bold"
													>
														University of Zagreb
													</div>
													<div class="body-2">
														Master in Informatics
													</div>
												</v-list-item-content>
											</v-list-item>
										</div>
									</v-col>
									<v-col cols="12">
										<v-card-actions
											class="justify-end justify-md-end"
										>
											<v-btn
												small
												color="info"
												to="/cv/"
												class="primary--text"
												>See full Resume</v-btn
											>
										</v-card-actions>
									</v-col>
								</v-row>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<static-query>
{
  assets: allContentfulAsset {
    edges {
      node {
        id
        title
        description
        file {
          url (width:300, height:200) 
        }
      }
    }
  }
}
</static-query>

<script>
import { renderHtmlMethod, renderImage } from "../helpers/contentful";
export default {
	methods: {
		renderThumbnail(src) {
			return renderImage({ src, fit: "fill", w: 760 / 5, h: 760 / 5 });
		},
	},
};
</script>