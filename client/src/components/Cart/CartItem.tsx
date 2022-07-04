function CartItem({ product }: any) {
    return (
        <div className="cart-item-panel">
            <strong>{product.name}</strong>
            <p>{product.price}</p>
        </div>
    )
}

export default CartItem;