<template>
  <div class="nav-container mb-3">
    <nav class="bg-white shadow fixed top-0 w-full z-10">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <div class="navbar-brand w-36">
          <router-link to="/" class="nav-link text-gray-700 hover:text-blue-500 py-2">
            <div>
              <img src="mm.svg" alt="Logo" />
            </div>
          </router-link>
        </div>

        <!-- Logout Button -->
        <button
          @click.prevent="logout"
          class="flex items-center bg-transparent border-none focus:outline-none"
        >
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
              stroke="#374151"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>



<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "NavBar",
  setup() {
    const auth0 = useAuth0();
    
    return {
      logout() {
        auth0.logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        });
      }
    }
  }
};
</script>


<style scoped>
#mobileAuthNavBar {
  min-height: 125px;
}

.main-content {
  padding-top: 80px; /* Adjust this value based on the navbar height */
}

.navbar-brand img {
  width: 180px;  /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
}
</style>
