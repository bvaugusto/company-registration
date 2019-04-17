import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import organizacao from "./modules/organizacao";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    organizacao
  }
  // mutations,
  // actions
});
