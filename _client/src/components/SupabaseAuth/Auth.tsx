import Page from "../../util/Page";
import { createClient } from '@supabase/supabase-js';
import { Link } from "react-router-dom";

const anonKey = import.meta.env.VITE_SUPABASE_KEY;
const projURL = import.meta.env.VITE_SUPABASE_URL;
const supabase = createClient(projURL, anonKey);

export default function Auth() {
    const handleRegister = async () => {
        await supabase.auth.signUp({});
    }

    const handleLogin = async () => {
        await supabase.auth.signIn({});
    }

    return (
        <Page>
            <h1>Supabase user auth portal</h1>

            <Link to="/supabase/supabase-auth/login">Login</Link>
            <Link to="/supabase/supabase-auth/register">Register</Link>
        </Page>
    )
}