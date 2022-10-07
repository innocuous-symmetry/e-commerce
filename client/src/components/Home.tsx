import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>The finest spice shop on the internet.</h1>
            <p>Or at the very least, what their website could look like.</p>

            <div>
                <button onClick={() => navigate('/products')}>View our Products</button>
                <button onClick={() => navigate('/philosophy')}>Our Philosophy</button>
                <button onClick={() => navigate('/contact')}>Contact Us</button>
            </div>
        </div>
    )
}