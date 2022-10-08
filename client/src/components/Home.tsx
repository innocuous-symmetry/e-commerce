import { useNavigate } from "react-router-dom"
import Button from "./_ui/Button/Button";
import Page from "./_ui/Page/Page";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Page additionalClasses="homepage">
            <h1>The finest spice shop on the internet.</h1>
            <p>Or at the very least, what their website could look like.</p>

            <div className="button-row">
                <Button onClick={() => navigate('/products')}>View our Products</Button>
                <Button onClick={() => navigate('/philosophy')}>Our Philosophy</Button>
                <Button onClick={() => navigate('/contact')}>Contact Us</Button>
            </div>
        </Page>
    )
}