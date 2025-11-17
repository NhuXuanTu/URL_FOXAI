<template>
  <div
    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:scale-105"
    @click="$emit('click')"
  >
    <!-- Header with Icon and Name -->
    <div class="p-6 flex items-center gap-4">
      <div
        class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0"
      >
        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-slate-800">{{ name }}</h3>
    </div>

    <!-- Content -->
    <div class="p-6 pt-0">
      <!-- Visit Button -->
      <button
        class="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 group-hover:gap-3"
      >
        <span>{{ buttonText }}</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  buttonText: String,
});

defineEmits(["click"]);
</script>
