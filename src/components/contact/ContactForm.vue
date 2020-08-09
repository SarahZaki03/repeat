<template>
	<div  class="form col-9">

		<h4 class="text-white"> {{ $t("contact.title") }}
			<i class="fas fa-envelope"></i>
		</h4>

		<form @submit.prevent="contact">
			
			<div class="my-2">
				<input
				v-model="email"
				type="email"
				class="form-control"
				:placeholder="$t('contact.email')"
				/>
			</div>
			
			<div class="my-2">
				<input
				v-model="title"
				type="text"
				class="form-control"
				:placeholder="$t('contact.topic')"
				/>
			</div>
			
			<div class="my-2">
				<textarea
				:placeholder="$t('contact.msg')"
				v-model="details"
				name="notes"
				id="contactNotes"
				cols="20"
				rows="5"
				class="form-control"
				></textarea>
			</div>
			
			<div class="my-2 text-center">
				<button type="submit" class="btn btn-primary mt-2 px-4 py-2">
				{{ $t("contact.button") }}
				</button>
			</div>

		</form>
	</div>

</template>

<style lang="scss">

.form {
	direction: rtl;
	float: rigth;
}

</style>