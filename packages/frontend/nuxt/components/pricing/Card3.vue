<template>
  <div
    class="relative bg-white border-2 border-blue-500 rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105 hover:shadow-2xl">
    <!-- Most Popular Badge -->
    <span
      v-if="isPopular"
      class="absolute top-0 left-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-br-lg">
      Most Popular
    </span>
    <h3 class="text-2xl font-extrabold text-gray-900 mb-4">{{ title }}</h3>
    <p class="text-4xl font-bold text-gray-800 mb-6">
      {{ price }}<span class="text-lg font-medium text-gray-500">/ month</span>
    </p>
    <ul class="space-y-3 mb-8 text-gray-600">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center">
        <svg
          class="w-5 h-5 text-green-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"></path>
        </svg>
        {{ feature }}
      </li>
    </ul>
    <button
      @click="selectPlan"
      class="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: {
    type: Array,
    default: () => [],
  },
  buttonText: {
    type: String,
    default: "Choose Plan",
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
});

const selectPlan = () => {
  console.log(`Selected plan: ${title}`);
};
</script>

<style scoped></style>
