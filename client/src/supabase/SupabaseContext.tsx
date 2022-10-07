import { createContext, FC, ReactNode, useContext } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseClient } from "./getSupabaseClient";

const SupabaseContext = createContext<SupabaseClient | undefined>(getSupabaseClient());

export const SupabaseProvider: FC<{children: ReactNode, value: SupabaseClient}> = ({ children }) => {
    return (
        <SupabaseContext.Provider value={getSupabaseClient()}>
            {children}
        </SupabaseContext.Provider>
    )
}

export const useSupabase = () => {
    const context = useContext(SupabaseContext);
    return context || "Context currently undefined";
}