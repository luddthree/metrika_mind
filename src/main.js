import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts'; // Import ApexCharts
import './assets/tailwind.css'; // Import Tailwind CSS

const app = createApp(App);

app.use(router);
app.use(VueApexCharts); // Use ApexCharts plugin

app.component('ApexChart', VueApexCharts); // Register ApexCharts as a global component

app.mount('#app');
