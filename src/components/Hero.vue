<template>
  <div class="text-center hero">
    <div>
      <p>Welcome back {{ user?.name }}</p>
    </div>

    <img class="w-screen" src="/decentrol.png" alt="logo" width="120" />
    <!-- <h1 class="mb-4 text-3xl font-bold">Decentrol</h1> -->
    <p class="lead text-gray-400 text-lg">
      Under development
    </p>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "HeroContent",
  setup() {
    const auth0 = useAuth0();
    
    return {
      user: auth0.user,
    }
  }
};
</script>