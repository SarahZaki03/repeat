import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home.vue";
import References from "@/views/references.vue";
import ContactUs from "@/views/contactUs.vue";
import notFound from "@/components/error/NotFound.vue";

import i18n from "@/i18n";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: `/${i18n.locale}`
    },
    {
      path: "/:lang",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "/",
          name: "Home",
          component: Home,
          meta: {
            title: `${i18n.t("home.title")}`
          }
        },
        {
          path: "references",
          name: "References",
          component: References,
          meta: {
            title: `${i18n.t("references.title")}`
          }
        },
        {
          path: "contact",
          name: "ContactUs",
          component: ContactUs,
          meta: {
            title: `${i18n.t("contact.title")}`
          }
        },
        {
          path: "*",
          name: "NotFound",
          component: notFound,
          meta: {
            title: `${i18n.t("notFound.title")}`
          }
        }
      ]
    }
  ]
});