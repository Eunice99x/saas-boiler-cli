<template>
  <footer class="bg-black text-gray-400 py-10">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 class="text-xl font-bold text-white">About Us</h3>
          <p class="mt-2">
            We are dedicated to providing the best services for our clients.
          </p>
          <div class="mt-4">
            <NuxtLink to="/about" class="text-blue-500 hover:underline"
              >Learn More</NuxtLink
            >
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-white">Useful Links</h3>
          <ul class="mt-2 space-y-1">
            <li>
              <NuxtLink to="/" class="hover:text-blue-500">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="hover:text-blue-500"
                >Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/faq" class="hover:text-blue-500">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-blue-500"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold text-white">Follow Us</h3>
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
      <p class="text-sm">© 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
