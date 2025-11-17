<script setup>
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Home from "./views/Home.vue";
import WebsiteServices from "./views/WebsiteServices.vue";

const currentView = ref("home");

const handleNavigation = (path) => {
  if (path === "/") {
    currentView.value = "home";
  } else if (path === "/services") {
    currentView.value = "services";
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
    <!-- Sidebar Component -->
    <Sidebar @navigate="handleNavigation" />

    <!-- Main Content - Add left margin for sidebar on desktop -->
    <div class="lg:ml-64 transition-all duration-300">
      <!-- Dynamic View -->
      <component
        :is="currentView === 'home' ? Home : currentView === 'services' ? WebsiteServices : Home"
      />
    </div>
  </div>
</template>
