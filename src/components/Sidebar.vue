<template>
  <div>
    <!-- Overlay khi sidebar mở trên mobile -->
    <div
      v-if="isOpen"
      @click="toggleSidebar"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
    ></div>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 left-0 h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white z-50 transition-transform duration-300 ease-in-out shadow-2xl flex flex-col',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        'w-64',
      ]"
    >
      <!-- Top Section: Logo + Navigation -->
      <div class="flex-shrink-0">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-slate-700/50">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                />
              </svg>
            </div>
            <span class="text-xl font-bold">FOXAI</span>
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="p-4 space-y-2">
          <a
            v-for="item in menuItems"
            :key="item.path"
            :href="item.path"
            class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-500/20 group"
            :class="
              isActive(item.path) ? 'bg-blue-500 text-white' : 'text-slate-300 hover:text-white'
            "
            @click="handleNavClick(item.path, $event)"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span class="font-medium">{{ item.label }}</span>
          </a>
        </nav>
      </div>

      <!-- Spacer để đẩy phần dưới xuống đáy -->
      <div class="flex-grow"></div>

      <!-- Bottom Section: Language Selector -->
      <div class="flex-shrink-0">
        <!-- Language Selector -->
        <div class="p-4 border-t border-slate-700/50">
          <div class="text-xs text-slate-400 mb-2 px-2">{{ $t("language.title") }}</div>
          <div class="space-y-1">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="changeLanguage(lang.code)"
              class="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-slate-700/50 text-sm"
              :class="
                currentLanguage === lang.code ? 'bg-slate-600/50 text-white' : 'text-slate-300'
              "
            >
              <span class="w-8 text-xs font-bold text-slate-400">{{ lang.flag }}</span>
              <span>{{ $t(`language.${lang.code}`) }}</span>
            </button>
          </div>
        </div>
      </div>
    </aside>

    <!-- Toggle Button -->
    <button
      @click="toggleSidebar"
      class="fixed top-4 left-4 z-50 lg:hidden bg-slate-900 text-white p-3 rounded-lg shadow-lg hover:bg-slate-800 transition-colors"
    >
      <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, h, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const isOpen = ref(false);
const currentLanguage = ref(locale.value);
const currentPath = ref("/");

// Emit để thông báo khi thay đổi route
const emit = defineEmits(["navigate"]);

// Icon Components
const HomeIcon = () =>
  h(
    "svg",
    {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      class: "w-5 h-5",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      }),
    ]
  );

const GlobeIcon = () =>
  h(
    "svg",
    {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      class: "w-5 h-5",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      }),
    ]
  );

const menuItems = computed(() => [
  {
    path: "/",
    label: t("nav.home"),
    icon: HomeIcon,
  },
  {
    path: "/services",
    label: t("nav.websiteService"),
    icon: GlobeIcon,
  },
]);

const languages = [
  { code: "vi", flag: "VN" },
  { code: "en", flag: "GB" },
  { code: "lo", flag: "LA" },
];

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const closeSidebarOnMobile = () => {
  if (window.innerWidth < 1024) {
    isOpen.value = false;
  }
};

const handleNavClick = (path, event) => {
  event.preventDefault();
  currentPath.value = path;
  closeSidebarOnMobile();

  // Emit event để App.vue xử lý navigation
  emit("navigate", path);

  // Scroll to top khi chuyển trang
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const isActive = (path) => {
  return currentPath.value === path;
};

const changeLanguage = (code) => {
  currentLanguage.value = code;
  locale.value = code;
  localStorage.setItem("locale", code);
};
</script>
