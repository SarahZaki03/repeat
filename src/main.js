import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import i18n from './i18n'
import router from "./router";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  let language = to.params.lang;
  if (!language) language = "ar";
  i18n.locale = language;
  next();
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
