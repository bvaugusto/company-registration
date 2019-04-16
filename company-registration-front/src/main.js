import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/assets'

import App from './App.vue'
import { routes } from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

