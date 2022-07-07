import { SessionHeader } from "../store/store_types";

// user details and metadata
export type userInfo = {
    firstName?: string
    lastName?: string
    email: string
    id?: number
    
    // NOTE: userInfo.name => displayName?
    name?: string
    password: string
    verifyPassword?: string
    headers?: SessionHeader
    created?: string
    modified?: string
}

export type LoginHeaders = {
    email: string,
    password: string
}

// product info
export type Product = {
    name: string,
    productID?: number,
    category?: string
    price?: string | number,
    // when item is included in cart
    id?: number,
    quantity?: number,
    shortDescription?: string,
    longDescription?: string,
    description?: string
    minidescription?: string
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
    contents: Product[],
    subTotal?: number
}

export type Order = {
    orderID: number,
    cartID: Cart.cartID,
    shipped: boolean,
    delivered: boolean
}
