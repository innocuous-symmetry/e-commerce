import { FormInput, getSession, handleLogin } from "../../util/authHelpers";
import { useSupabase } from "../../supabase/SupabaseContext";
import { useState } from "react"

export default function Login() {
    const [input, setInput] = useState<FormInput>({ email: "", password: "" });
    const supabase = useSupabase();

    return (
        <section>
            <h1>Login</h1>

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

            <button onClick={() => handleLogin(supabase, input)}>Login</button>
            <button onClick={() => getSession(supabase)}>Session</button>
        </section>
    )
}