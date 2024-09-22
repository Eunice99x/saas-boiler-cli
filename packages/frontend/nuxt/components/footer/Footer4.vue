<template>
  <footer class="bg-gray-900 text-white py-10">
    <div class="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row">
      <div class="md:w-1/2 mb-6 md:mb-0 flex flex-col items-start">
        <h3 class="text-3xl font-bold">Join Our Community</h3>
        <p class="mt-2">
          Get the latest updates and news directly to your inbox.
        </p>
        <div class="flex mt-4 w-full">
          <input
            type="email"
            placeholder="Your email address"
            class="p-3 rounded-l-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button
            class="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition duration-200">
            Subscribe
          </button>
        </div>
      </div>

      <div class="md:w-1/2 flex justify-around">
        <div class="flex flex-col">
          <h4 class="font-semibold text-lg">Resources</h4>
          <ul class="mt-2 space-y-1">
            <li>
              <NuxtLink to="/blog" class="hover:text-blue-400">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="hover:text-blue-400">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/support" class="hover:text-blue-400"
                >Support</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="flex flex-col">
          <h4 class="font-semibold text-lg">Company</h4>
          <ul class="mt-2 space-y-1">
            <li>
              <NuxtLink to="/about" class="hover:text-blue-400"
                >About Us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/careers" class="hover:text-blue-400"
                >Careers</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-blue-400"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center mt-8 border-t border-gray-700 pt-4">
      <p class="text-sm">© 2024 Your Company. All rights reserved.</p>
      <p class="text-xs mt-2">Privacy Policy | Terms of Service</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
