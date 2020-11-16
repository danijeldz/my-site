<template>
	<Layout>
		<v-container>
			<v-row>
				<v-col
					class="col-xs-12 offset-xs-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"
				>
					<h1>Blog</h1>
					<v-divider class="mb-6"></v-divider>
				</v-col>
				<v-col
					class="blog_posts col-xs-12 offset-xs-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"
				>
					<div
						class="mb-4"
						v-for="post in $page.posts.edges"
						:key="post.node.id"
					>
						<a :href="post.node.path">
							<h2>{{ post.node.title }}</h2>
						</a>

						<div class="mb-2 body-2">
							<v-icon small class="mr-1" color="secondary"
								>mdi-clock-time-two-outline</v-icon
							>
							<span
								>{{ calcTimeToRead(post.node.body.length) }} min
								read</span
							>
							&nbsp;
							<v-icon small class="mr-1" color="secondary"
								>mdi-lead-pencil</v-icon
							>
							<span>{{ post.node.date }}</span>
						</div>
						<div v-html="post.node.description"></div>

						<g-link
							:to="post.node.path"
							class="text-decoration-none"
						>
							<v-icon small class="mr-1" color="secondary"
								>mdi-subdirectory-arrow-right</v-icon
							><span class="text-decoration-underline"
								>read more</span
							>
						</g-link>
					</div>
				</v-col>
			</v-row>
			<pager
				v-if="$page.posts.pageInfo.totalPages > 1"
				:info="$page.posts.pageInfo"
				class="pagination"
			/>
		</v-container>
	</Layout>
</template>

<page-query>
query Posts($page: Int) { 
	posts: allContentfulBlogPost(sortBy: "date", order:  DESC, perPage: 3, page: $page) 
	@paginate { totalCount pageInfo { totalPages  currentPage } 
	edges { 
		node { 
			id 
			title 
			description
			path
			body 
			date(format:  "MMMM D, Y") 
			} 
		} 
	} 
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
	components: {
		Pager,
	},
	methods: {
		calcTimeToRead(val) {
			return Math.ceil(val / 5 / 200);
		},
	},
	metaInfo: {
		title: "Blog",
	},
};
</script>

<style>
.blog_posts h2 {
	line-height: 1em;
}
.pagination {
	text-align: center;
	font-size: 1.5em;
	letter-spacing: 4px;
	margin: 1em auto;
}

.pagination a {
	color: var(--v-primary-base);
}

.pagination.active--exact {
	text-decoration: underline !important;
	color: var(--v-primary-lighten2);
}
</style>

