<template>
	<div class="right-side" :class="{'fade-top' : ayaState }">
		<div class="select-sorah">
			<div class="lesson"><button class="gold-btn small-btn">+</button><h2>{{ $t("mainmenu.todaylesson") }}</h2></div>
			<div class="form">
				<div class="top-menu">
				<!-- Select Sorah -->
				<select class="select-form" @click="hideAyat">
					<option disabled selected hidden>{{ $t("mainmenu.selectsorah") }}</option>
				</select>
				<!--==============-->
				<!--  Select Start and End of Ayah -->
				<label>{{ $t("mainmenu.ayahnumber") }}</label>
				<input type="number" min="1" id="aya-number-from" :placeholder="$t('mainmenu.from')" class="select-form"/> 
				<input type="number" min="1" id="aya-number-to" :placeholder="$t('mainmenu.to')" class="select-form"/>
				<!--===============================-->
				</div>
				<div class="bottom-menu">
				<!-- Select Repeat Time for Ayah -->
				<select class="select-form">
					<option disabled selected hidden>{{ $t("mainmenu.repeatayah") }}</option>
					<option 
						v-for="option in $t('repeat.options')"
						:key="option"
						:value="option.value"> {{option.text}} 
					</option>
				</select>
				<!--=============================-->
				<!-- Select Repeat Time for Lesson -->
				<select class="select-form">
					<option disabled selected hidden>{{ $t("mainmenu.repeatlesson") }}</option>
				</select>
				<!--===============================-->
				<!-- Select for Waiting Time between Ayah -->
				<select class="select-form">
					<option disabled selected hidden>{{ $t("mainmenu.waitingtime") }}</option>
					<option 
						v-for="option in $t('waiting.options')"
						:key="option"
						:value="option.value"> {{option.text}} 
					</option>
				</select>
				<!--======================================-->
				</div>
					
			</div>
			<div class="lesson"><button class="gold-btn large-btn  px-3 pt-1">{{ $t("mainmenu.start") }}</button></div>
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
	width: 50%;
}
.select-sorah{
	height: 250px;
	padding: 1em;
	margin-top: 1em;
	margin-right: 1em;
	border-radius: .5em;
	background: rgba(255,255,255,.3);
	font-family: 'Dubai';
	font-weight: 100;
	font-size: .9em;
	text-align: center;
	line-height: 2em;
	color: white;
}
.lesson{
	display: flex;
	margin-bottom: 1em;
	justify-content: space-between;
}
.lesson h2{
	font-size: 1.3em;
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
.gold-btn{
	background-color: #d6a206;
	border: none;
	border-radius: .2em;
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
	padding: .4em 1em!important;
	margin: .3em 0 .3em .3em; 
}
.select-form:hover{
	box-shadow: 0 0 0 1px transparent, 0 0 0 1px gold;
}
.select-form:focus{
	box-shadow: 0 0 0 2px gold;
}
#aya-number-from, #aya-number-to{
	width: 7em;
}
.top-menu, .bottom-menu{
	padding: 1em;
	direction: rtl;
	display: flex;
	justify-content: space-between;
}

</style>