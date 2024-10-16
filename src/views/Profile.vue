<template>
  <div class="container mx-auto px-4 mt-10 mb-10">
    <div class="flex items-center profile-header mb-6">
      <div class="mr-10 mb-3">
        <img
          :src="user?.picture"
          alt="User's profile picture"
          class="rounded-full w-42 h-auto profile-picture"
        />
      </div>
      <div class="text-left">
        <h2 class="text-2xl font-semibold">{{ user?.name }}</h2>
        <p class="text-lg text-gray-600">{{ user?.email }}</p>
      </div>
    </div>

    <div class="overflow-x-auto">
      <highlightjs language="json" :code="JSON.stringify(user, null, 2)" />
    </div>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "profile-view",
  setup() {
    const auth0 = useAuth0();
    
    return {
      user: auth0.user,
    }
  }
};
</script>
