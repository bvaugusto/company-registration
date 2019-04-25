<template>
  <div>
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">MAIN NAVIGATION</li>
          <li>
            <router-link to="/">
              <i class="fa fa-edit"></i>
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="organizacao">
              <i class="fa fa-edit"></i>
              <span>Empresa</span>
            </router-link>
          </li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>
<script>
export default {
  name: "GetMenu",
  data() {
    return {};
  }
};
</script>
