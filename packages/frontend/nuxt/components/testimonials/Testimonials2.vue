<template>
  <section class="bg-white py-20 px-10">
    <div class="max-w-screen-xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10">Client Testimonials</h2>
      <div class="relative">
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-300"
            :style="`transform: translateX(-${currentIndex * 100}%)`">
            <div class="w-full flex-shrink-0">
              <p class="text-gray-600 italic mb-4">
                "{{ testimonials[0].quote }}"
              </p>
              <h4 class="font-semibold">{{ testimonials[0].name }}</h4>
              <p class="text-gray-500">{{ testimonials[0].position }}</p>
            </div>
            <div class="w-full flex-shrink-0">
              <p class="text-gray-600 italic mb-4">
                "{{ testimonials[1].quote }}"
              </p>
              <h4 class="font-semibold">{{ testimonials[1].name }}</h4>
              <p class="text-gray-500">{{ testimonials[1].position }}</p>
            </div>
            <div class="w-full flex-shrink-0">
              <p class="text-gray-600 italic mb-4">
                "{{ testimonials[2].quote }}"
              </p>
              <h4 class="font-semibold">{{ testimonials[2].name }}</h4>
              <p class="text-gray-500">{{ testimonials[2].position }}</p>
            </div>
          </div>
        </div>
        <button
          class="absolute left-0 top-1/2 transform -translate-y-1/2"
          @click="prev">
          ❮
        </button>
        <button
          class="absolute right-0 top-1/2 transform -translate-y-1/2"
          @click="next">
          ❯
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const testimonials = [
  {
    quote:
      "This product has changed the way we do business. Highly recommended!",
    name: "Jane Doe",
    position: "CEO, Company A",
  },
  {
    quote: "Excellent support and features. Truly a game changer for us!",
    name: "John Smith",
    position: "Manager, Company B",
  },
  {
    quote: "A fantastic tool that has streamlined our processes.",
    name: "Emily Johnson",
    position: "Director, Company C",
  },
];

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};
</script>

<style scoped>
.carousel {
  overflow: hidden;
}
.carousel-item {
  display: none;
}
.carousel-item.active {
  display: block;
}
</style>
