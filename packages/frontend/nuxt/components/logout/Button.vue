<template>
    <button
        @click="logout"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
        Logout
    </button>
</template>

<script lang="ts" setup>
import { useToast } from "vue-toast-notification";

const { $auth } = useNuxtApp();

const logout = async () => {
    try {
        await $auth.logout();
        useToast().success("Logged out successfully");
        navigateTo("/auth/login");
    } catch (error) {
        useToast().error(
            error instanceof Error ? error.message : "Logout failed"
        );
        console.error("Logout failed:", error);
    }
};
</script>

<style></style>
