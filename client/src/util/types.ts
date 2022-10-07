import { Session, SupabaseClient, User } from "@supabase/supabase-js";
import { FC } from "react";

export interface AppState {
    supabase?: SupabaseClient
    session?: Session
    user?: User
}

export type AuthFormType = FC<{ format: string }>