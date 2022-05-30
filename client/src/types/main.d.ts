export type userInfo = {
    email: string;
    id?: number;
    name: string;
    password: string;
}

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
