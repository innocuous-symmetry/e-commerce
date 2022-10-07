import { useState } from "react";
import { useSupabase } from "../../supabase/SupabaseContext";

interface FormInput {
    email: string
    password: string
}

export default function Register() {
    const [input, setInput] = useState<FormInput>({email: "", password: ""});
    const supabase = useSupabase();

    const handleClick = async () => {
        if (typeof supabase === "string") return;

        const { email, password } = input;
        if (email && password) {
            const { user, session, error} = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            console.log(user, session);
        }
    }

    const getSession = async () => {
        if (typeof supabase === "string") return;

        console.log(supabase.auth.session());
    }

    const checkSupabase = () => {
        if (supabase) console.log(supabase);
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
            <button onClick={checkSupabase}>Supabase?</button>
            <button onClick={getSession}>Session</button>
        </section>
    )
}