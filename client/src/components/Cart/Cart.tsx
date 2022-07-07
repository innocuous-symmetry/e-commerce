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

    return (
        <Page>
        {
        state.user.firstName ?
            <h1>Hello, {state.user.firstName}!</h1>
        :
            <h1>Please <a href='/login'>log in</a> to start your cart.</h1>
        }

        <section id="cart-contents">
            { state.cart && 

            <>
            <p>You have {state.cart.contents.length} items in your cart!</p>
            <div>
                {state.cart.contents.map((product: Product) => <CartItem key={v4()} product={product} />)}
            </div>
            </>

            }
        </section>

        <section id="subtotal">
            <p>Subtotal: {subtotal}</p>
        </section>
        </Page>
    )
}

export default Cart;