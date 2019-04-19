import Vue from "vue";
import VueRouter from "vue-router";
import Toasted from "vue-toasted";
import Vuetable from "vuetable-2";
import "./plugins/assets";

import App from "./App.vue";
import { routes } from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Toasted);
Vue.use(Vuetable);
Vue.component("vuetable", Vuetable);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
