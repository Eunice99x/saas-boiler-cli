<template>
    <div class="flex justify-center items-center py-20 px-10">
        <SignupSignup3
            v-bind:credentials="credentials"
            @submitSignup="handleSignup"
        />
    </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();
const credentials = ref({ email: "", password: "" });

const handleSignup = async () => {
    const { email, password } = credentials.value;

    if (!email || !password) {
        return console.error("Please provide email and password");
    }

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        console.error("Error signing up:", error.message);
    } else {
        console.log("User signed up:", data);
    }
};
</script>

<style></style>
