<template>
  <div>
    <div class="rigth pr-5">
      <Aya />
      <ReferenceMenu class="shadow p-3 m-2"/>
    </div>

    <SiderImage source="woman_and_book.svg" class="mt-4" />

  </div>
</template>

<script>

import SiderImage from "@/components/global/SiderImage"
import Aya from "@/components/global/Aya"
import ReferenceMenu from "@/components/references/ReferenceMenu"

export default {
  components:{
    SiderImage,
    Aya,
    ReferenceMenu
  },

  // methods: {
  //     showAlert(msg, title) {
  //       this.toast.message = msg;
  //       this.toast.title = title;
  //       $("#toast").toast("show");
  //       return false;
  //     },

  //     contact(e) {
  //       e.preventDefault();
  //       API.ContactUs(
  //         {
  //           title: this.title,
  //           details: this.details,
  //           type: this.type,
  //           email: this.email
  //         },
  //         () => {
  //           this.showAlert("Thanks for Contacting US", "Sent Successfully");
  //         },
  //         e => {
  //           this.showAlert(
  //             e.response.data.developerMessage,
  //             "Failure, Try Again"
  //           );
  //         }
  //       );
  //     },

  //     localeBasedAlignment() {
  //       if (this.$i18n.locale == "ar") {
  //         document.querySelectorAll("input").forEach(field => {
  //           field.style.direction = "rtl";
  //         });

  //         document.querySelector("select").style.direction = "rtl";
  //         document.querySelector("textarea").style.direction = "rtl";
  //       }
  //     }
  //   },

  //   mounted: function() {
  //     this.localeBasedAlignment();
  //   }
}

</script>

<style lang="scss">

.rigth{
  float: right ;
  direction: rtl;
  width: 55%;
}

</style>
