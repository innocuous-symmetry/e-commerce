import { useState } from "react";
import { useSupabase } from "../../supabase/SupabaseContext";

interface FormInput {
    email: string
    password: string
}

export default function Register() {
    const supabase = useSupabase();
    const [input, setInput] = useState<FormInput>({email: "", password: ""});
    // const { handleRegister, authData } = useSupabase();

    const handleClick = () => {
        const { email, password } = input;
        console.log(input);
        // if (email && password) handleRegister!(email, password, authData);
    }

    const handleSupabase = () => {
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
            <button onClick={handleSupabase}>Supabase?</button>
        </section>
    )
}