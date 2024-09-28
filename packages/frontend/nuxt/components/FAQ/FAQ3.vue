<template>
  <section class="bg-gradient-to-r from-purple-500 to-indigo-600 py-20 px-10">
    <div class="max-w-screen-xl mx-auto text-center text-white">
      <h2 class="text-4xl font-bold mb-10">FAQ - Find Your Answers</h2>
      <div class="space-y-4">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-white bg-opacity-20 rounded-lg p-6 transition-transform duration-300 hover:scale-105">
          <h3
            class="text-xl font-semibold cursor-pointer"
            @click="toggleAnswer(index)">
            {{ item.question }}
            <span class="float-right">{{
              activeIndex === index ? "−" : "+"
            }}</span>
          </h3>
          <p v-if="activeIndex === index" class="text-gray-300 mt-2">
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
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We prioritize security with end-to-end encryption and regular audits.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time through your account settings.",
  },
];

const activeIndex = ref(null);

const toggleAnswer = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped></style>
