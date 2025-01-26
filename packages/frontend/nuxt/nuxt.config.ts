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

    supabase: {
        redirectOptions: {
            login: "/auth/login",
            callback: "/confirm",
            include: undefined,
            exclude: ["/auth/signup", "/", "/auth/confirm"], //exclude routes from redirect
            cookieRedirect: true, // enable cookie based redirect
        },
    },

    tailwindcss: {
        configPath: "tailwind.config.js", // Ensure Nuxt uses the correct Tailwind config file
    },

    compatibilityDate: "2025-01-26",
});
