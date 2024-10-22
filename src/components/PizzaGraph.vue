<template>
  <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
    <div class="flex justify-between items-start w-full">
      <div class="flex-col items-center">
        <div class="flex items-center mb-1">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">Top 5 Patients by Questionnaires</h5>
        </div>
      </div>
    </div>

    <!-- Pie Chart -->
    <div class="" id="pie-chart"></div>
  </div>
</template>

<script>
import axios from "axios";
import ApexCharts from "apexcharts";

export default {
  data() {
    return {
      patients: [], // To store the patient data
    };
  },
  mounted() {
    this.fetchPatients();
  },
  methods: {
    async fetchPatients() {
      const PACIENT = import.meta.env.VITE_PACIENT;

      try {
        const response = await axios.get(PACIENT);
        // Format and sort the data to get the top 15 patients by questionnaires
        this.patients = Object.entries(response.data)
          .map(([id, data]) => ({
            name: data[0],       // Patient name
            questions: data[2],  // Number of questionnaires
          }))
          .sort((a, b) => b.questions - a.questions) // Sort in descending order
          .slice(0, 5); // Keep only the top 15

        this.renderChart();
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    },
    renderChart() {
      const patientNames = this.patients.map((patient) => patient.name);
      const questionnaireCounts = this.patients.map((patient) => patient.questions);

      const chart = new ApexCharts(
        document.getElementById("pie-chart"),
        this.getChartOptions(questionnaireCounts, patientNames)
      );
      chart.render();
    },
    getChartOptions(seriesData, labelsData) {
      return {
        series: seriesData,
        colors: ["#1C64F2", "#16BDCA", "#9061F9", "#FF6347", "#FFD700"],
        chart: {
          height: 300,
          type: "pie",
        },
        labels: labelsData,
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
