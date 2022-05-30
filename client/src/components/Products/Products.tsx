import Page from "../../util/Page";
import ProductCard from "./ProductCard";

function Products() {
    return (
        <Page>
            <h1>Found 2 products</h1>

            <div className="products-results">
                <ProductCard/>
                <ProductCard/>
            </div>
        </Page>
    )
}

export default Products;