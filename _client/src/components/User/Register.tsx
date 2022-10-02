import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialState, reducer } from "../../store/store";
import { ActionType, emptySessionHeader } from "../../store/store_types";
import { userInfo } from '../../types/main';
import { handleLogin, registerNewUser, unwrapLogin } from "../../util/apiUtils";
import Page from "../../util/Page";

function Register() {
    const formInitialState: userInfo = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        verifyPassword: '',
        created: '',
        headers: emptySessionHeader
    }

    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [userInput, setUserInput] = useState(formInitialState);
    const [warningText, setWarningText] = useState('initial');

    // checks password complexity
    useEffect(() => {
        if (!userInput.password) return;

        switch (true) {
            case (!userInput.verifyPassword):
                setWarningText('Verify your password below.');
                break;
            case (userInput.verifyPassword !== userInput.password):
                setWarningText('Passwords do not match.');
                break;
            case (userInput.verifyPassword && !userInput.verifyPassword.includes('!')):
                setWarningText('Password does not meet safety criteria.');
                break;
            case (userInput.verifyPassword === userInput.password):
                setWarningText('');
                break;
            default:
                throw new Error("Password switch case is faulty");
        }
    }, [userInput.password, userInput.verifyPassword]);

    // interrupts rendering loop by setting warning text on password data
    useEffect(() => {
        if (warningText === '') {
            setWarningText('Conditions met!');
        }
    }, [userInput, warningText]);

    // allows registration submission if warning text has correct value and userData is defined with all required values
    const handleRegistration = async () => {
        if (userInput === formInitialState) return;
        if (warningText !== "Conditions met!") return;
        
        let register = await registerNewUser(userInput);

        if (register.ok) {
            setUserInput(formInitialState);
            navigate('/');
        } else {
            console.log('Something went wrong');
        }
    }

    return (
        <Page classes="register light-page">
            <h1>Thanks for your interest! Enter the info below to register:</h1>

            <form>
                <div className="form-row">
                    <label htmlFor="first-name-register">First Name:</label>
                    <input required type="text" id="name-register" value={userInput.firstName} onChange={(e) => setUserInput({...userInput, firstName: e.target.value})}/>
                </div>

                <div className="form-row">
                    <label htmlFor="last-name-register">Last Name:</label>
                    <input required type="text" id="last-name-register" value={userInput.lastName} onChange={(e) => setUserInput({...userInput, lastName: e.target.value})}/>
                </div>


                <div className="form-row">
                    <label htmlFor="email-register">Email address:</label>
                    <input required type="email" id="email-register" value={userInput.email} onChange={(e) => setUserInput({...userInput, email: e.target.value})}/>
                </div>

                <p style={(warningText === 'initial') ? {display: 'none'} : {display: 'block'}}>{warningText}</p>

                <div className="form-row">
                    <label htmlFor="password-register" style={(warningText && warningText !== 'Conditions met!') ? {color: 'red'} : {color: 'green'}}>
                        Password:
                    </label>
                    <input required type="password" id="password-register" value={userInput.password} onChange={(e) => setUserInput({...userInput, password: e.target.value})}/>
                </div>
                <div className="form-row">
                    <label htmlFor="password-verify" style={(warningText && warningText !== 'Conditions met!') ? {color: 'red'} : {color: 'green'}}>
                        Re-enter password:
                    </label>
                    <input required type="password" id="password-verify" value={userInput.verifyPassword} onChange={(e) => setUserInput({...userInput, verifyPassword: e.target.value})}/>
                </div>
            </form>

            <button disabled={warningText !== 'Conditions met!'} onClick={handleRegistration}>Create my account</button>
        </Page>
    );
}

export default Register;
