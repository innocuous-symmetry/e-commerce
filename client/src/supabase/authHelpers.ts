import { SupabaseClient } from "@supabase/supabase-js";
import { ReactAuthData, useAuth } from "./SupabaseContext";

export const handleRegister = async (email: string, password: string, authData: ReactAuthData) => {
    const { setUserData } = authData;
    const { supabase } = useAuth();
    
    const { user, session, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    if (user) setUserData(user);

    return { user, session, error }
    // SEE USER RETURN TYPE BELOW
    /**
     * object {
     *    app_metadata: {
     *        provider: string
     *        providers: string[]
     *    }
     *    aud: string
     *    confirmation_sent_at: string
     *    created_at: string
     *    email: string
     *    id: string
     *    identities: Identity[] // to define below
     *    phone: string?
     *    role: string
     *    updated_at: string
     *    user_metadata: object?
     * }
     * 
     * Identity = {
     *    created_at,
     *    id,
     *    identity_data: { sub: string },
     *    last_sign_in_at: string
     *    provider: email
     *    updated_at: string
     *    user_id: string
     * }
     */
}

export const handleEmailLogin = async (email: string, password: string, authData: ReactAuthData) => {
    const { setUserData, setUserSession } = authData;
    const { supabase } = useAuth();

    const { user, session, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    if (user) setUserData(user);
    if (session) setUserSession(session);

    return { user, session, error };
}