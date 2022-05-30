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
}

export const handleLogin = async (email: string, password: string) => {
    let serverCall = await fetch('http://localhost:8088/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    });

    if (serverCall.ok) return serverCall;
}
