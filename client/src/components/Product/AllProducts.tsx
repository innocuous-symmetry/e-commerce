import { useEffect, useState } from "react"
import { v4 } from "uuid";
import { getAllProducts } from "../../util/apiUtils";
import { ProductModel } from "../../util/types";
import Card from "../_ui/Card/Card";
import Gallery from "../_ui/Gallery/Gallery";
import Page from "../_ui/Page/Page";
import ProductCard from "./ProductCard";

export default function AllProducts() {
    const [productData, setProductData] = useState<ProductModel[]>();
    const [view, setView] = useState<JSX.Element>(<h1>Loading...</h1>);

    useEffect(() => {
        getAllProducts()
        .then(res => res.json())
        .then(res => setProductData(res));
    }, [])
    
    useEffect(() => {
        console.log(productData);
    }, [productData])

    useEffect(() => {
        setView(
            <Page>
                <h1>Product Catalog</h1>
                
                <Card additionalClasses="all-products-filter">
                    <div>
                        <p>Filter results by:</p>
                        <select>
                            <option>Name (A-Z)</option>
                            <option>Name (Z-A)</option>
                            <option>Price (Low to High)</option>
                            <option>Price (High to Low)</option>
                        </select>
                    </div>
                    <div>
                        <p>Select by category:</p>
                    </div>
                    <div>
                        <p>Select by region:</p>
                    </div>
                </Card>

                <Gallery additionalClasses="product-card-list" columns={3}>
                    {
                        productData && productData.map((data: ProductModel) => {
                            return <ProductCard data={data} key={v4()} />
                        })
                    }
                </Gallery>
            </Page>
        )
    }, [productData, setProductData]);

    return view;
}