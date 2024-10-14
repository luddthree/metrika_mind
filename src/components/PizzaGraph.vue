<template>
  <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
    <div class="flex justify-between items-start w-full">
      <div class="flex-col items-center">
        <div class="flex items-center mb-1">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">Website traffic</h5>
        </div>
      </div>
    </div>

    <!-- Pie Chart -->
    <div class="" id="pie-chart"></div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  data() {
    return {
      dropdownVisible: false,
      dateRange: {
        start: "",
        end: "",
      },
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const chart = new ApexCharts(
        document.getElementById("pie-chart"),
        this.getChartOptions()
      );
      chart.render();
    },
    getChartOptions() {
      return {
        series: [52.8, 26.8, 20.4],
        colors: ["#1C64F2", "#16BDCA", "#9061F9"],
        chart: {
          height: 300,
          type: "pie",
        },
        labels: ["Direct", "Organic search", "Referrals"],
        legend: {
          position: "bottom",
        },
      };
    },
  },
};
</script>

<style scoped>
/* Add custom styles here if necessary */
</style>
