<template>
  <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold">Forgot Password</h2>
      <p class="text-sm text-gray-600 mt-2">
        Enter your email to reset your password
      </p>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="email" class="block text-gray-700">Email Address</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200"
          placeholder="you@example.com"
          required />
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
        <span class="inline-flex items-center">
          <Icon icon="mdi:send" class="mr-2" />
          Send Reset Link
        </span>
      </button>
    </form>
    <div class="text-center mt-4">
      <nuxt-link to="/login" class="text-sm text-indigo-500 hover:underline">
        Back to Login
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const email = ref("");
const handleSubmit = () => {
  console.log("Password reset link sent to:", email.value);
};
</script>
