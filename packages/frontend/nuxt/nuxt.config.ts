// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxt/image",
        "@nuxt/icon",
        "@nuxtjs/supabase",
    ],

    runtimeConfig: {
        public: {
            authProvider: process.env.AUTH_PROVIDER,
        },
    },

    supabase: {
        redirectOptions: {
            login: "/auth/login",
            callback: "/",
            include: undefined,
            exclude: [
                "/auth/signup",
                "/",
                "/auth/confirm",
                "/auth/forget-password",
            ], //exclude routes from redirect
            cookieRedirect: false, // enable cookie based redirect
        },
    },

    tailwindcss: {
        configPath: "tailwind.config.js", // Ensure Nuxt uses the correct Tailwind config file
    },

    compatibilityDate: "2025-01-26",
});
