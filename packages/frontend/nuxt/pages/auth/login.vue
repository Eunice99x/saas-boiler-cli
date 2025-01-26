<template>
    <div class="flex justify-center items-center py-20 px-10">
        <!-- Dynamically call the chosen login component -->
        <LoginLogin3 v-model:credentials="credentials" @submit="handleLogin" />
    </div>
</template>

<script setup lang="ts">
// Supabase clientuseSupabaseClient
const supabase = useSupabaseClient();

// Bidirectional variable for child to parent communication
const credentials = ref({ email: "", password: "" });

// Handle login authentication
const handleLogin = async () => {
    const { $toast } = useNuxtApp();
    const { email, password } = credentials.value;

    if (!email || !password) {
        return console.error("Please provide email and password");
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        $toast.error(error.message);
        console.error("Error logging in:", error.message);
    } else {
        $toast.success("User logged in");
        // Redirect to dashboard
        await navigateTo("/");
        console.log("User logged in:", data);
    }
};
</script>
