import { FC } from "react";

// component types
export type AuthFormType = FC<{ format: string }>
export type ProductCardType = FC<{ data: ProductModel }>

// data models

export interface ProductModel {
    id: number
    name: string
    description: string
    categoryid: number
    regionid: number
    price: number | string
    inventory: number
}