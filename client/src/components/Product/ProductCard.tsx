import { ProductCardType } from "../../util/types";

const ProductCard: ProductCardType = ({ data }) => {
    return (
        <div className="product-card">
            <h1>{data.name}</h1>
            <p>{data.price}</p>
            <p>{data.description}</p>
        </div>
    )
}

export default ProductCard;