<template>
  <div class="py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-block mb-6">
          <h1
            class="text-6xl font-black bg-gradient-to-r from-blue-800 via-blue-700 to-slate-700 bg-clip-text text-transparent mb-4 tracking-tight"
          >
            <img
              src="/foxai.jpg"
              alt="FOXAI Logo"
              class="inline-block w-36 h-36 mr-2 rounded-full p-4"
            />FOXAI Portal
          </h1>
          <div
            class="h-1 w-24 bg-gradient-to-r from-blue-700 to-slate-600 mx-auto rounded-full"
          ></div>
        </div>
      </div>

      <!-- Grid các ứng dụng -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AppCard
          v-for="(app, index) in applications"
          :key="app.id"
          :id="app.id"
          :title="app.title"
          :url="app.url"
          :index="index"
          @click="handleAppClick(app)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppCard from "../components/AppCard.vue";

const applications = [
  {
    id: 1,
    title: "Chatbot trợ lý bán hàng",
    url: "https://tlbh.foxai.com.vn",
  },
  {
    id: 2,
    title: "Chatbot trợ lý nghiệp vụ ngân hàng",
    url: "https://tlnvnh.foxai.com.vn",
  },
  {
    id: 3,
    title: "EKYC Laos",
    url: "https://ekyc-lao.foxai.com.vn",
  },
  {
    id: 4,
    title: "Chatbot (Hỗ trợ tiếng Lào)",
    url: "https://inagent.foxai.com.vn",
  },
  {
    id: 5,
    title: "MultiAgent Chatbot",
    url: "https://inagentv2.foxai.com.vn",
  },
  {
    id: 6,
    title: "OCR",
    url: "https://ocr.foxai.com.vn",
  },
  {
    id: 7,
    title: "Dashboard",
    url: "https://dashboard_al.foxai.com.vn/",
  },
];

const handleAppClick = (app) => {
  console.log("Clicked app:", app);
};
</script>
