<template>
  <div id="app" class="">

    <SidebarMenu />
    <div class="content ml-60">
      <router-view />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import SidebarMenu from './components/SidebarMenu.vue';
// import AppHeader from './components/AppHeader.vue';

// import Footer from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    SidebarMenu,
    // AppHeader
    // Footer,
  },
};
</script>

<style>
/* #app {
  display: flex;
} */
</style>
