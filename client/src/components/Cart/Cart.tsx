import { useCallback, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { AppContext } from "../../store/store";
import { ActionType } from "../../store/store_types";
import { Product } from '../../types/main';
import { getSubtotal } from "../../util/helpers";
import Page from "../../util/Page";
import CartItem from "./CartItem";

function Cart() {
    const [state, dispatch] = useContext(AppContext);
    const [data, setData] = useState<any>();
    const [subtotal, setSubtotal] = useState('loading...');

    // on mount
    useEffect(() => {
        if (!state) return;
        dispatch({ type: ActionType.UPDATESUBTOTAL, payload: getSubtotal(data) });
    }, []);

    useEffect(() => {
        console.log(state.cart);
        setSubtotal(state.cart.subtotal);
    }, [state.cart.subtotal]);

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

    const updateQuantity = useCallback((product: Product, newQuantity: number) => {
        const updated = product;
        updated.quantity = newQuantity;
    }, []);

    return (
        <Page>
        {
        state.user.firstName ?

            <h1>Hello, {state.user.firstName}!</h1>
        :
            <h1>Your cart is empty! Please <a href='/login'>log in</a> to build your own.</h1>
        }

        <section id="cart-contents">
            { data && data.map((product: Product) => <CartItem key={v4()} updateQuantity={updateQuantity} product={product} />) }
        </section>

        <section id="subtotal">
            <p>Subtotal: {subtotal}</p>
        </section>
        </Page>
    )
}

export default Cart;