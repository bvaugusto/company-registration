<template>
  <div id="app" class="container">
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
    <GetMenu></GetMenu>

  </div>
</template>

<script>
  import GetMenu from './components/GetMenu.vue'
  // import Organizacao from './components/Organizacao.vue'
export default {
  name: 'App',
  components: {
    GetMenu
    // Organizacao
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
