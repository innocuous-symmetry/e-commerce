import React from "react";
import { ActionType, userAction } from "../store/store_types";
import { Product } from "../types/main";

export const addToCart = (productData: Product, dispatch: React.Dispatch<userAction>): any => {
    dispatch({ type: ActionType.ADDTOCART, payload: productData });
}