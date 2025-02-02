<template>
    <div
        class="bg-gray-700 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md"
    >
        <div class="flex flex-col items-center text-center mb-8">
            <Icon
                icon="heroicons-outline:lock-closed"
                class="text-purple-500 text-5xl"
            ></Icon>
            <h2 class="text-3xl text-white font-semibold mt-4">
                Forgot Password?
            </h2>
            <p class="text-gray-400 mt-2">
                Enter your email to reset your password
            </p>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="mb-6">
                <!-- Bind to modelValue and emit updates -->
                <input
                    type="email"
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:ring focus:ring-purple-300"
                    placeholder="Your email"
                    required
                />
            </div>
            <button
                type="submit"
                class="w-full flex justify-center items-center py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
                <Icon
                    icon="mdi:arrow-right-circle-outline"
                    class="w-8 h-8 mr-2"
                ></Icon>
                Reset Password
            </button>
        </form>
        <div class="text-center mt-6">
            <nuxt-link to="/login" class="text-purple-400 hover:underline"
                >Back to Login</nuxt-link
            >
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

// Define props and emits for v-model
defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

defineEmits(["update:modelValue", "submit"]);
</script>
