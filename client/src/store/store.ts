import { createContext } from "react";
import { userInfo, Cart,  } from "../types/main";

// type definitions for reducer
export enum ActionType {
    GETALL,
    GETCATEGORY,
    REGISTERNEW,
    UPDATEONE,
    SEARCH,
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
const undefinedUser: userInfo = {
    email: '',
    name: '',
    password: ''
}

const emptyCart: Cart = {
    cartID: 0,
    userInfo: undefinedUser,
    checkedOut: false,
    contents: []
}

export const initialState: appState = {
    searchTerm: '',
    user: undefinedUser,
    cart: emptyCart
}

export const reducer = (state: appState, action: userAction) => {
    const { type, payload } = action;
    switch (type) {
        case ActionType.GETALL:
            return state;
        case ActionType.GETCATEGORY:
            return state;
        case ActionType.REGISTERNEW:
            return state;
        case ActionType.UPDATEONE:
            return state;
        case ActionType.SEARCH:
            let newState = {
                ...state,
                searchTerm: payload
            }
            state = newState;
            console.log(state.searchTerm);
            return state;
    }
}

export const AppContext = createContext(initialState)