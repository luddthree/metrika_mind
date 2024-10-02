<template>
  <div class="container mx-auto p-6 bg-gray-50 min-h-screen">
    <div v-if="patient">
      <p class="text-2xl text-gray-900 font-bold mb-4 mt-3 ml-2">{{ patient.name }}</p>
      
      <!-- Tab Navigation -->
      <div class="border-b border-gray-300 mb-6 ml-6">
        <ul class="flex">
          <li class="mr-6">
            <a
              href="#"
              :class="activeTab === 'Estadisicas' ? 'text-black border-b-2 border-green-400' : 'text-gray-500'"
              class="inline-block py-2 px-4 text-lg"
              @click.prevent="setActiveTab('Estadisicas')"
            >
              Estadisicas
            </a>
          </li>
          <li class="mr-6">
            <a
              href="#"
              :class="activeTab === 'Cuestionarios' ? 'text-black border-b-2 border-green-400' : 'text-gray-500'"
              class="inline-block py-2 px-4 text-lg"
              @click.prevent="setActiveTab('Cuestionarios')"
            >
              Cuestionarios
            </a>
          </li>
          <li class="mr-6">
            <a
              href="#"
              :class="activeTab === 'Alertas' ? 'text-black border-b-2 border-green-400' : 'text-gray-500'"
              class="inline-block py-2 px-4 text-lg"
              @click.prevent="setActiveTab('Alertas')"
            >
              Alertas
            </a>
          </li>
          <li class="mr-6">
            <a
              href="#"
              :class="activeTab === 'Datos' ? 'text-black border-b-2 border-green-400' : 'text-gray-500'"
              class="inline-block py-2 px-4 text-lg"
              @click.prevent="setActiveTab('Datos')"
            >
              Datos
            </a>
          </li>
          <li class="mr-6">
            <a
              href="#"
              :class="activeTab === 'Consentimientos' ? 'text-black border-b-2 border-green-400' : 'text-gray-500'"
              class="inline-block py-2 px-4 text-lg"
              @click.prevent="setActiveTab('Consentimientos')"
            >
              Consentimientos
            </a>
          </li>
        </ul>
      </div>

      <!-- Tab Content -->
      <div v-if="activeTab === 'Estadisicas'">
        <p class="font-bold text-green-400 mt-5 mb-5 text-lg">Estadisicas</p>
        <p class=""><strong>ID:</strong> {{ patient.id }}</p>
      </div>

      <div v-if="activeTab === 'Cuestionarios'">
        <p class="font-bold text-green-400 mt-5 mb-5 text-lg">Cuestionarios</p>
        <p><strong>Cuestionarios Completados:</strong> {{ patient.questions }}</p>

        <div>
 
      <table class="min-w-full text-gray-400 table-auto">
        <thead>
          <tr class="text-left">
            <th class="py-3 px-6 font-semibold">NOMBRE</th>
            <th class="py-3 px-6 font-semibold">FECHA</th>
            <th class="py-3 px-6 font-semibold">HORA</th>
            <th class="py-3 px-6 font-semibold">ESTADO</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(question, index) in filteredQuestions"
            :key="index"
            class="hover:bg-green-100 bg-white transition-colors"
          >
            <td class="py-3 px-6 text-green-600 font-medium">{{ question.nombre }}</td>
            <td class="py-3 text-black px-6">{{ question.fecha }}</td>
            <td class="py-3 px-6 text-center">{{ question.hora }}</td>
            <td class="py-3 px-6 text-center">{{ question.pacientes }}</td>
            <td class="py-3 px-6 text-right">
              <button class="text-green-500 hover:text-green-700">
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
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>

      <div v-if="activeTab === 'Alertas'">
        <p class="font-bold text-green-400 mt-5 mb-5 text-lg">Alertas</p>
      </div>

      <div v-if="activeTab === 'Datos'">
        <div class="max-w-4xl mx-auto">
    <p class="font-bold text-green-400 mt-8 mb-6 text-xl">Datos personales</p>
    
    <div class="grid grid-cols-3 gap-6">
      <!-- Nombre -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">Nombre:</label>
        <input 
          type="text" 
          :placeholder="patient.name" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>
      
      <!-- DNI -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">DNI:</label>
        <input 
          type="text" 
          placeholder="" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>
      
      <!-- Teléfono -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">Teléfono:</label>
        <input 
          type="text" 
          placeholder="" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>
      
      <!-- Email -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">Email:</label>
        <input 
          type="text" 
          :placeholder="patient.email" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>

      <!-- Another Field Example -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">Age:</label>
        <input 
          type="text" 
          placeholder="" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>

      <!-- Another Field Example -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">field:</label>
        <input 
          type="text" 
          placeholder="" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>
    </div>

    
  </div>
  <hr class="mt-10 mb-10">

  <div class="max-w-4xl mx-auto">
    <!-- <p class="font-bold text-green-400 mt-8 mb-6 text-xl">Datos personales</p> -->
    
    <div class="grid grid-cols-3 gap-6">
      <!-- Nombre -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">field:</label>
        <input 
          type="text" 
          placeholder="" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>
      
      <!-- DNI -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">field:</label>
        <input 
          type="text" 
          placeholder="" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>
      
      <!-- Teléfono -->
      <div class="flex flex-col">
        <label class="font-bold text-green-400 mb-1">field:</label>
        <input 
          type="text" 
          placeholder="" 
          readonly 
          class="border border-gray-300 rounded px-3 py-2 bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>
    </div>

    
  </div>
    <div>
      

    </div>
  
      </div>

      <div v-if="activeTab === 'Consentimientos'">
        <p class="font-bold text-green-400 mt-5 mb-5 text-lg">Consentimientos</p>
      </div>
    </div>

    <!-- Loading Indicator -->
    <div v-else class="flex flex-col justify-center items-center h-screen">
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <p class="mt-2 text-gray-600">Cargando datos del paciente...</p>
    </div>

    <!-- <router-link to="/pacients" class="mt-4 text-blue-500 hover:underline">Volver a la lista de pacientes</router-link> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'], // Receive the patient ID from the route
  data() {
    return {
      patient: null,
      activeTab: 'Estadisicas', // Default active tab
      questions: [],
      searchQuery: '',  // Holds the input value for the search
      sortOption: '',   // Holds the selected sorting option
      loading: true,
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    async fetchQuestions() {
      try { //questiones api
        const response = await axios.get('https://rdi.behit.net/metrikamind/api/patients_list');
        
        this.questions = Object.entries(response.data).map(([id, data]) => ({
          id,
          nombre: data[0],
          fecha: data[1],
          hora: data[2],
          pacientes: data[3],
        }));

        this.loading = false;
      } catch (error) {
        console.error('Error fetching question data:', error);
        this.loading = false;
      }
    },
  },
    computed: {
    // Computed property to filter and sort questions based on the search query and selected sort option
    filteredQuestions() {
      let filtered = this.questions;

      // Filter by search query
      if (this.searchQuery) {
        const searchLower = this.searchQuery.toLowerCase();
        filtered = filtered.filter(question =>
          question.nombre.toLowerCase().includes(searchLower)
        );
      }

      // Sort by the selected option
      if (this.sortOption === 'nombre') {
        filtered = filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
      } else if (this.sortOption === 'fecha') {
        filtered = filtered.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      } else if (this.sortOption === 'hora') {
        filtered = filtered.sort((a, b) => a.hora.localeCompare(b.hora));
      } else if (this.sortOption === 'pacientes') {
        filtered = filtered.sort((a, b) => b.pacientes - a.pacientes); // Sort by patients count (descending)
      }

      return filtered;
    },
    
  },
  async mounted() {
    this.fetchQuestions();
    try { //pacient api
      const response = await axios.get('https://rdi.behit.net/metrikamind/api/patients_list');
      const patientData = response.data[this.id]; // Access the patient by ID

      this.patient = {
        id: this.id,
        name: patientData[0],
        email: patientData[1],
        questions: patientData[2],
      };
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  },
};
</script>

<style scoped>
/* Optional: Add custom styling to enhance the appearance */
</style>
