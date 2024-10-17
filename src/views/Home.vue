<template>

  <div class="bg-gray-50 px-10">
    <div class="pt-8">
    <p class="font-bold text-2xl">Hola Dr. {{ user?.name }}!</p>
  </div>
    <div class="p-5">
    <!-- Table for the pizza graphs -->
    <div class="grid grid-cols-2 gap-4">
      <!-- First PizzaGraph -->
      <div class="">
        <PizzaGraph />
      </div>
      <!-- Second PizzaGraph -->
      <div class="p-5">
        <p>table heere</p>
      </div>
    </div>
  </div>

    <div class="p-5">
      <LineGraph />
    </div>
  </div>
</template>

<script>
import PizzaGraph from '../components/PizzaGraph.vue'; // Go one level up
import LineGraph from '../components/LineGraph.vue'; // Go one level up
import { useAuth0 } from '@auth0/auth0-vue';


export default {
  name: 'App',
  setup() {
    const auth0 = useAuth0();
    
    return {
      user: auth0.user,
    }
  },
  components: {
    PizzaGraph,
    LineGraph,
  },
};
</script>