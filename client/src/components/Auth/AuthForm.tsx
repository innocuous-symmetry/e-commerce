import { FormInput, getSession, handleLogin, handleRegister } from "../../util/authHelpers";
import { useSupabase } from "../../supabase/SupabaseContext";
import { AuthFormType } from "../../util/types";
import { loginHTML, registerHTML } from "./authExtraText";

import { useState } from "react";
import Button from "../_ui/Button/Button";
import Page from "../_ui/Page/Page";

const AuthForm: AuthFormType = ({ format }) => {
    const [input, setInput] = useState<FormInput>({ email: "", password: "" });
    const supabase = useSupabase();
    const formText = format == "login" ? "Login" : "Register";
    const formFunction = format == "login" ? () => handleLogin(supabase, input) : () => handleRegister(supabase, input);
    const formHTML = format == "login" ? loginHTML : registerHTML;

    return (
        <Page>
            <h1>{formText}</h1>
            {formHTML}

            <form className="auth-form">
                <div className="form-row">
                    <label htmlFor="auth-form-email">Email:</label>
                    <input id="auth-form-email" required type="text" onChange={(e) => setInput({...input, email: e.target.value})} />
                </div>
                <div className="form-row">
                    <label htmlFor="auth-form-password">Password:</label>
                    <input id="auth-form-password" required type="password" onChange={(e) => setInput({...input, password: e.target.value})} />
                </div>
            </form>

            <div className="auth-actions">
                <Button onClick={formFunction}>{formText}</Button>
                <Button onClick={() => getSession(supabase)}>Session</Button>
            </div>
        </Page>
    )
}

export default AuthForm