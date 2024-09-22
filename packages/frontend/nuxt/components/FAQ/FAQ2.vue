<template>
  <section class="bg-white py-20 px-10">
    <div class="max-w-screen-xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10">Your Questions Answered</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg">
          <h3
            class="text-xl font-semibold text-gray-800 cursor-pointer"
            @click="toggleAnswer(index)">
            {{ item.question }}
            <span class="text-gray-600 float-right">{{
              activeIndex === index ? "−" : "+"
            }}</span>
          </h3>
          <p v-if="activeIndex === index" class="text-gray-600 mt-2">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const faqs = [
  {
    question: "Can I customize the templates?",
    answer:
      "Absolutely! Our templates are fully customizable to fit your brand.",
  },
  {
    question: "What technologies are used?",
    answer:
      "We use a variety of modern technologies, including Vue.js, Tailwind CSS, and Node.js.",
  },
  {
    question: "Is there a trial period?",
    answer:
      "Yes, we offer a 14-day free trial for new users to explore all features.",
  },
];

const activeIndex = ref(null);

const toggleAnswer = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped></style>
