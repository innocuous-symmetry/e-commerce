import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "../../supabase/SupabaseContext"
import "./Navbar.scss";

export default function Navbar() {
    const [view, setView] = useState<JSX.Element>(<p>Loading...</p>);

    const supabase = useSupabase();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase?.auth.signOut();
    }

    useEffect(() => {
        const user = supabase?.auth.user();

        setView(
            <section id="navbar-section">
                <h1>Express Spice Market</h1>
                <div className="user-data">
                    {
                        user?.email && <p>{user.email}</p>
                    }
                    {
                        user ? <button onClick={handleLogout}>Log Out</button> : <button onClick={() => navigate('/login')}>Log In</button>
                    }
                </div>
            </section>
        )
    }, [supabase]);

    return view;
}