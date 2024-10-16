<template>
  <div class="alert alert-danger" v-if="msg" role="alert">
    <div class="flex justify-between items-center">
      <span class="text-red-600">{{ msg }}</span>
      <button 
        type="button" 
        class="text-red-600 hover:text-red-800 focus:outline-none" 
        @click="closeAlert"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ErrorMessage",
  computed: {
    msg() {
      return this.$auth0.error.value;
    }
  },
  methods: {
    closeAlert() {
      // Clear the error message if necessary; implement based on your logic.
      this.$auth0.error.value = null; // Adjust according to your error handling logic
    }
  }
};
</script>
