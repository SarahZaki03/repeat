<template>

	<div class="main-menu shadow mr-1">

		<!-- Title, Plus Icon -->
		<div class="row w-100 mx-0">
			<div class="col text-white">
				{{ $t("home.title") }}
			</div>
			<div class="">
				<h3 class="px-2 py-1 rounded btn-secondary">
					<i class="fas fa-plus"></i>
				</h3>
			</div>
		</div>
		
		<!-- Details menu -->
		<div class="row w-100 mx-0">

			<!-- Surat Section ( Right Half )-->
			<div class="col my-2"> 

				<!-- Surat List -->
				<div class="mb-2">
					<select class="form-control w-100" @click="hideAyat"> -->
						<option disabled selected hidden>{{ $t("mainmenu.selectsorah") }}</option>
					</select>
				</div>

				<div class="row">

					<!-- Verse List -->
					<div class="col">
						<select class="form-control p-0">
							<option disabled selected hidden>{{ $t("mainmenu.repeatayah") }}</option>
							<option 
								v-for="option in $t('repeat.options')"
								:key="option"
								:value="option.value"> {{option.text}} 
							</option>
						</select>
					</div>

					<!-- Section Repeatition List -->
					<div class="col">
						<select class="form-control">
							<option disabled selected hidden>{{ $t("mainmenu.repeatlesson") }}</option>
						</select>
					</div>

				</div>


			</div>


			<!-- Verses Section ( Left Half )-->
			<div class="col my-2"> 

				<div class="row ">

					<!-- From List -->
					<div class="col">
						<input class="form-control" type="number" min="1" id="aya-number-from" :placeholder="$t('mainmenu.from')"/>
					</div>

					<!-- To List -->
					<div class="col ">
						<input class="form-control" type="number" min="1" id="aya-number-to" :placeholder="$t('mainmenu.to')"/>
					</div>

				</div>

				<!-- Verses Waiting List -->
				<div class="my-2">
					<select class="form-control w-100">
					<option disabled selected hidden>{{ $t("mainmenu.waitingtime") }}</option>
					<option 
						v-for="option in $t('waiting.options')"
						:key="option"
						:value="option.value"> {{option.text}} 
					</option>
				</select>
				</div>

			</div>

		</div>

		<!-- Start Button -->
		<div class="row w-100 mx-0">
			<button class="btn btn-primary">
				<i class="fas fa-play"></i>
				{{ $t("mainmenu.start") }} 
			</button>
		</div>

	</div> 
</template>

<script>
import { store } from '../../store/index.js';

export default {
	name: "MainMenu",
	data(){
		return {
			storeData: store.state
		}
	},
	computed: {
		ayaState (){
			return this.storeData.ayatIsdisplayed;
		}
	},
	methods: {
		hideAyat () {
			store.setAyatState(true);
		},
		DisplayAyat(){
			store.setAyatState(false);
		}
	}
}
</script>

<style>
</style>