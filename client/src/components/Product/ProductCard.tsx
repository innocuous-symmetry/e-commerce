import { useNavigate } from "react-router-dom";
import { ProductCardType } from "../../util/types";
import Button from "../_ui/Button/Button";
import Card from "../_ui/Card/Card";

const ProductCard: ProductCardType = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card additionalClasses="product-card">
            <h1>{data.name}</h1>
            <p>{data.price}</p>
            <p>{data.description}</p>

            <Button onClick={() => navigate(`/products/${data.id}`)}>See More</Button>
        </Card>
    )
}

export default ProductCard;