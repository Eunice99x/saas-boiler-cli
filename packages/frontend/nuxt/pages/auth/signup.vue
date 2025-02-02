<template>
    <div class="flex justify-center items-center py-20 px-10">
        <SignupSignup3
            v-bind:credentials="credentials"
            @submitSignup="handleSignup"
        />
    </div>
</template>

<script lang="ts" setup>
import { useToast } from "vue-toast-notification";
const credentials = ref({ email: "", password: "" });

const { $auth } = useNuxtApp();

const handleSignup = async () => {
    try {
        const { email, password } = credentials.value;

        const data = await $auth.signUp(email, password);

        useToast().success("User signed up");
        navigateTo("/auth/login");
    } catch (error) {
        useToast().error(`${error instanceof Error ? error.message : error}`);
        console.error(
            "Error signing up:",
            error instanceof Error ? error.message : error
        );
    }
};
</script>

<style></style>
