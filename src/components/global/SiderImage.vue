<template>
  <div class="left-side">
		<div class="img-container">
			<img :src="require('@/assets/'+source)" >
		</div>
  </div>
</template>

<script>
export default {
	props:[
		"source"
	]
}
</script>

<style>
.left-side{
	width: 45%;
	margin-top: -5em;
}
.img-container img{
	width: 70%;
	margin-right: 2em;
}
</style>