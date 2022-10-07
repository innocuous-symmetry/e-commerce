import { useState } from "react"
import { useSupabase } from "../../supabase/SupabaseContext";

interface FormInput {
    email: string
    password: string
}

export default function Login() {
    const [input, setInput] = useState<FormInput>({ email: "", password: "" });
    const supabase = useSupabase();

    const handleLogin = async () => {
        if (typeof supabase === "string") return;
        if (!input.email || !input.password) return;
        console.log(input);

        const { user, session, error } = await supabase.auth.signIn({ email: input.email, password: input.password });
        if (error) throw error;
        console.log(user, session);
        return { user, session };
    }

    const getSession = async () => {
        if (typeof supabase === "string") return;
        console.log(supabase.auth.session());
    }

    return (
        <section>
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

            <button onClick={handleLogin}>Login</button>
            <button onClick={getSession}>Session</button>
        </section>
    )
}