import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ActionType } from "../../store/store_types";
import { AppContext } from "../../store/store";

export default function ProductCard({ productData }: any) {
    const { name, category, description, price, id } = productData;
    const [state, dispatch] = useContext(AppContext);
    const navigate = useNavigate();

    const addToCart = () => {
        dispatch({ type: ActionType.ADDTOCART, payload: productData });
    }

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
                <button onClick={addToCart}>Add to Cart</button>
                :
                <button onClick={() => navigate('/login')}>Login to add to your cart</button>
                }

            </div>
        </div>
    )
}