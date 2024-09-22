<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="flex flex-col md:flex-row md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <!-- include your logo in src -->
            <img
              src="https://your-logo-url.com/logo.svg"
              class="h-8 me-3"
              alt="Logo" />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Your Company</span
            >
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Documentation</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">API Reference</a>
              </li>
              <li><a href="#" class="hover:underline">Community Forum</a></li>
            </ul>
          </div>

          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow Us
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Facebook</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Twitter</a>
              </li>
              <li><a href="#" class="hover:underline">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li><a href="#" class="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="#" class="hover:underline">Your Company™</a>. All
          Rights Reserved.
        </span>
        <div class="flex mt-4 sm:mt-0 space-x-4">
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon icon="mdi:twitter" class="w-4 h-4" />
            <span class="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon icon="mdi:github" class="w-4 h-4" />
            <span class="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon icon="mdi:facebook" class="w-4 h-4" />
            <span class="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon icon="mdi:linkedin" class="w-4 h-4" />
            <span class="sr-only">LinkedIn profile</span>
          </a>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <Icon icon="mdi:instagram" class="w-4 h-4" />
            <span class="sr-only">Instagram profile</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
/* Add any custom styles if necessary */
</style>
