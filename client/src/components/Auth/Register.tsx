import { useState } from "react";
import { useSupabase } from "../../supabase/SupabaseContext";
import { getSession, handleRegister } from "../../util/authHelpers";

interface FormInput {
    email: string
    password: string
}

export default function Register() {
    const [input, setInput] = useState<FormInput>({email: "", password: ""});
    const supabase = useSupabase();

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

            <button onClick={() => handleRegister(supabase, input)}>Register</button>
            <button onClick={() => getSession(supabase)}>Session</button>
        </section>
    )
}