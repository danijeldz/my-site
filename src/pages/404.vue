<template>
	<Layout>
		<v-container>
			<v-row>
				<v-col cols="12" offset="" sm="8" offset-sm="2">
					<h1>Sorry, mate!</h1>
					<p>
						It seems that page that you were looking for does not
						exist!
					</p>
					<p>
						You wanna go
						<g-link to="/">home</g-link>?
					</p>
				</v-col>
			</v-row>
		</v-container>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "404 - Page not found",
	},
};
</script>