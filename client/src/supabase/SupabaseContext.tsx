import { createContext, FC, ReactNode } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useSupabase } from "./useSupabase";

const SupabaseContext = createContext<SupabaseClient | undefined>(undefined!);

export const SupabaseProvider: FC<{children: ReactNode, value: SupabaseClient}> = ({ children }) => {
    return (
        <SupabaseContext.Provider value={useSupabase()}>
            {children}
        </SupabaseContext.Provider>
    )
}