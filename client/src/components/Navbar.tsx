import { useReducer, useState, useEffect, useContext } from "react";
import { AppContext, initialState, reducer } from "../store/store";
import { ActionType } from "../store/store_types";
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [profText, setProfText] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const [state, dispatch] = useContext(AppContext);

    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchInput === '') return;

        dispatch({ type: ActionType.SEARCH, payload: searchInput });
        navigate(`/products?query=${searchInput}`);
    }

    useEffect(() => {
        if (state === initialState) return;

        console.log(state.user);

        if (state.user && state.user.headers.authenticated) {
            console.log('authenticated!');
            setProfText(state.user.email);
            setLoggedIn(true);
        } else if (!state.user.authenticated) {
            setLoggedIn(false);
        }

    }, [state]);

    return (
        <nav>
            <button onClick={() => navigate("/")}>Logo</button>
            <div className="searchbar">
                <input type="text" placeholder="Search products" onChange={(e) => setSearchInput(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
                <button onClick={() => console.log(state)}>Render</button>
            </div>
            {loggedIn ? <button onClick={() => navigate(`/users/${state.user.id}`)}>{profText}</button> : <button onClick={() => navigate("/login")}>Log In</button>}
        </nav>
    )
}

export default NavBar;