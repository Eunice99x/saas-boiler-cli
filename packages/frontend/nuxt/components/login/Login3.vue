<template>
    <div class="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
            Welcome Back
        </h2>
        <form @submit.prevent="$emit('submit')">
            <div class="mb-4">
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                        type="email"
                        id="email"
                        v-model="credentials.email"
                        required
                        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                        placeholder="you@example.com"
                    />
                </div>
            </div>
            <div class="mb-6">
                <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                        type="password"
                        id="password"
                        v-model="credentials.password"
                        required
                        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                        placeholder="••••••••"
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    class="w-full py-2 px-4 text-white bg-purple-600 rounded-md"
                >
                    Sign In
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Props and emits for communication
defineProps({
    credentials: Object,
});
defineEmits(["submit"]);
</script>
