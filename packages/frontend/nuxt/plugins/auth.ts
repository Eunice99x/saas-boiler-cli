import { defineNuxtPlugin } from "#app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtPlugin((nuxtApp) => {
    const auth = useAuth();
    nuxtApp.provide("auth", auth);
});
