import { SessionHeader } from "../store/store_types";

// user details and metadata
export type userInfo = {
    email: string;
    id?: number;
    name?: string;
    password: string;
    headers?: SessionHeader
}

export type LoginHeaders = {
    email: string,
    password: string
}

// product info
export type Product = {
    productID?: number,
    name: string,
    shortDescription?: string,
    longDescription?: string,
    categoryID: number,
    inventory: number
}

export type Category = {
    id?: number,
    name: string,
    shortDescription?: string,
    longDescription?: string
}

// user-specific cart and order details
export type Cart = {
    cartID: number,
    userInfo: userInfo,
    checkedOut: boolean,
    contents: Product[]
}

export type Order = {
    orderID: number,
    cartID: Cart.cartID,
    shipped: boolean,
    delivered: boolean
}
