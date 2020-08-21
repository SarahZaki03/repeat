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

</style>