<template>
  <section class="bg-white py-20">
    <div class="max-w-screen-xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">Our Features</h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="flex-1 md:w-1/2 md:pr-8 mb-8">
          <h3 class="text-2xl font-semibold mb-4">Feature Highlight</h3>
          <p class="text-gray-700 mb-4">
            A detailed explanation of the feature's benefits, usability, and how
            it stands out.
          </p>
          <NuxtLink to="/learn-more" class="text-blue-600 font-medium"
            >Learn More</NuxtLink
          >
        </div>
        <div class="">
          <img
            src="https://via.placeholder.com/400"
            alt="Feature Image"
            class="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
