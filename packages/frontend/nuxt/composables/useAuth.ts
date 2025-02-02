import { useSupabaseAuth } from "~/auth/supabase";
// import { usePostgresAuth } from "~/auth/postgres";
// import { useMysqlAuth } from "~/auth/mysql";

export function useAuth() {
    const runtimeConfig = useRuntimeConfig();
    const provider = runtimeConfig.public.authProvider;
    switch (provider) {
        case "supabase":
            return useSupabaseAuth();
        // case "postgres":
        //     return usePostgresAuth();
        // case "mysql":
        //     return useMysqlAuth();
        default:
            throw new Error(`Unsupported authentication provider: ${provider}`);
    }
}
