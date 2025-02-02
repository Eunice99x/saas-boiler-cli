<template>
    <div class="flex justify-center items-center py-20 px-10">
        <!-- Dynamically call the chosen login component -->
        <LoginLogin3 v-model:credentials="credentials" @submit="handleLogin" />
    </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toast-notification";
import { ref } from "vue";

const { $auth } = useNuxtApp();

// Bidirectional variable for child to parent communication
const credentials = ref({ email: "", password: "" });

const handleLogin = async () => {
    try {
        const user = await $auth.login(
            credentials.value.email,
            credentials.value.password
        );
        useToast().success("Logged in successfully");
        // save user data

        // Redirect to the home page
        navigateTo("/");
    } catch (error) {
        useToast().error(
            error instanceof Error ? error.message : "Login failed"
        );
        console.error("Login failed:", error);
    }
};
</script>
