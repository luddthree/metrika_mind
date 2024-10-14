<template>
  <div class="bg-gray-50 px-10">
    <div class="p-5">
    <!-- Table for the pizza graphs -->
    <div class="grid grid-cols-2 gap-4">
      <!-- First PizzaGraph -->
      <div class="p-5">
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


export default {
  name: 'App',
  components: {
    PizzaGraph,
    LineGraph,
  },
};
</script>