<template>
  <div class="sidebar w-56 h-full p-4 fixed">
    <div class="flex justify-center items-center">
      <img class="w-40 h-40 rounded-full overflow-hidden mt-10 mb-10 border-4 border-white" src="/pfp.jpg" alt="">
    </div>
    <ul>
      <li class="mb-2">
        <router-link 
          to="/" 
          class="text-white py-3 px-4 w-full  rounded-lg hover:bg-white-transparent flex items-center"
          active-class="bg-white-transparent"
          exact 
        >
          <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
          </svg>
          Inicio
        </router-link>
      </li>
      <li class="mb-2">
        <router-link 
          to="/pacients" 
          class="text-white py-3 px-4 w-full rounded-lg hover:bg-white-transparent flex items-center"
          active-class="bg-white-transparent"
        >
          <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
          </svg>
          Pacientes
        </router-link>
      </li>
      <li class="mb-2">
        <router-link 
          to="/questions" 
          class="text-white py-3 px-4 w-full rounded-lg hover:bg-white-transparent flex items-center"
          active-class="bg-white-transparent"
        >
          <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/>
          </svg>
          Cuestionarios
        </router-link>
      </li>
      <li class="mb-2">
        <router-link 
          to="/profile" 
          class="text-white py-3 px-4 w-full rounded-lg hover:bg-white-transparent flex items-center"
          active-class="bg-white-transparent"
        >
          <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
          Perfil
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
};
</script>

<style scoped>
.sidebar {
  width: 240px; /* Width of the sidebar */
  height: 100vh; /* Full height */
  background: linear-gradient(to top left, #3e616c, #65d693); /* Gradient from top-right green to bottom-left dark green */
}

.hover\:bg-white-transparent:hover, .bg-white-transparent {
  background-color: rgba(255, 255, 255, 0.2); /* White at 20% opacity */
}

.router-link {
  display: block; /* Ensures the link takes full width */
  width: 100%; /* Takes up the full width of the sidebar */
}
</style>
