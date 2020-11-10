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
					<div
						v-for="post in $static.posts.edges"
						:key="post.node.id"
					>
						<h2>{{ post.node.title }}</h2>
						<p>{{ post.node.description }}</p>
						<g-link :to="post.node.path">Read more</g-link>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</Layout>
</template>

<static-query>
query {
  posts: allContentfulBlogPost {
    edges {
      node {
        title
        slug
        body
		path
        description
      }
    }
  }
}
</static-query>



