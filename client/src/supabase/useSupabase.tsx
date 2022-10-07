import { createClient } from "@supabase/supabase-js";

export const useSupabase = () => {
    return createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
}