<template>
	<Layout>
		<v-container>
			<v-row>
				<v-col
					sm="12"
					md="8"
					lg="6"
					offset-sm="0"
					offset-md="2"
					offset-lg="3"
				>
					<h1>Blog</h1>
					<div v-for="post in $page.posts.edges" :key="post.node.id">
						<h2>{{ post.node.title }}</h2>
						<p>{{ post.node.description }}</p>
						<g-link :to="post.node.path">Read more</g-link>
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
	posts: allContentfulBlogPost(sortBy: "date", order:  DESC, perPage: 2, page: $page) 
	@paginate { totalCount pageInfo { totalPages  currentPage } 
	edges { 
		node { 
			id 
			title 
			description
			# timeToRead 
			# excerpt 
			path 
			date(format:  "MMMM D, Y") 
			} 
		} 
	} 
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
	metInfo: {
		title: "Blog",
	},
	components: {
		Pager,
	},
};
</script>

<style>
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

