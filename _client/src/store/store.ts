import { createContext } from "react";
import { ActionType, userAction, appState, undefinedUser, emptyCart } from './store_types';

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
        case ActionType.USERLOGIN:
            return {
                ...state,
                user: payload
            }
        case ActionType.ADDTOCART:
            let foundItem = state.cart.contents.find(item => item.id === action.payload.id);
            if (!foundItem) {
                let updatedContents = state.cart.contents;
                updatedContents.push(action.payload);
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        contents: updatedContents
                    }
                }
            } else {
                let updatedState = state;
                let updatedItem = foundItem;

                if (updatedItem.quantity) {
                    updatedItem.quantity += 1;
                } else {
                    updatedItem.quantity = 2;
                }

                updatedState.cart.contents = updatedState.cart.contents.filter(item => item.id !== action.payload.id);
                updatedState.cart.contents.push(updatedItem);

                return updatedState;
            }
        case ActionType.UPDATESUBTOTAL:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    subtotal: action.payload
                }
            }
        default:
            return state;
    }
}

export const AppContext = createContext<appState | any>(initialState)
