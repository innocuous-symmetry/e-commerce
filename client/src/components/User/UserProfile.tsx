import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../store/store"

import Page from "../../util/Page";

export default function UserProfile(profile: any): JSX.Element {
    const [state, dispatch] = useContext(AppContext);

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!state.user.headers.authenticated) {
    //         console.log('bad');
    //     }
    // }, []);

    return (
        <Page>
            <h1>User Profile</h1>
            <h2>Thanks for supporting us{`, ${state.user.name}!` || '!'}</h2>
            <h2>{state.user.id || 'Profile not found'}</h2>
            <h3>{state.user.email}</h3>

            <div className="profile-options">
                <button>Order History</button>
                <button>Open Orders</button>
                <button>Edit Profile</button>
                <button>Profile Settings</button>
            </div>
        </Page>
    )
}