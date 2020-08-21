<template>
	<div class="right-side" :class="{'fade-top' : ayaState }">
		<div class="select-sorah">
			<div class="row justify-content-around lesson">
				<div class="col-md-5 text-left"><button class="gold-btn small-btn">+</button></div>
				<div class="col-md-5 text-right"><h4>{{ $t("mainmenu.todaylesson") }}</h4></div>
			</div>
			<div class="form">
				<div class="row justify-content-around"> 
					<div class="col-md-5 right-menu">
					<!-- Select Sorah -->
					<label class="w-100 text-right">{{ $t("mainmenu.selectsorah") }}</label>
					<select class="select-form w-100" @click="hideAyat">
						<option disabled selected hidden>{{ $t("mainmenu.selectsorah") }}</option>
					</select>
					<!--==============-->
					<!--  Select Start and End of Ayah -->
					<label class="w-100 text-right mt-3">{{ $t("mainmenu.ayahnumber") }}</label>
					<div class="row">
						<div class="col-6">
							<input type="number" min="1" id="aya-number-from" :placeholder="$t('mainmenu.from')" class="select-form"/> 
						</div>
						<div class="col-6">
							<input type="number" min="1" id="aya-number-to" :placeholder="$t('mainmenu.to')" class="select-form"/>
						</div>
					</div>
					<!--===============================-->
					</div>

					<div class="col-md-5 left-menu">
					<div class="row text-right">
						<div class="col-md-6">
							<label>{{ $t("mainmenu.repeatayah") }}</label>
							<!-- Select Repeat Time for Ayah -->
							<select class="w-100 select-form">
								<option disabled selected hidden>{{ $t("mainmenu.repeatayah") }}</option>
								<option 
									v-for="option in $t('repeat.options')"
									:key="option"
									:value="option.value"> {{option.text}} 
								</option>
							</select>
						</div>
						<div class="col-md-6">
							<label>{{ $t("mainmenu.repeatlesson") }}</label>
							<!--=============================-->
							<!-- Select Repeat Time for Lesson -->
							<select class="w-100 select-form">
								<option disabled selected hidden>{{ $t("mainmenu.repeatlesson") }}</option>
							</select>
							<!--===============================-->
						</div>
					</div>
					<div class="row text-right mt-3">
						<div class="col-12">
							<label>{{ $t("mainmenu.waitingtime") }}</label>
						</div>
					</div>
					<div class="row text-right">
						<div class="col-12">
							<!-- Select for Waiting Time between Ayah -->
							<select class="select-form w-100">
								<option disabled selected hidden>{{ $t("mainmenu.waitingtime") }}</option>
								<option 
									v-for="option in $t('waiting.options')"
									:key="option"
									:value="option.value"> {{option.text}} 
								</option>
							</select>
						</div>
					</div>
					<!--======================================-->
					</div>
				</div><!-- Row -->					
			</div>
			<div class="row mt-4 text-left justify-content-around lesson">
				<div class="col-md-11">
					<button class="gold-btn large-btn px-3 pt-1 w-25">{{ $t("mainmenu.start") }}</button>
				</div>
			</div>
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
.right-side{
	width: 55%;
}
.select-sorah * {
	outline: yellow;
}
.select-sorah{
	padding: 1em 1em .3em;
    border-radius: .5em;
    background: rgba(255,255,255,.3);
    font-family: 'Dubai';
    font-size: .8em;
    text-align: center;
    line-height: 2em;
    color: white;
}
.lesson{
	font-size: 1.5em;
	margin-bottom: 1em;
}
/*.form{
	display: flex;
    justify-content: space-between;
}
.form label{
	text-align: right;
}
.form > div{
	width: 45%;
}*/
.small-btn{
	width: 1.5em;
	height: 1.5em;
	border: none;
}
.large-btn{
	border: 3px solid #d6a206;
	font-size: large;
}
.gold-btn{
	background-color: #d6a206;
	border-radius: .4em;
	box-shadow: 0 0 3px lightgrey;
	color: white;
	cursor: pointer;
}
.gold-btn:focus{
	outline: 1px solid white;
}
.select-form{
	background: white;
	border-radius: .3em;
	border: none;
	box-shadow: 0 0 0 2px transparent;
	color: grey;
	padding: .7em 1em!important;
	margin: 0 0 .3em .3em; 
}
.select-form:hover{
	box-shadow: 0 0 0 1px transparent, 0 0 0 1px gold;
}
.select-form:focus{
	box-shadow: 0 0 0 2px gold;
}
#aya-number-from, #aya-number-to{
	width: 100%;
}

</style>