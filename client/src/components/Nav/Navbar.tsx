import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "../../supabase/SupabaseContext"
import Button from "../_ui/Button/Button";
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
                <h1><a href="/">Express Spice Market</a></h1>
                <div className="user-data">
                    {
                        user?.email && (
                            <>
                            <p>{user.email}</p>
                            <Button onClick={() => navigate('/my-profile')}>View Profile</Button>
                            </>
                        )
                    }
                    {
                        user ? <Button onClick={handleLogout}>Log Out</Button> : (
                            <>
                            <Button onClick={() => navigate('/login')}>Log In</Button>
                            <Button onClick={() => navigate('/register')}>Register</Button>
                            </>
                        )
                    }
                </div>
            </section>
        )
    }, [supabase]);

    return view;
}