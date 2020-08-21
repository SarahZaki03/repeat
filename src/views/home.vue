<template>
  <div class="d-flex">

    <div class="col-6 py-4 mr-5">
      <Aya class="py-3" />
      <MainMenu class="" />
    </div>

    <div class="col-5">
      <SiderImage source="childrens.svg"/>
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

*{
  direction: rtl;
}
</style>