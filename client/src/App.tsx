import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { AppContext, initialState, reducer } from './store/store';

import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Products from './components/Products/Products';
import LoginForm from './components/User/LoginForm';
import Register from './components/User/Register';
import UserProfile from './components/User/UserProfile';
import ProductPage from './components/Products/ProductPage';
import Cart from './components/Cart/Cart';

import './App.scss'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <AppContext.Provider value={[state, dispatch]}>
          <NavBar/>

          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/users/:userID" element={<UserProfile profile={state.user.id} />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/products/" element={<Products />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/products/:productID" element={<ProductPage />} />
          </Routes>
        </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App
