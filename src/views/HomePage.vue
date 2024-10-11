<template>
  <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
    <div class="flex justify-between items-start w-full">
      <div class="flex-col items-center">
        <div class="flex items-center mb-1">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">Website traffic</h5>
          <svg
            data-popover-target="chart-info"
            data-popover-placement="bottom"
            class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
            />
          </svg>
          <!-- Tooltip for the chart info -->
        </div>
      </div>
      <button
        id="dateRangeButton"
        @click="toggleDropdown"
        class="inline-flex items-center text-blue-700 dark:text-blue-600 font-medium hover:underline"
      >
        31 Nov - 31 Dev
        <svg
          class="w-3 h-3 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <!-- Dropdown -->
      <div
        v-show="dropdownVisible"
        class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-80 lg:w-96 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div class="p-3">
          <div class="flex items-center">
            <input
              v-model="dateRange.start"
              type="text"
              placeholder="Start date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            />
            <span class="mx-2 text-gray-500 dark:text-gray-400">to</span>
            <input
              v-model="dateRange.end"
              type="text"
              placeholder="End date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Pie Chart -->
    <div class="py-6" id="pie-chart"></div>

    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
      <div class="flex justify-between items-center pt-5">
        <!-- Button -->
        <button
          id="dropdownDefaultButton"
          class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900"
          @click="setLastDays"
        >
          Last 7 days
          <svg
            class="w-2.5 m-2.5 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>
    </div>
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
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    setLastDays() {
      console.log("Last 7 days selected");
    },
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
          height: 420,
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
