import { useState } from "react";

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <nav>
            <p>Logo</p>
            <p>Search bar</p>
            {loggedIn ? <p>Profile info</p> : <p>Log In</p>}
        </nav>
    )
}

export default NavBar;