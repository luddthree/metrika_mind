<template>
  <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
      <div>
        <h6 class="block font-sans text-base font-bold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
          Top 15 Patients by Questionnaires
        </h6>
      </div>
    </div>
    <div class="pt-6 px-2 pb-0">
      <div id="bar-chart"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ApexCharts from "apexcharts"; // Import ApexCharts

export default {
  data() {
    return {
      patients: [],
    };
  },
  methods: {
    async fetchPatients() {
      const PACIENT = import.meta.env.VITE_PACIENT;

      try {
        const response = await axios.get(PACIENT);
        // Format the data: extract names and questionnaire counts
        this.patients = Object.entries(response.data)
          .map(([id, data]) => ({
            name: data[0],
            questions: data[2],
          }))
          // Sort by questionnaire count in descending order
          .sort((a, b) => b.questions - a.questions)
          // Get only the top 15 patients
          .slice(0, 15);
          
        this.renderChart();
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    },
    renderChart() {
      const patientNames = this.patients.map((patient) => patient.name);
      const questionnaireCounts = this.patients.map((patient) => patient.questions);

      const chartConfig = {
        series: [
          {
            name: "Cuestionarios",
            data: questionnaireCounts,
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
          categories: patientNames,
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
  },
  mounted() {
    this.fetchPatients();
  },
};
</script>

<style scoped>
/* Additional styles if necessary */
</style>
