import { useEffect, useState } from "react"
import { getAllProducts } from "../../util/apiUtils";

export default function AllProducts() {
    const [productData, setProductData] = useState<Response>();

    useEffect(() => {
        getAllProducts()
        .then(res => res.json())
        .then(res => setProductData(res));
    }, [])

    useEffect(() => {
        console.log(productData);
    }, [productData])

    return (
        <h1>All Products!</h1>
    )
}