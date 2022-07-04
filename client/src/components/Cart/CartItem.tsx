import { v4 } from "uuid";

function CartItem({ product }: any) {
    return (
        <div className="cart-item-panel" key={v4()}>
            <strong>{product.name}</strong>
            <p>{product.price}</p>
            <p>Quantity: {product.quantity || "1"}</p>
        </div>
    )
}

export default CartItem;