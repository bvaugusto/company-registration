// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import './plugins/assets'
//
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import './plugins/assets'

import App from './App.vue'
import { routes } from './routes/'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

