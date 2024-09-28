<template>
  <section class="bg-gray-900 text-white py-20">
    <div
      class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-4">
      <!-- Text Content -->
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Your SaaS Solution Starts Here
        </h1>
        <p class="text-lg mb-6">
          Transform your business with our powerful, flexible, and easy-to-use
          platform tailored for modern developers.
        </p>
        <div class="flex space-x-4">
          <NuxtLink
            to="/get-started"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
            >Get Started</NuxtLink
          >
          <NuxtLink
            to="/features"
            class="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 rounded-lg transition duration-300"
            >Learn More</NuxtLink
          >
        </div>
      </div>

      <!-- Image -->
      <div class="md:w-1/2">
        <img
          src="https://via.placeholder.com/400"
          alt="Hero Image"
          class="rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
