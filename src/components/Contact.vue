<template>
	<section id="sectionContact" class="home_section info">
		<v-container>
			<v-row>
				<v-col cols="12" class="text-center"
					><h1>Get in touch!</h1></v-col
				>
				<v-col cols="12" md="6" offset-md="3">
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