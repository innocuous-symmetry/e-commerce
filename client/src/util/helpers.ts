import React from "react";
import { ActionType, userAction } from "../store/store_types";
import { Product } from "../types/main";

export const addToCart = (productData: Product, dispatch: React.Dispatch<userAction>): any => {
    dispatch({ type: ActionType.ADDTOCART, payload: productData });
}

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