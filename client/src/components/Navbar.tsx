import { useReducer, useState } from "react";
import { initialState, reducer, ActionType } from "../store/store";
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userID, setUserID] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm === '') return;

        dispatch({ type: ActionType.SEARCH, payload: searchTerm });
        navigate(`/products?query=${searchTerm}`);
    }

    return (
        <nav>
            <a href="/">Logo</a>
            <div className="searchbar">
                <input type="text" placeholder="Search products" onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            {loggedIn ? <a href={`/users/${userID}`}>Profile info</a> : <a href="/login">Log In</a>}
        </nav>
    )
}

export default NavBar;