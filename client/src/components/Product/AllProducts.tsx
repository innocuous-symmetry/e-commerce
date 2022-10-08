import { useEffect, useState } from "react"
import { v4 } from "uuid";
import { getAllProducts } from "../../util/apiUtils";
import { ProductModel } from "../../util/types";
import Gallery from "../_ui/Gallery/Gallery";
import Page from "../_ui/Page/Page";
import ProductCard from "./ProductCard";

export default function AllProducts() {
    const [productData, setProductData] = useState<ProductModel[]>();
    const [view, setView] = useState<JSX.Element>(<p>Loading...</p>);

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
                <h1>All Products!</h1>
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