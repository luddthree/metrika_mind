<template>
  <div class="container mx-auto p-6 bg-gray-50 min-h-screen">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Lista de pacientes</h1>
      <!-- Search bar and sorting -->
      <div class="flex space-x-4">
        <input
          type="text"
          placeholder="Buscar un paciente..."
          v-model="searchQuery"
          class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select v-model="sortOption" class="px-4 py-2 border rounded-lg">
          <option value="">Ordenar por</option>
          <option value="name">Nombre</option>
          <option value="email">Email</option>
          <option value="questions">Cuestionarios</option>
        </select>
      </div>
    </div>

<!-- Loading Indicator -->
<div v-if="loading" class="flex flex-col justify-center items-center h-screen">
  <!-- Spinner -->
  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  <!-- Loading text -->
  <p class="mt-2 text-gray-600">Cargando pacientes...</p>
</div>


    <!-- Patient Count -->
    <div v-else>
      <div class="bg-gray-200 p-3 rounded-lg text-gray-800 mb-4">
        El número total de pacientes en el sistema de datos es {{ filteredPatients.length }}
      </div>
      <!-- <RouterLink
      to="/pacientview"> -->
      <table class="min-w-full text-gray-400 table-auto">
        <thead>
          <tr class="text-left">
            <th class="py-3 px-6 font-semibold">NOMBRE</th>
            <th class="py-3 px-6 font-semibold">E-MAIL</th>
            <th class="py-3 px-6 font-semibold">CUESTIONARIOS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
  <tr
    v-for="(patient, index) in filteredPatients"
    :key="index"
    class="hover:bg-green-100 bg-white transition-colors"
  >
    <td class="py-3 px-6 text-green-600 font-medium">
      <router-link :to="{ name: 'PacientDetail', params: { id: patient.id } }">
        {{ patient.name }}
      </router-link>
    </td>
    <td class="py-3 text-black px-6">{{ patient.email }}</td>
    <td class="py-3 px-6 text-center">{{ patient.questions }}</td>
    <td class="py-3 px-6 text-right">
      <router-link :to="{ name: 'PacientDetail', params: { id: patient.id } }" class="text-green-500 hover:text-green-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </router-link>
    </td>
  </tr>
</tbody>

      </table>
    <!-- </RouterLink> -->
    </div>

    <!-- Add Patient Button -->
    <div class="flex sticky justify-end mt-6">
      <button class="bg-green-500  text-white px-6 py-3 rounded-lg hover:bg-green-600">
        Añadir paciente
      </button>
    </div>
  </div>
</template>




<script>
import axios from 'axios';

export default {
  data() {
    return {
      patients: [],
      searchQuery: '', // Holds the input value for the search
      sortOption: '',  // Holds the selected sorting option
      loading: true,
    };
  },
  methods: {
    async fetchPatients() {
      try {
        const response = await axios.get('https://rdi.behit.net/metrikamind/api/patients_list');
        
        this.patients = Object.entries(response.data).map(([id, data]) => ({
          id,
          name: data[0],
          email: data[1],
          questions: data[2],
        }));

        this.loading = false;
      } catch (error) {
        console.error('Error fetching patient data:', error);
        this.loading = false;
      }
    },
  },
  computed: {
    // Computed property to filter and sort patients based on the search query and selected sort option
    filteredPatients() {
      let filtered = this.patients;

      // Filter by search query
      if (this.searchQuery) {
        const searchLower = this.searchQuery.toLowerCase();
        filtered = filtered.filter(patient =>
          patient.name.toLowerCase().includes(searchLower)
        );
      }

      // Sort by the selected option
      if (this.sortOption === 'name') {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortOption === 'email') {
        filtered = filtered.sort((a, b) => a.email.localeCompare(b.email));
      } else if (this.sortOption === 'questions') {
        filtered = filtered.sort((a, b) => b.questions - a.questions); // Sort by questionnaire count (descending)
      }

      return filtered;
    },
  },
  mounted() {
    this.fetchPatients();
  },
};
</script>
