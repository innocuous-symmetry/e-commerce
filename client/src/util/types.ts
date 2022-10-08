import { FC, ReactNode } from "react";

// component types
export type AuthFormType = FC<{ format: string }>
export type ProductCardType = FC<{ data: ProductModel }>
export type UIButtonType = FC<UIButtonParams>
export type UICompWithChildren = FC<UICompChildrenParams>
export type UIGalleryType = FC<UIGalleryParams>

// definitions for component params
interface UIParams {
    additionalClasses?: string
}

interface UIButtonParams extends UIParams {
    onClick: (...params: any) => any
    children?: string
}

interface UICompChildrenParams extends UIParams { children: ReactNode }

interface UIGalleryParams extends UIParams {
    children: ReactNode
    columns: number
}

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