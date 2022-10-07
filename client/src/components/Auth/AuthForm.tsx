import { useSupabase } from "../../supabase/SupabaseContext";
import { FormInput, getSession, handleLogin, handleRegister } from "../../util/authHelpers";
import { AuthFormType } from "../../util/types";
import { useState } from "react";

const AuthForm: AuthFormType = ({ format }) => {
    const [input, setInput] = useState<FormInput>({ email: "", password: "" });
    const supabase = useSupabase();
    const formText = format == "login" ? "Login" : "Register";
    const formFunction = format == "login" ? () => handleLogin(supabase, input) : () => handleRegister(supabase, input);

    return (
        <section>
            <h1>{formText}</h1>

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

            <div className="auth-actions">
                <button onClick={formFunction}>{formText}</button>
                <button onClick={() => getSession(supabase)}>Session</button>
            </div>
        </section>
    )
}

export default AuthForm