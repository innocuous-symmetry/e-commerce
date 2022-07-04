import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../util/helpers";
import { AppContext } from "../../store/store";

export default function ProductCard({ productData }: any) {
    const { name, category, description, price, id } = productData;
    const [state, dispatch] = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="card product-card" key={`product-id-${id}`}>
            <div className="product-photo"></div>
            <h1>{name}</h1>
            <p>Category: {category}</p>
            <p>{description}</p>
            <p>Price: {`$${price}` || "Free, apparently!"}</p>
            <div className="product-options">
                <button onClick={() => navigate(`/products/${id}`)}>More info</button>

                {
                state.user.headers && state.user.headers.authenticated ?
                <button onClick={() => addToCart(productData, dispatch)}>Add to Cart</button>
                :
                <button onClick={() => navigate('/login')}>Login to add to your cart</button>
                }

            </div>
        </div>
    )
}