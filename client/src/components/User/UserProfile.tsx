import { useNavigate } from "react-router-dom";
import { useSupabase } from "../../supabase/SupabaseContext"

export default function UserProfile() {
    const supabase = useSupabase();
    const navigate = useNavigate();

    return (
        <section>
            <h1>User Profile!</h1>
            <p>Your email is {supabase?.auth.user()?.email || "not found"}</p>

            <h2>Options:</h2>
            <div className="user-profile-options">
                <button onClick={() => navigate('/cart')}>View my Cart</button>
                <button onClick={() => navigate('/orders')}>View my Order History</button>
                <button>Manage Account Settings</button>
            </div>
        </section>
    )
}