import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Page from "../../util/Page";

interface FormInput {
    email: string
    password: string
}

const anonKey = import.meta.env.VITE_SUPABASE_KEY;
const projURL = import.meta.env.VITE_SUPABASE_URL;
const supabase = createClient(projURL, anonKey);

export default function SupabaseRegister() {
    const [input, setInput] = useState<FormInput>({email: "", password: ""});

    const handleRegister = async () => {
        const { user, session, error } = await supabase.auth.signUp(input);
        console.log(user, session, error);
    }

    return (
        <Page>
            <h1>Register</h1>

            <form>
                <div>
                    <label>Email:</label>
                    <input required type="text" onChange={(e) => setInput({...input, email: e.target.value})} />
                </div>
                <div>
                    <label>Password:</label>
                    <input required type="text" onChange={(e) => setInput({...input, password: e.target.value})} />
                </div>
            </form>

            <button onClick={handleRegister}>Register</button>
        </Page>
    )
}