export const getAllUsers = async () => {
    let response = await fetch('http://localhost:8088/api/users', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
    
    return response;
}
