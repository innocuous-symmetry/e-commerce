import { useReducer, useState, useEffect, useContext } from "react";
import { AppContext, initialState, reducer } from "../store/store";
import { ActionType } from "../store/store_types";
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userID, setUserID] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const [state, dispatch] = useContext(AppContext);
    // const { searchTerm, user, cart } = useContext(AppContext);

    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchInput === '') return;

        dispatch({ type: ActionType.SEARCH, payload: searchInput });
        navigate(`/products?query=${searchInput}`);
    }

    // const forceRender = () => {
    //     console.log(searchTerm);
    //     console.log(user);
    // }

    // useEffect(() => {
    //     console.log('state updated!');
    // }, [user])

    return (
        <nav>
            <a href="/">Logo</a>
            <div className="searchbar">
                <input type="text" placeholder="Search products" onChange={(e) => setSearchInput(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
                <button onClick={() => console.log(state)}>Render</button>
            </div>
            {loggedIn ? <a href={`/users/${userID}`}>Profile info</a> : <a href="/login">Log In</a>}
        </nav>
    )
}

export default NavBar;