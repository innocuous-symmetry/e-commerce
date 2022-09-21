import { useContext } from "react";
import { AppContext } from "../../store/store";
import Page from "../../util/Page";

export default function AdminHome() {
    const [state, dispatch] = useContext(AppContext);

    // to do: provide protected access based on a list of approved admin users
    if (state.user.name) return (
        <Page>
            <h1>Admin Management Portal</h1>
            <h2>Welcome, {state.user.name || ''}</h2>

            <section>
                <h3>This is where administrative tasks will be supported for the store.</h3>
                <p>Choose from the options below:</p>
                
                <div className="admin-options">
                    <button>Access product listings and inventory</button>
                    <button>Manage registered users</button>
                    <button>Database options</button>
                </div>
            </section>
        </Page>
    )

    return (
        <Page>
            <h1>Administrative access required to view this page.</h1>
            <p>Please click <a href="/">here</a> to return home.</p>
        </Page>
    )
}