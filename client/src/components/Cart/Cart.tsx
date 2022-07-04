import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/store";
import { Product } from '../../types/main';
import Page from "../../util/Page";
import CartItem from "./CartItem";

function Cart() {
    const [state, dispatch] = useContext(AppContext);
    const [contents, setContents] = useState<JSX.Element>();

    useEffect(() => {
        setContents(
            state.cart.contents.map((product: Product) => <CartItem product={product} />)
        )
    }, [state, setContents]);

    useEffect(() => {
        console.log(contents);
    }, [contents]);

    return (
        <Page>
        {
        state.user.firstName ?

            <h1>Hello, {state.user.firstName}!</h1>
        :
            <h1>Your cart is empty! Please <a href='/login'>log in</a> to build your own.</h1>
        }

        <section id="cart-contents">
            {contents || null}
        </section>
        </Page>
    )
}

export default Cart;