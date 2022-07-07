import { useEffect, useState } from "react";
import { v4 } from "uuid";

function CartItem({ product, updateQuantity }: any) {
    const [quantity, setQuantity] = useState(product.quantity || 0);

    useEffect(() => {
        updateQuantity(product, quantity);
    }, [quantity]);

    return (
        <div className="cart-item-panel">
            <strong>{product.name}</strong>
            <p>{product.price}</p>
            <p>Quantity: {quantity}</p>
            <input type="number" min="0" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}></input>
        </div>
    )
}

export default CartItem;