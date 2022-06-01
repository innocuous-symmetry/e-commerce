import Page from "../../util/Page"
import { getProductDetails } from "../../util/apiUtils"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Product } from "../../types/main";

export default function ProductPage() {
    const [info, setInfo] = useState<Product>();
    const { productID }: any = useParams();

    useEffect(() => {
        getProductDetails(productID).then(res => setInfo(res));
    }, [])

    return (
        info ? 
        <Page>
            <h1>{info.name}</h1>
            <h2>Category: {info.category}</h2>

            <p>(a photo here)</p>
            <p>{info.description}</p>
            <p>Price: {info.price}</p>
        </Page>
        : <></>
    )
}