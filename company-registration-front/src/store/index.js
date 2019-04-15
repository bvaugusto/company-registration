import Vue from 'vue'
import Vuex from 'vuex'
import organizacao from './modules/organizacao'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    organizacao
  },
  // mutations,
  // actions
})
