import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../store/store";
import { ActionType } from "../../store/store_types";
import { userInfo } from "../../types/main";
import { handleLogin } from "../../util/apiUtils";
import Page from "../../util/Page";

enum PassVisible {
    hide = 'password',
    show = 'text'
}

function LoginForm() {
    const [state, dispatch] = useContext(AppContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(PassVisible.hide);
    const [toDispatch, setToDispatch] = useState<userInfo>();

    const displaySession = async () => {
        if (username === '' || password === '') return;
        
        const response = await handleLogin(username, password);
        const json = await response?.json();

        if (json) {
            const { session, userProfile } = json;
            let thisUser: userInfo = {
                id: userProfile.id,
                email: userProfile.email,
                password: userProfile.password,
                headers: session
            }

            setToDispatch(thisUser);
        }
    }

    useEffect(() => {
        if (!toDispatch) return;
        dispatch({ type: ActionType.USERLOGIN, payload: toDispatch });
    }, [toDispatch]);

    return (
        <Page classes="login light-page">
            <h1>Welcome back to my store!</h1>

            <section className="login-form-section">
                <div className="oauth-section">
                    <p>Log in with a third party provider:</p>
                </div>

                <h2>Have a log in? Use the form below:</h2>

                <form>
                    <div>
                        <label htmlFor="username-login">Username:</label>
                        <input
                            type="text"
                            id="username-login"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password-login">Password:</label>
                        <input
                            type={showPass}
                            id="password-login"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button"
                            onClick={() => setShowPass((showPass === PassVisible.hide) ? PassVisible.show : PassVisible.hide)}
                        >Show password</button>
                    </div>
                </form>

                <button onClick={displaySession}>Log In</button>
            </section>

            <section className="link-to-register">
                <p>New here? <a href="/register">Click here</a> to register!</p>
            </section>
        </Page>
    )
}

export default LoginForm;