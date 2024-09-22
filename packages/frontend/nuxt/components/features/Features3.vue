<template>
  <section class="bg-gray-50 py-20">
    <div class="max-w-screen-xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-10 text-gray-800">
        Explore Our Features
      </h2>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div v-for="feature in features" :key="feature.id" class="border-b">
          <button
            class="w-full text-left py-4 px-6 transition-colors duration-300 hover:bg-blue-100 focus:outline-none"
            @click="toggle(feature.id)">
            <h3 class="font-semibold text-xl text-gray-800">
              {{ feature.title }}
            </h3>
          </button>
          <div
            v-if="isOpen(feature.id)"
            class="flex items-center py-2 px-6 bg-blue-50">
            <!-- feature icon -->
            <img src="/icons/feature.png" alt="feature" class="w-10 mr-4" />
            <p class="flex-1 text-gray-700">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 1,
    title: "Feature One",
    description: "Description of feature one, elaborating on its key aspects.",
  },
  {
    id: 2,
    title: "Feature Two",
    description: "Description of feature two, including its significance.",
  },
  {
    id: 3,
    title: "Feature Three",
    description: "Description of feature three, focusing on its benefits.",
  },
];

const openFeature = ref(null);

const toggle = (feature) => {
  openFeature.value = openFeature.value === feature ? null : feature;
};

const isOpen = (feature) => openFeature.value === feature;
</script>

<style scoped></style>
