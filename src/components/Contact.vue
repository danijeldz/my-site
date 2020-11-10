<template>
	<section id="sectionContact">
		<v-container>
			<v-row>
				<v-col cols="12" class="text-center"
					><h1>Get in touch!</h1></v-col
				>
				<v-col cols="6" offset="3">
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
								color="primary"
								type="submit"
								class="secondary--text"
								>Send</v-btn
							>
						</div>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<style>
#sectionContact {
	min-height: 50ch;
	border: 1px solid green;
}
</style>