<template>
  <footer class="bg-gray-800 text-white py-10">
    <div
      class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div class="text-center md:text-left mb-6 md:mb-0">
        <h3 class="text-2xl font-bold">Stay Connected</h3>
        <p class="text-gray-400 mt-2">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div class="mt-4">
          <input
            type="email"
            placeholder="Your email"
            class="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          <button
            class="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
        <div>
          <h4 class="font-semibold">Links</h4>
          <ul class="mt-2 space-y-1">
            <li>
              <NuxtLink to="/" class="hover:text-blue-500">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:text-blue-500">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="hover:text-blue-500"
                >Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-blue-500"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold">Follow Us</h4>
          <div class="flex space-x-4 mt-2">
            <a href="#" class="hover:text-blue-500">Facebook</a>
            <a href="#" class="hover:text-blue-500">Twitter</a>
            <a href="#" class="hover:text-blue-500">Instagram</a>
            <a href="#" class="hover:text-blue-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-6 border-t border-gray-700 pt-4">
      <p class="text-gray-400 text-sm">
        © 2024 Your Company. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
