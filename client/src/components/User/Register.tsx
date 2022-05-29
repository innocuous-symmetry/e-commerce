import { useEffect, useState } from "react";
import { userInfo } from '../../types/main';
import { registerNewUser } from "../../util/apiUtils";
import Page from "../../util/Page";

function Register() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [verify, setVerify] = useState<string>('');
    const [warningText, setWarningText] = useState<string>('initial');

    const [userData, setUserData] = useState<userInfo>({email: '', name: '', password: ''});

    const conditions = [name, email, password, verify];

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

    // checks that all conditions for registration have been met
    useEffect(() => {
        let evaluating = true;

        if (!(conditions.includes('')) && warningText === '') {
            evaluating = false;
        }

        if (!evaluating) {
            const userEntry: userInfo = {
                name: name,
                email: email,
                password: password
            }
    
            console.log(userEntry);
            setUserData(userEntry);

            setWarningText('Conditions met!');
        }
    }, [conditions, warningText, userData, name, email]);

    const handleRegistration = async () => {
        userData && await registerNewUser(userData);

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
                    <label htmlFor="name-register">Name:</label>
                    <input type="text" id="name-register" value={name} onChange={(e) => setName(e.target.value)}/>
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
