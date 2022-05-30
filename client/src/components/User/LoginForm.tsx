import { useState, useReducer } from "react";
import { reducer, initialState } from "../../store/store";
import { ActionType, undefinedUser } from "../../store/store_types";
import { userInfo, LoginHeaders } from "../../types/main";
import { handleLogin, getOneUser } from "../../util/apiUtils";
import Page from "../../util/Page";

enum PassVisible {
    hide = 'password',
    show = 'text'
}

function LoginForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(PassVisible.hide);

    const displaySession = async () => {
        if (username === '' || password === '') return;
        
        const response = await handleLogin(username, password);
        const json = await response?.json();

        if (json) {
            console.log(json);
            console.log(json.user);

            let thisUser: userInfo = {
                email: json.user.email,
                password: json.user.password,
                headers: json
            }

            dispatch({ type: ActionType.UPDATEONE, payload: thisUser });
        }
    }

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