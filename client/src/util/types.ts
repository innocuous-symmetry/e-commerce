import { Session, SupabaseClient, User } from "@supabase/supabase-js";

export interface AppState {
    supabase?: SupabaseClient
    session?: Session
    user?: User
}