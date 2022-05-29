import Page from "./Page";

function LandingPage() {
    return (
        <Page classes="landing">
            <header>
                <h1>Welcome to Mikayla's Mostly Useless Little Store!</h1>
                <p>Thanks so much for visiting!</p>
            </header>

            <section className="site-description">
                <p>This site was built as part of the curriculum for the Codecademy Full Stack Engineer career path. The listings you see on this site do correspond to
                real life products, which can be purchased through a functioning payment system powered by Stripe. Personal data is rigorously encoded and
                protected. Feel free to shoot me a message with any questions or comments about this project, and enjoy browsing!</p>
            </section>

            <div className="shop-buttons">
                <button>SHOP ALL</button>
                <button>SHOP BY...</button>
            </div>
        </Page>
    )
}

export default LandingPage;