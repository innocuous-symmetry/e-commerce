import { useState } from "react";
import Page from "../../util/Page";

function LoginForm() {
    enum PassVisible {
        hide = 'password',
        show = 'text'
    }

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [showPass, setShowPass] = useState<PassVisible>(PassVisible.hide);

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

                    <p>Username is: {username}</p>
                    <p>Password is: {password}</p>
                </form>


            </section>

            <section className="link-to-register">
                <p>New here? <a href="/register">Click here</a> to register!</p>
            </section>
        </Page>
    )
}

export default LoginForm;