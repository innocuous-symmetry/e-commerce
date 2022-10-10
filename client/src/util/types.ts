import { FC, ReactNode } from "react";

// component types
export type AuthFormType = FC<{ format: string }>
export type ProductCardType = FC<{ data: ProductModel }>
export type UIButtonType = FC<UIButtonParams>
export type UICardType = FC<UICardParams>
export type UIGalleryType = FC<UIGalleryParams>
export type UIPageType = FC<UIPageParams>

// definitions for component params
export interface UIParams {
    additionalClasses?: string
}

interface UIButtonParams extends UIParams {
    onClick: (...params: any) => any
    children?: string
}

interface UICardParams extends UIParams {
    children?: ReactNode
}

interface UIGalleryParams extends UIParams {
    children: ReactNode
    columns: number
}

interface UIPageParams extends UIParams { children: ReactNode }

// data models

export interface ProductModel extends UICardParams {
    id: number
    name: string
    description: string
    categoryid: number
    regionid: number
    price: number | string
    inventory: number
}