import { SupabaseClient } from "@supabase/supabase-js";

export interface FormInput {
    email: string
    password: string
}

export const handleLogin = async (supabase: SupabaseClient | undefined, input: FormInput) => {
    if (!supabase || !input.email || !input.password) return;
    console.log(input);

    const { user, session, error } = await supabase.auth.signIn({ email: input.email, password: input.password });
    if (error) throw error;
    console.log(user, session);
    return { user, session };
}

export const handleRegister = async (supabase: SupabaseClient | undefined, input: FormInput) => {
    if (!supabase) return;

    const { email, password } = input;
    if (email && password) {
        const { user, session, error} = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        console.log(user, session);
    }
}

export const getSession = async (supabase: SupabaseClient | undefined) => {
    if (!supabase) return;
    console.log(supabase.auth.session());
}
