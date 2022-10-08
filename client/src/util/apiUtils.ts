// product functions
export const getAllProducts = async () => {
    const response = await fetch("https://mikayla-spice-market-api.herokuapp.com/product");
    return response;
}

export const getByProductId = async (id: string) => {
    const response = await fetch(`https://mikayla-spice-market-api.herokuapp.com/product/${id}`);
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