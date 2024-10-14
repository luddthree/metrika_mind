<template>
    <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
        <div>
          <h6 class="block font-sans text-base font-bold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
            Bar Chart
          </h6>
        </div>
      </div>
      <div class="pt-6 px-2 pb-0">
        <div id="bar-chart"></div>
      </div>
    </div>
  </template>
  
  <script>
  import ApexCharts from 'apexcharts'; // Import ApexCharts
  
  export default {
    mounted() {
      // Chart configuration
      const chartConfig = {
        series: [
          {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
          },
        ],
        chart: {
          type: "bar",
          height: 240,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#020617"],
        plotOptions: {
          bar: {
            columnWidth: "40%",
            borderRadius: 2,
          },
        },
        xaxis: {
          categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
        },
        grid: {
          show: true,
          borderColor: "#dddddd",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true,
            },
          },
          padding: {
            top: 5,
            right: 20,
          },
        },
        fill: {
          opacity: 0.8,
        },
        tooltip: {
          theme: "dark",
        },
      };
  
      // Initialize and render the chart
      const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);
      chart.render();
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles if necessary */
  </style>
  