<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <div class="container mx-auto px-6 py-12">
      <!-- Header -->
      <div class="mb-12 animate-fade-in-up">
        <h1 class="text-4xl font-bold text-slate-800 mb-3">
          {{ $t("websiteService.title") }}
        </h1>
        <p class="text-slate-600 text-lg">
          {{ $t("websiteService.subtitle") }}
        </p>
      </div>

      <!-- Website Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WebsiteServiceCard
          v-for="website in websites"
          :key="website.id"
          :name="website.name"
          :button-text="$t('websiteService.visitWebsite')"
          @click="openWebsite(website.url)"
          class="animate-fade-in-up"
          :style="{ animationDelay: `${website.index * 100}ms` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import WebsiteServiceCard from "../components/WebsiteServiceCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const websites = [
  {
    id: 1,
    name: "BLĐ",
    url: "https://app.powerbi.com/view?r=eyJrIjoiOWZkZmRkNmYtMjM2Zi00ODNjLWI3MmUtNmJhMmM0M2YxMTM4IiwidCI6ImRlYjUyOGI5LTQzNWMtNDU0Ni05OTA0LTM0NTBjYWJlMjBlZSIsImMiOjEwfQ%3D%3D&pageName=05aca7287360818ee608",
    index: 0,
  },
  {
    id: 2,
    name: "KPIs",
    url: "https://app.powerbi.com/view?r=eyJrIjoiODNlOGJkMjktNzdjMy00ZmU4LTgzMTYtNDNkZmQ0ZDJiMjNhIiwidCI6ImRlYjUyOGI5LTQzNWMtNDU0Ni05OTA0LTM0NTBjYWJlMjBlZSIsImMiOjEwfQ%3D%3D&pageName=1f4bcca0149e60698040",
    index: 1,
  },
  {
    id: 3,
    name: "SP_TinDung",
    url: "https://app.powerbi.com/view?r=eyJrIjoiODllNTg4NDAtZTIxZC00NzU5LWE5NTgtMTRkNGNhNmY4NjhiIiwidCI6ImRlYjUyOGI5LTQzNWMtNDU0Ni05OTA0LTM0NTBjYWJlMjBlZSIsImMiOjEwfQ%3D%3D&pageName=ReportSectiondbad4f72a9de06d6bb6c",
    index: 2,
  },
];

const openWebsite = (url) => {
  window.open(url, "_blank");
};
</script>
