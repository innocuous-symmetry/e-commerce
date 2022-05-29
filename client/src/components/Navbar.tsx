import { useState } from "react";

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userID, setUserID] = useState(null);

    return (
        <nav>
            <a href="/">Logo</a>
            <p>Search bar</p>
            {loggedIn ? <a href={`/users/${userID}`}>Profile info</a> : <a href="/login">Log In</a>}
        </nav>
    )
}

export default NavBar;