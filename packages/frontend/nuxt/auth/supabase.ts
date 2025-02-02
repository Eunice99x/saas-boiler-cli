import { createClient } from "@supabase/supabase-js";
import { useRuntimeConfig } from "#app";

export function useSupabaseAuth() {
    const runtimeConfig = useRuntimeConfig();

    const supabaseUrl = runtimeConfig.public.supabase.url;
    const supabaseKey = runtimeConfig.public.supabase.key;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error(
            "Supabase URL or Key is missing. Check your runtimeConfig."
        );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const login = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        return data;
    };

    const signUp = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        return data;
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    };

    const getUser = async () => {
        const data = await supabase.auth.getUser();
        return data.data.user || null;
    };

    const resetPassword = async (email: string) => {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) throw error;
    };

    return { login, signUp, logout, getUser, resetPassword };
}
