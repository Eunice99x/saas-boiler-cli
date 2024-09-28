<template>
  <div class="max-w-md w-full space-y-8 relative">
    <!-- Animated gradient background -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
    <div
      class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg transform skew-y-0 rotate-6 rounded-3xl"></div>
    <div
      class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg transform skew-y-0 rotate-3 rounded-3xl opacity-50"></div>

    <!-- Form container -->
    <div class="relative bg-gray-800 shadow-xl rounded-3xl p-10">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Join Our Community
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <a href="#" class="font-medium text-purple-400 hover:text-purple-300">
            sign in to your account
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSignUp">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              v-model="name"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-700"
              placeholder="Full Name" />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-700"
              placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              v-model="password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-700"
              placeholder="Password" />
          </div>
          <div>
            <label for="password-confirm" class="sr-only"
              >Confirm Password</label
            >
            <input
              id="password-confirm"
              name="password-confirm"
              type="password"
              required
              v-model="passwordConfirmation"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-700"
              placeholder="Confirm Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded bg-gray-700" />
            <label for="terms" class="ml-2 block text-sm text-gray-400">
              I agree to the
              <a
                href="#"
                class="font-medium text-purple-400 hover:text-purple-300"
                >Terms and Conditions</a
              >
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <Icon
                icon="mdi:rocket-launch"
                class="h-5 w-5 text-purple-500 group-hover:text-purple-400" />
            </span>
            Create Account
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-gray-800 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-3 gap-3">
          <div>
            <a
              href="#"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600">
              <Icon icon="mdi:google" class="h-5 w-5" />
            </a>
          </div>
          <div>
            <a
              href="#"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600">
              <Icon icon="mdi:facebook" class="h-5 w-5" />
            </a>
          </div>
          <div>
            <a
              href="#"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600">
              <Icon icon="mdi:twitter" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const handleSignUp = () => {
  // Handle sign up logic here
  console.log("Sign up attempt", {
    name: name.value,
    email: email.value,
    password: password.value,
    passwordConfirmation: passwordConfirmation.value,
  });
};
</script>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style>
