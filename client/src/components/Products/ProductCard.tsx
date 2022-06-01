export default function ProductCard({ productData }: any) {
    const { name, category, description, price, id } = productData;

    return (
        <div className="card product-card" key={`product-id-${id}`}>
            <div className="product-photo"></div>
            <h1>{name}</h1>
            <p>Category: {category}</p>
            <p>{description}</p>
            <p>Price: {`$${price}` || "Free, apparently!"}</p>
            <div className="product-options">
                <button>More info</button>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}