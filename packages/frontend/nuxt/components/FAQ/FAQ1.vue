<template>
  <section class="bg-gray-50 py-20 px-10">
    <div class="max-w-screen-xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
      <div class="space-y-6">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl cursor-pointer"
          @click="toggleAnswer(index)">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-semibold text-gray-800">
              {{ item.question }}
            </h3>
            <span class="text-gray-600">{{
              activeIndex === index ? "−" : "+"
            }}</span>
          </div>
          <p
            v-if="activeIndex === index"
            class="text-gray-600 mt-4 transition-all duration-300">
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
    question: "What is the purpose of this SaaS?",
    answer:
      "This SaaS is designed to streamline your workflows and enhance productivity through a flexible boilerplate.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply sign up and follow the quick start guide provided in our documentation.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes, we offer 24/7 customer support to assist you with any queries.",
  },
];

const activeIndex = ref(null);

const toggleAnswer = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped></style>
