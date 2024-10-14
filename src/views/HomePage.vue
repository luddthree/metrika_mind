<template>
  <div class="bg-gray-50 px-10">
    <div class="p-5">
      <PizzaGraph />
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