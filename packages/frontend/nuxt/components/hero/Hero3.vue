<template>
  <section class="relative bg-gray-900 text-white">
    <div class="absolute inset-0">
      <img
        src="https://via.placeholder.com/1440x600"
        alt="Background"
        class="w-full h-full object-cover opacity-30" />
    </div>
    <div
      class="max-w-screen-xl mx-auto flex flex-col items-center justify-center py-20 relative z-10 text-center px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Transform Your Workflow
      </h1>
      <p class="text-lg mb-6 max-w-lg">
        Our SaaS solution streamlines your processes, making your team more
        efficient and productive.
      </p>
      <div class="flex space-x-4">
        <NuxtLink
          to="/get-started"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-300"
          >Get Started</NuxtLink
        >
        <NuxtLink
          to="/demo"
          class="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >View Demo</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
