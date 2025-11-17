<template>
  <div
    @click="handleClick"
    class="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 cursor-pointer hover:scale-110 border border-white/50 hover:border-blue-300 overflow-hidden animate-fade-in-up opacity-0"
    :style="{ animationDelay: `${index * 150}ms` }"
  >
    <!-- Gradient overlay on hover -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
    ></div>

    <!-- Animated border glow -->
    <div
      class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-slate-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
    ></div>

    <div class="relative z-10">
      <div class="flex items-center justify-center mb-6">
        <div class="relative">
          <div
            class="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-800 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-6"
          >
            <svg
              class="w-10 h-10 text-blue-800 group-hover:text-blue-600 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
          </div>
        </div>
      </div>

      <h3
        class="text-xl font-bold text-slate-800 text-center mb-3 group-hover:text-blue-700 transition-colors duration-300"
      >
        {{ title }}
      </h3>
    </div>

    <!-- Bottom accent line -->
    <div
      class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 to-slate-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click", { id: props.id, title: props.title, url: props.url });

  // Redirect đến URL
  if (props.url) {
    // Kiểm tra nếu URL đã có protocol
    const fullUrl = props.url.startsWith("http") ? props.url : `https://${props.url}`;
    window.open(fullUrl, "_blank", "noopener,noreferrer");
  }
};
</script>
