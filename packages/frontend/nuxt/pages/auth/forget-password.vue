<template>
    <div class="flex justify-center items-center py-20 px-10">
        <!-- Use v-model for bidirectional binding -->
        <ForgetPasswordForgetPassword3
            @submit="handleSubmit"
            v-model:email="email"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
const email = ref("");
const user = ref(null);
const { $auth } = useNuxtApp();

onMounted(async () => {
    user.value = await $auth.getUser();
});

const handleSubmit = () => {
    console.log(email.value);
    try {
        if (email.value !== user.value?.email) {
            useToast().error("Email does not match the current user");
            return;
        }
        $auth.resetPassword(email.value);
        useToast().success("Password reset link sent to your email");
    } catch (error) {
        useToast().error(
            error instanceof Error ? error.message : "Failed to send reset link"
        );
        console.error("Failed to send reset link:", error);
    }
};
</script>
