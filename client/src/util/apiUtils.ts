// product functions
export const getAllProducts = async () => {
    const response = await fetch("https://mikayla-spice-market-api.herokuapp.com/product");
    return response;
}

export const getByProductId = async (id: string) => {
    const response = await fetch(`https://mikayla-spice-market-api.herokuapp.com/product/${id}`);
    return response;
}

export const updateUser = async (id: string, body: object) => {
    const response = await fetch(`https://mikayla-spice-market-api.herokuapp.com/users/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return response;
}

// order functions
export const getOrder = async () => {
    return;
}

// cart functions
export const getCart = async () => {
    return;
}