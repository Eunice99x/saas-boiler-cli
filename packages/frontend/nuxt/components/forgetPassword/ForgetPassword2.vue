<template>
  <div class="relative w-full max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
    <!-- Background Accent Circles -->
    <div
      class="absolute top-0 left-0 bg-indigo-300 w-32 h-32 rounded-full -z-10"></div>
    <div
      class="absolute bottom-0 right-0 bg-blue-300 w-24 h-24 rounded-full -z-10"></div>

    <div class="text-center">
      <Icon
        icon="fluent:key-reset-24-regular"
        class="text-indigo-500 text-6xl mb-4 animate-bounce"></Icon>
      <h2 class="text-2xl font-bold mb-2">Reset Your Password</h2>
      <p class="text-sm text-gray-500">We’ll send a reset link to your email</p>
    </div>

    <form class="mt-6" @submit.prevent="handleSubmit">
      <div class="mb-4">
        <input
          type="email"
          v-model="email"
          class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          placeholder="Enter your email"
          required />
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        <Icon icon="mdi:email-send" class="inline-block mr-2"></Icon>
        Send Link
      </button>
    </form>

    <div class="text-center mt-4">
      <nuxt-link to="/login" class="text-indigo-500 hover:underline"
        >Go Back to Login</nuxt-link
      >
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const email = ref("");
const handleSubmit = () => {
  console.log("Reset link sent:", email.value);
};
</script>
