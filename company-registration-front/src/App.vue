<template>
  <div id="app" class="container">
<!--    <img src="./assets/logo.png">-->
    <GetMenu></GetMenu>
    <router-view></router-view>

  </div>
</template>

<script>
  import GetMenu from './components/GetMenu.vue'
  // import Organizacao from './components/Organizacao.vue'
export default {
  name: 'App',
  components: {
    GetMenu
  }
}
</script>

<style>

</style>
