import { userInfo } from '../types/main';

export const getAllUsers = async () => {
    let serverCall = await fetch('http://localhost:8088/users')
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
  
    if (serverCall.ok) return 'User added successfully.';
}