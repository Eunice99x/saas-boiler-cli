<template>
  <footer class="bg-gray-900 text-white py-10">
    <div class="max-w-screen-xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="md:w-1/3 mb-6 md:mb-0">
          <h3 class="text-3xl font-bold">Connect With Us</h3>
          <p class="text-gray-400 mt-2">
            Join our community for exclusive updates.
          </p>
          <div class="flex mt-4">
            <input
              type="email"
              placeholder="Your email"
              class="p-2 rounded-l-lg border border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-800" />
            <button
              class="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        <div class="md:w-1/3 mb-6 md:mb-0 text-center">
          <h4 class="font-semibold text-lg">Quick Links</h4>
          <ul class="mt-2 space-y-1">
            <li>
              <NuxtLink to="/" class="hover:text-blue-400">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:text-blue-400">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="hover:text-blue-400"
                >Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-blue-400"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="md:w-1/3 text-center">
          <h4 class="font-semibold text-lg">Follow Us</h4>
          <div class="flex justify-center space-x-4 mt-2">
            <a href="#" class="hover:text-blue-400">Facebook</a>
            <a href="#" class="hover:text-blue-400">Twitter</a>
            <a href="#" class="hover:text-blue-400">Instagram</a>
            <a href="#" class="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="text-center mt-8 border-t border-gray-700 pt-4">
        <p class="text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
