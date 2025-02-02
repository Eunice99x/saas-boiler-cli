<template>
    <header
        class="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg"
    >
        <div
            class="max-w-screen-xl mx-auto flex items-center justify-between p-4"
        >
            <!-- Logo -->
            <NuxtLink
                to="/"
                class="flex items-center space-x-3 rtl:space-x-reverse"
            >
                <img
                    src="https://www.fmt.se/wp-content/uploads/2023/02/logo-placeholder-image.png"
                    class="h-10"
                    alt="Logo"
                />
                <span class="self-center text-2xl font-bold">BrandName</span>
            </NuxtLink>

            <!-- Links -->
            <nav class="hidden md:flex space-x-8 rtl:space-x-reverse">
                <NuxtLink
                    href="/"
                    class="hover:text-blue-400 transition duration-300"
                    >Home</NuxtLink
                >
                <NuxtLink
                    href="/services"
                    class="hover:text-blue-400 transition duration-300"
                    >Services</NuxtLink
                >
                <NuxtLink
                    href="/about"
                    class="hover:text-blue-400 transition duration-300"
                    >About</NuxtLink
                >
                <NuxtLink
                    href="/contact"
                    class="hover:text-blue-400 transition duration-300"
                    >Contact</NuxtLink
                >
            </nav>

            <!-- CTA Button -->
            <div class="flex space-x-3 rtl:space-x-reverse">
                <button
                    v-if="!user"
                    type="button"
                    class="hidden md:inline-block text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition duration-300"
                >
                    Sign Up
                </button>
                <LogoutButton v-else class="max-md:hidden" />
                <button
                    type="button"
                    class="inline-flex md:hidden text-gray-300 hover:text-white focus:outline-none"
                    @click="toggleMenu"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="menu" class="md:hidden bg-gray-800 p-4">
            <ul class="space-y-4">
                <li>
                    <NuxtLink
                        href="/"
                        class="block py-2 text-white hover:text-blue-400"
                        >Home</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        href="/services"
                        class="block py-2 text-white hover:text-blue-400"
                        >Services</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        href="/about"
                        class="block py-2 text-white hover:text-blue-400"
                        >About</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        href="/contact"
                        class="block py-2 text-white hover:text-blue-400"
                        >Contact</NuxtLink
                    >
                </li>
                <li>
                    <button
                        v-if="!user"
                        type="button"
                        class="block w-full text-left py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
                    >
                        Sign Up
                    </button>
                    <LogoutButton v-else />
                </li>
            </ul>
        </div>
    </header>
</template>

<script lang="ts" setup>
const menu = ref(false);
const toggleMenu = () => (menu.value = !menu.value);

const { $auth } = useNuxtApp();
const user = ref(null);

onMounted(async () => {
    user.value = await $auth.getUser();
});
</script>

<style scoped></style>
