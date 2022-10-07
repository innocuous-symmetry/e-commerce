export const getAllProducts = async () => {
    const response = await fetch("https://mikayla-spice-market-api.herokuapp.com/product");
    return response;
}