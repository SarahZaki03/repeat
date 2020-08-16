<template>
  <div class="aya" :class="{'fade-out-top' : ayaState }">  
      <h3>  {{ $t("aya.title") }} </h3>
      <p
        v-for="aya in $t('aya.content')"
        :key="aya"
      >
          ( {{aya}} )
      </p>
  </div>
</template>

<script>
import { store } from '../../store/index.js';

export default {
   name: 'Aya',
   data () {
     return {
        storeData: store.state
     }
   },
   computed : {
     ayaState (){
       return this.storeData.ayatIsdisplayed;
     }
   }
}
</script>

<style>
.aya{
  font-family: 'Dubai';
  font-weight: 700;
  color: white;
  /* display: inline-block; */
  text-align: center;
}
.aya h3{
  font-size: 1.3em;
  /* margin-bottom: .8em; */
}
.aya p{
  font-size: .9em;
  text-shadow: 0 0 1px white;
}
/*.aya-state{
  display: none;
}*/

</style>