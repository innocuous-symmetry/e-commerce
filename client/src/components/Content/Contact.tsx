import Gallery from "../_ui/Gallery/Gallery";
import Page from "../_ui/Page/Page";

export default function Contact() {
    return (
        <Page>
            <h1>Something you wanted to talk to us about?</h1>

            <p>We'd love to hear it!</p>
            <p>You can reach me at any of these social media outlets:</p>

            <Gallery additionalClasses="social-gallery" columns={3}>
                <p>Wew</p>
                <p>Wew</p>
                <p>Wew</p>
            </Gallery>

            <p>You can also use the following form to reach out:</p>

            <form>
                <label>Things</label>
                <input></input>
            </form>
        </Page>
    )
}