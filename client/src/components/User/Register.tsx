import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useAuth } from "../../supabase/SupabaseContext";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

interface FormInput {
    email: string
    password: string
}

export default function Register() {
    const [input, setInput] = useState<FormInput>({email: "", password: ""});
    const { handleRegister, setUserData, setUserSession } = useAuth();

    const handleClick = () => {
        const { email, password } = input;
        if (email && password) handleRegister(email, password, { setUserData, setUserSession });
    }

    return (
        <section>
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

            <button onClick={handleClick}>Register</button>
        </section>
    )
}