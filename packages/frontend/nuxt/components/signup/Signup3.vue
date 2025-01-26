<template>
    <div class="max-w-md w-full space-y-8 relative">
        <div class="relative bg-gray-800 shadow-xl rounded-3xl p-10">
            <h2 class="text-center text-3xl font-extrabold text-white">
                Join Our Community
            </h2>
            <form
                class="mt-8 space-y-6"
                @submit.prevent="$emit('submitSignup')"
            >
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <label for="email-address" class="sr-only"
                            >Email address</label
                        >
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            v-model="credentials.email"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-700"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            v-model="credentials.password"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-700"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        class="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:ring-2"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
defineProps({
    credentials: Object, // Props passed from parent (signup.vue)
});

defineEmits(["submitSignup"]); // Emit custom events for parent actions
</script>

<style scoped>
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.bg-gradient-to-r {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
}
</style>
