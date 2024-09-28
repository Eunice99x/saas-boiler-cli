<template>
  <section class="py-20 bg-gray-100">
    <div class="max-w-screen-xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-10">Ask Us Anything!</h2>
      <div class="flex flex-col items-center">
        <div class="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <div class="space-y-4">
            <div
              v-for="(item, index) in faqs"
              :key="index"
              class="border-b last:border-b-0 border-gray-200">
              <div
                class="flex justify-between items-center cursor-pointer py-3"
                @click="toggleAnswer(index)">
                <h3 class="text-lg font-semibold text-gray-800">
                  {{ item.question }}
                </h3>
                <span class="text-gray-600">{{
                  activeIndex === index ? "−" : "+"
                }}</span>
              </div>
              <p v-if="activeIndex === index" class="text-gray-600 mt-2">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const faqs = [
  {
    question: "What happens after I sign up?",
    answer:
      "You'll receive a confirmation email and can start exploring the features immediately.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee if you're not satisfied.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan anytime in your account settings.",
  },
];

const activeIndex = ref(null);

const toggleAnswer = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped></style>
