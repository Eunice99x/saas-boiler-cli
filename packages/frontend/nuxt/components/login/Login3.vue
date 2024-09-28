<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- Left side - Decorative area -->
    <div
      class="hidden lg:flex lg:w-1/2 bg-indigo-600 flex-col justify-center items-center p-12">
      <div class="max-w-md">
        <h1 class="text-white text-4xl font-bold mb-6">Welcome Back!</h1>
        <p class="text-indigo-200 text-xl mb-8">
          Log in to access your account and explore our amazing features.
        </p>
        <div class="flex space-x-4">
          <div class="w-16 h-16 bg-indigo-500 rounded-full"></div>
          <div class="w-16 h-16 bg-pink-500 rounded-full"></div>
          <div class="w-16 h-16 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>

    <!-- Right side - Login form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center">
      <div class="max-w-md w-full px-6 py-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Sign In
        </h2>
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <div class="mt-1 relative">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com" />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Icon icon="mdi:email" class="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="mt-1 relative">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••" />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Icon icon="mdi:lock" class="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"
                >Remember me</label
              >
            </div>
            <div class="text-sm">
              <NuxtLink
                to="/auth/forgot-password"
                class="font-medium text-indigo-600 hover:text-indigo-500"
                >Forgot your password?</NuxtLink
              >
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign In
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-100 text-gray-500"
                >Or continue with</span
              >
            </div>
          </div>

          <div class="mt-6 flex space-x-3">
            <div class="flex-1">
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-200">
                <Icon icon="mdi:google" class="h-5 w-5" />
              </a>
            </div>
            <div class="flex-1">
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-200">
                <Icon icon="mdi:facebook" class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
  // Handle login logic here
  console.log("Login attempt", {
    email: email.value,
    password: password.value,
  });
};
</script>

<style scoped></style>
