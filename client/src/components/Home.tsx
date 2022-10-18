import { useNavigate } from "react-router-dom"
import Button from "./_ui/Button/Button";
import Card from "./_ui/Card/Card";
import Page from "./_ui/Page/Page";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Page additionalClasses="homepage">
            <Card additionalClasses="welcome-section coffee bigtext">
                <h1>The finest spice shop on the internet.</h1>
                <p>Or at the very least, what their website could look like.</p>
            </Card>

            <Card additionalClasses="med-short-h med-short-len thyme" />

            <Card additionalClasses="long coffee">
                <p>Our mission: to deliver quality herbs and spices.<br/>See our offerings and learn more about us below:</p>
                <div className="button-row">
                    <Button onClick={() => navigate('/products')}>View our Products</Button>
                    <Button onClick={() => navigate('/philosophy')}>Our Philosophy</Button>
                    <Button onClick={() => navigate('/contact')}>Contact Us</Button>
                </div>
            </Card>
        </Page>
    )
}