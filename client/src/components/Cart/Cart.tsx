import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/store";
import { ActionType } from "../../store/store_types";
import { Product } from '../../types/main';
import { getSubtotal } from "../../util/helpers";
import Page from "../../util/Page";
import CartItem from "./CartItem";

function Cart() {
    const [state, dispatch] = useContext(AppContext);
    const [contents, setContents] = useState<JSX.Element>();
    const [data, setData] = useState<any>();

    useEffect(() => {
        if (!state.cart.contents) return;

        let newProducts: Array<Product> = [];
        for (let item of state.cart.contents) {
            const withQuantity = {
                ...item,
                quantity: 1
            }
            const foundItem = newProducts.findIndex((res) => res.name === item.name);
            if (foundItem === -1) {
                newProducts.push(withQuantity);
            } else {
                // @ts-ignore
                newProducts[foundItem].quantity += 1;
            }
        }

        for (let item of newProducts) {
            if (typeof item.quantity !== 'number') {
                throw new Error("Quantity is possibly undefined in Cart.tsx");
            }
            item.quantity = item.quantity / 2;
        }

        setData(newProducts);
    }, [state]);

    /**
     * PROBLEMATIC USEEFFECT BELOW
     * LOOP BEHAVIOR ON DISPATCH
     */
    
    useEffect(() => {
        let subtotal = getSubtotal(data);
        subtotal && dispatch({ type: ActionType.UPDATESUBTOTAL, payload: subtotal });
    }, [data, getSubtotal]);

    return (
        <Page>
        {
        state.user.firstName ?

            <h1>Hello, {state.user.firstName}!</h1>
        :
            <h1>Your cart is empty! Please <a href='/login'>log in</a> to build your own.</h1>
        }

        <section id="cart-contents">
            { data && data.map((product: Product) => <CartItem product={product} />) }
        </section>

        <section id="subtotal">
            <p>Subtotal:</p>
            <p>{state.cart.subtotal || "Not found"}</p>
        </section>
        </Page>
    )
}

export default Cart;