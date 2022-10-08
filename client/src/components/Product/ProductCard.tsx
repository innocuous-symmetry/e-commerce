import { useNavigate } from "react-router-dom";
import { ProductCardType } from "../../util/types";

const ProductCard: ProductCardType = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="product-card">
            <h1>{data.name}</h1>
            <p>{data.price}</p>
            <p>{data.description}</p>

            <button onClick={() => navigate(`/products/${data.id}`)}>See More</button>
        </div>
    )
}

export default ProductCard;