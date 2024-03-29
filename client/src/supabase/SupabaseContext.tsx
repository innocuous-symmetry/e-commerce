import { createContext, FC, ReactNode, useContext } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const getSupabaseClient = () => {
    return createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
}

const SupabaseContext = createContext<SupabaseClient>(getSupabaseClient());

export const SupabaseProvider: FC<{children: ReactNode, value: SupabaseClient}> = ({ children }) => {
    return (
        <SupabaseContext.Provider value={getSupabaseClient()}>
            {children}
        </SupabaseContext.Provider>
    )
}

export const useSupabase = () => {
    const context = useContext(SupabaseContext) || undefined;
    return context;
}