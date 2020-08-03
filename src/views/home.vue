<template>
  <div>

    <br>
    
    <Aya />

    <div class="main-body">
      <SiderImage source="childrens.svg"/>
      <MainMenu />
    </div>
    

  </div>
</template>

<script>

import Aya from "@/components/global/Aya"
import SiderImage from "@/components/global/SiderImage"
import MainMenu from "@/components/home/MainMenu"

export default {
    components: {
        Aya,
        SiderImage,
        MainMenu
    }
}
</script>

<style>
.main-body{
  display: flex;
  justify-content: space-between;
}
</style>