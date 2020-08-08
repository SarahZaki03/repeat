<template>
    <div id="contactUs">
    <Overlay />
    <div class="container">
        <div class="row">
        <div class="col"></div>
        <div class="col-md-8">
					<div class="text-center">
					<PageTitle :title="$t('nav.contact')" classList="text-light" />

					<form @submit.prevent="contact">
								<div class="col-md-6 my-2">
									<!-- email -->
									<input
									v-model="email"
									type="email"
									class="form-control"
									:placeholder="$t('contact.email')"
									/>
								</div>
								<div class="col-6 my-2">
									<input
									v-model="title"
									type="text"
									class="form-control"
									:placeholder="$t('contact.ftitle')"
									/>
								</div>
								<div class="col-6 my-2">
									<textarea
									:placeholder="$t('contact.notes')"
									v-model="details"
									name="notes"
									id="contactNotes"
									cols="30"
									rows="5"
									class="form-control"
									></textarea>
								</div>
								<div class="col"></div>
								<div class="col-md-3 my-2">
									<button type="submit" class="w-100 btn btn-primary btn-lg">
									{{ $t("contact.button") }}
									</button>
								</div>
            </form>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>


<style>

#contactUs {
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  z-index: 0;
}
 
</style>