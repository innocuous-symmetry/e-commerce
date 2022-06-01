import { useEffect, useState } from "react";
import { emptySessionHeader } from "../../store/store_types";
import { userInfo } from '../../types/main';
import { registerNewUser } from "../../util/apiUtils";
import Page from "../../util/Page";

function Register() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [verify, setVerify] = useState<string>('');
    const [warningText, setWarningText] = useState<string>('initial');

    const [userInput, setUserInput] = useState<userInfo>({
        name: '',
        email: '',
        password: '',
    })

    const [userData, setUserData] = useState<userInfo>();

    // checks password complexity
    useEffect(() => {
        if (!password) return;

        switch (true) {
            case (!verify):
                setWarningText('Verify your password below.');
                break;
            case (verify !== password):
                setWarningText('Passwords do not match.');
                break;
            case (verify && !verify.includes('!')):
                setWarningText('Password does not meet safety criteria.');
                break;
            case (verify === password):
                setWarningText('');
                break;
            default:
                throw new Error("Password switch case is faulty");
        }
    }, [password, verify]);

    // updates user info object on each render
    useEffect(() => {
        let newInfo: userInfo = {
            name: name,
            email: email,
            password: password,
            headers: emptySessionHeader
        }

        setUserData(newInfo);
    }, [name, email, password]);

    // interrupts rendering loop by setting warning text on password data
    useEffect(() => {
        if (warningText === '') {
            setWarningText('Conditions met!');
        }
    }, [userData, warningText]);

    // allows registration submission if warning text has correct value and userData is defined with all required values
    const handleRegistration = async () => {
        if (!userData) return;
        warningText === "Conditions met!" && await registerNewUser(userData);

        setName('');
        setEmail('');
        setPassword('');
        setVerify('');
    }

    return (
        <Page classes="register light-page">
            <h1>Thanks for your interest! Enter the info below to register:</h1>

            <form>
                <div className="form-row">
                    <label htmlFor="first-name-register">First Name:</label>
                    <input required type="text" id="name-register" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="form-row">
                    <label htmlFor="last-name-register">Last Name:</label>
                    <input required type="text" id="last-name-register" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>


                <div className="form-row">
                    <label htmlFor="email-register">Email address:</label>
                    <input type="email" id="email-register" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <p style={(warningText === 'initial') ? {display: 'none'} : {display: 'block'}}>{warningText}</p>

                <div className="form-row">
                    <label htmlFor="password-register" style={(warningText && warningText !== 'Conditions met!') ? {color: 'red'} : {color: 'green'}}>
                        Password:
                    </label>
                    <input type="password" id="password-register" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-row">
                    <label htmlFor="password-verify" style={(warningText && warningText !== 'Conditions met!') ? {color: 'red'} : {color: 'green'}}>
                        Re-enter password:
                    </label>
                    <input type="password" id="password-verify" value={verify} onChange={(e) => setVerify(e.target.value)}/>
                </div>
            </form>

            <button disabled={!userData} onClick={handleRegistration}>Create my account</button>
        </Page>
    );
}

export default Register;
