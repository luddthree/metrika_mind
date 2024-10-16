<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-100">
    <div class="mb-10">
      <nav-bar />
    </div>
     <SidebarMenu />
    <div class="">
      <error />
      <div class="content ml-60">
      <router-view />
    </div>
    </div>


    <footer class="bg-gray-100 ml-60 text-center">
      <div class="logo"></div>
      <p class="">
        Authentication provided by
        <a href="https://auth0.com" class="text-blue-500 hover:underline">Auth0</a>
      </p>
    </footer>
  </div>
</template>


<script lang="ts">
import NavBar from "./components/NavBar.vue";
import Error from "./components/Error.vue";
import SidebarMenu from "./components/SidebarMenu.vue";


export default {
  components: {
    NavBar,
    Error,
    SidebarMenu
  }
};
</script>
