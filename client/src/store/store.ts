import { createContext } from "react";
import { ActionType,userAction, appState, undefinedUser, emptyCart } from './store_types';

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
            return {
                ...state,
                searchTerm: payload
            }
        default:
            return state;
    }
}

export const AppContext = createContext(initialState)
