import { useEffect, useState } from "react"
import { v4 } from "uuid";
import { getAllProducts } from "../../util/apiUtils";
import { ProductModel } from "../../util/types";
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
        setView(
            <section>
                <h1>All Products!</h1>
                <div className="product-card-list">
                    {
                        productData && productData.map((data: ProductModel) => {
                            return <ProductCard data={data} key={v4()} />
                        })
                    }
                </div>
            </section>
        )
    }, [productData, setProductData]);

    return view;
}