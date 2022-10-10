import { useNavigate } from "react-router-dom";
import { useSupabase } from "../../supabase/SupabaseContext"
import Button from "../_ui/Button/Button";
import Page from "../_ui/Page/Page";

export default function UserProfile() {
    const supabase = useSupabase();
    const navigate = useNavigate();

    return (
        <Page>
            <h1>User Profile!</h1>
            <p>Your email is {supabase?.auth.user()?.email || "not found"}</p>

            <h2>Options:</h2>
            <div className="user-profile-options">
                <Button onClick={() => navigate('/cart')}>View my Cart</Button>
                <Button onClick={() => navigate('/orders')}>View my Order History</Button>
                <Button onClick={() => navigate('/user-settings')}>Manage Account Settings</Button>
            </div>
        </Page>
    )
}