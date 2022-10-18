import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getByProductId } from "../../util/apiUtils";
import { ProductModel } from "../../util/types";
import Page from "../_ui/Page/Page";

export default function ProductPage() {
    const [productData, setProductData] = useState<ProductModel>();
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productId && getByProductId(productId)
        .then(res => res.json())
        .then(res => setProductData(res));
    }, [])

    useEffect(() => {
        console.log(productData);
    }, [productData]);

    if (!productData) return <h1>Product not found.</h1>

    return (
        <Page additionalClasses="product-page">
            <h1>{productData.name}</h1>
            <p>{productData.price}</p>
            <p>{productData.description}</p>

            <button onClick={() => navigate('/products')}>Return to Product Listing</button>
        </Page>
    )
}