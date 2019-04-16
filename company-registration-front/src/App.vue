<template>
  <div id="app" class="wrapper">
    <GetMenu></GetMenu>
    <router-view></router-view>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
  import GetMenu from './components/GetMenu.vue'
  import Vfooter from './components/shared/Vfooter.vue'
export default {
  name: 'App',
  components: {
    GetMenu,
    Vfooter
  }
}
</script>

<style>

</style>
