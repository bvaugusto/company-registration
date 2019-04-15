// import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Organizacao from '@/componentes/Organizacao'
//
// import Vue from 'vue'
// import Vuex from 'vuex'
// import organizacao from './modules/organizacao'
//
// // Vue.use(Router)
//
// // export default new Router({
// //   routes: [
// //     {
// //       path: '/',
// //       name: 'HelloWorld',
// //       component: HelloWorld
// //     },
// //     {
// //       path: '/organizacao',
// //       name: 'Organizacao',
// //       component: Organizacao
// //     }
// //   ]
// // })
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   modules: {
//     organizacao
//   },
//   // mutations,
//   // actions
// })


import Home from './components/Home';
import Organizacao from './components/Organizacao';

export const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/organizacao',
    name: 'Organizacao',
    component: Organizacao
  }
]
