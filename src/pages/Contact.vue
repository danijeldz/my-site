<template>
	<Layout>
		<section>
			<v-container>
				<v-row>
					<v-col
						class="col-xs-12 offset-xs-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"
					>
						<h1>Contact</h1>
						<v-divider class="mb-6"></v-divider>
						<v-form
							v-model="valid"
							action="https://formspree.io/f/xqkgbpdq"
							method="POST"
							ref="form"
							lazy-validation
						>
							<v-text-field solo label="Name"></v-text-field>
							<v-text-field
								solo
								v-model="email"
								label="E-mail"
								name="_replyto"
								required
							></v-text-field>
							<v-textarea
								solo
								name="message"
								label="Your message:"
								required
							>
							</v-textarea>
							<div class="text-center">
								<v-btn
									color="success"
									type="submit"
									class="info--text"
									>Send</v-btn
								>
							</div>
						</v-form>
					</v-col>
				</v-row>
			</v-container>
		</section>
	</Layout>
</template>

<script>
export default {
	data: () => ({
		valid: true,
		name: "",
		nameRules: [
			(v) => !!v || "Name is required",
			(v) =>
				(v && v.length <= 10) || "Name must be less than 10 characters",
		],
		email: "",
		emailRules: [
			(v) => !!v || "E-mail is required",
			(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
		],
	}),
	methods: {
		validate() {
			this.$refs.form.validate();
		},
	},
};
</script>