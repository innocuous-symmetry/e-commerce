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

// empty object templates for initial state
export const undefinedUser: userInfo = {
    email: '',
    name: '',
    password: '',
    headers: {}
}

export const emptyCart: Cart = {
    cartID: 0,
    userInfo: undefinedUser,
    checkedOut: false,
    contents: []
}
