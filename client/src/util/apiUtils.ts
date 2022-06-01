import { userInfo } from '../types/main';

export const getAllUsers = async () => {
    let serverCall = await fetch('http://localhost:8088/users')
    .then(res => res.json());

    return serverCall;
}

export const getOneUser = async (email: string) => {
    let serverCall = await fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json());

    return serverCall;
}

export const registerNewUser = async (user: userInfo) => {
    let serverCall = await fetch('http://localhost:8088/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
  
    if (serverCall.ok) console.log('User added successfully.');
    return serverCall;
}

export const handleLogin = async (email: string, password: string) => {
    let serverCall = await fetch('http://localhost:8088/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    });

    return serverCall;
}

export const unwrapLogin = async (email: string, password: string) => {
    const response = await handleLogin(email, password);
    const { session, userProfile } = await response.json();

    return { session, userProfile };
}

export const getAllProducts = async () => {
    let serverCall = await fetch('http://localhost:8088/products', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());

    return serverCall;
}
