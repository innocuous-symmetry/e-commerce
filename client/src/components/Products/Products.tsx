import Page from "../../util/Page";
import ProductCard from "./ProductCard";
import { getAllProducts } from '../../util/apiUtils';
import { useState, useEffect } from "react";

type ProductResponse = {
    category: string,
    category_id?: number,
    description: string,
    id: number,
    inventory: number,
    minidescription?: string,
    name: string,
    price: string
}

function Products() {
    const [productData, setProductData] = useState([]);
    const [productFeed, setProductFeed] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        getAllProducts().then(res => setProductData(res));
    }, [])

    useEffect(() => {
        if (!productData) return;
        console.log(productData);

        let results = productData.map((each: ProductResponse) => {
            return <ProductCard key={each.id} productData={each} />
        });

        setProductFeed(results);
    }, [productData]);

    return (
        <Page>
            <h1>Found {productFeed.length} products</h1>
            <div className="filter-results">

            </div>

            <div className="products-results">
                { productFeed || <p>Loading...</p> }
            </div>
        </Page>
    )
}

export default Products;