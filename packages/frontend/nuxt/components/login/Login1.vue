<template>
  <div class="bg-white p-8 rounded-lg shadow-xl w-96">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
      Welcome Back
    </h2>
    <form @submit.prevent="">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon icon="mdi:email" class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="you@example.com" />
        </div>
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon icon="mdi:lock" class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="••••••••" />
        </div>
      </div>
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
          <label for="remember-me" class="ml-2 block text-sm text-gray-700"
            >Remember me</label
          >
        </div>
        <div class="text-sm">
          <NuxtLink
            to="/auth/forgot-password"
            class="font-medium text-purple-600 hover:text-purple-500"
            >Forgot your password?</NuxtLink
          >
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const email = ref("");
const password = ref("");
</script>
