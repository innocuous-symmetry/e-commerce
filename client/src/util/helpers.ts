import { Product } from "../types/main";

export const getSubtotal = (cartData: Product[]) => {
    let total = 0;

    if (!cartData) return;

    for (let item of cartData) {
        if (typeof item.price === 'number') {
            total += (item.price * (item.quantity || 1));
        } else {
            const converted = Number(item.price);
            total += (converted * (item.quantity || 1));
        }
    }

    return total;
}