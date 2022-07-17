import { userInfo } from '../types/main';
const APISTRING = 'http://localhost:8088/api/';

export const getAllUsers = async () => {
    let serverCall = await fetch(APISTRING + 'users')
    .then(res => res.json());

    return serverCall;
}

export const getOneUser = async (email: string) => {
    let serverCall = await fetch(`${APISTRING}users?email=${email}`)
    .then(res => res.json());

    return serverCall;
}

export const registerNewUser = async (user: userInfo) => {
    let serverCall = await fetch(APISTRING + 'register', {
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
    const url = APISTRING + 'login';
    console.log(url);
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    });

    return res;
}

export const unwrapLogin = async (email: string, password: string) => {
    const response = await handleLogin(email, password);
    const { session, userProfile } = await response.json();

    return { session, userProfile };
}

export const getAllProducts = async () => {
    let serverCall = await fetch(APISTRING + 'products', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());

    return serverCall;
}

export const getProductDetails = async (productID: string) => {
    let serverCall = await fetch(`${APISTRING}products/${productID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());

    return serverCall;
}
