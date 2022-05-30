import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './store/store';

import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Products from './components/Products/Products';
import LoginForm from './components/User/LoginForm';
import Register from './components/User/Register';

import './App.scss'

function App() {
  const context = useContext(AppContext);

  return (
    <BrowserRouter>
      <AppContext.Provider value={context}>
          <NavBar/>

          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/products/" element={<Products />} />
          </Routes>
        </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App
