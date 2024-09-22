<template>
  <!-- Geometric patterns -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div
      class="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div
      class="absolute bottom-0 left-0 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>

  <div class="bg-gray-800 p-8 rounded-xl shadow-2xl w-96 z-10">
    <h2 class="text-3xl font-bold mb-6 text-center text-white">Log In</h2>
    <form @submit.prevent="handleLogin" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300"
          >Email</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="block w-full px-4 py-3 border border-gray-700 rounded-md leading-5 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="you@example.com" />
          <div
            class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon icon="mdi:email" class="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-300"
          >Password</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="block w-full px-4 py-3 border border-gray-700 rounded-md leading-5 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            type="checkbox"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-gray-700" />
          <label for="remember-me" class="ml-2 block text-sm text-gray-300"
            >Remember me</label
          >
        </div>
        <div class="text-sm">
          <NuxtLink
            to="/auth/forgot-password"
            class="font-medium text-blue-400 hover:text-blue-300"
            >Forgot password?</NuxtLink
          >
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
          Sign In
        </button>
      </div>
    </form>
    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-600"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-gray-800 text-gray-400">Or continue with</span>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-3 gap-3">
        <div>
          <a
            href="#"
            class="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600">
            <Icon icon="mdi:google" class="h-5 w-5" />
          </a>
        </div>
        <div>
          <a
            href="#"
            class="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600">
            <Icon icon="mdi:facebook" class="h-5 w-5" />
          </a>
        </div>
        <div>
          <a
            href="#"
            class="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600">
            <Icon icon="mdi:twitter" class="h-5 w-5" />
          </a>
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

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
