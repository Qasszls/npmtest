import Vue from "vue";
import App from "./App.vue";
import lanhuNews from "./dist/index.es";
// import router from "./router";

Vue.config.productionTip = false;

Vue.use(lanhuNews);
// Vue.component("look-me", { template: "<div>look-me</div>" });

new Vue({
  // router,
  render: (h) => h(App),
}).$mount("#app");
