import { userInfo, Cart } from '../types/main';

// type definitions for reducer
export enum ActionType {
    GETALL,
    GETCATEGORY,
    REGISTERNEW,
    UPDATEONE,
    SEARCH,
    USERLOGIN
}

export interface userAction {
    type: ActionType;
    payload: any;
}

export interface appState {
    searchTerm: string,
    user: userInfo,
    cart: Cart
}

export type SessionHeader = {
    authenticated: boolean
    cookie: {
        expires: string
        httpOnly: boolean
        originalMaxAge: number
        path: string
        secure: boolean
    }
    user?: userInfo
}

// empty object templates for initial state
export const undefinedUser: userInfo = {
    email: '',
    name: '',
    password: '',
}

export const emptyCart: Cart = {
    cartID: 0,
    userInfo: undefinedUser,
    checkedOut: false,
    contents: []
}

export const emptySessionHeader: SessionHeader = {
    authenticated: false,
    cookie: {
        expires: "",
        httpOnly: false,
        originalMaxAge: 0,
        path: "",
        secure: false,
    },
    user: undefinedUser
}