import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Products from './components/Products/Products';
import LoginForm from './components/User/LoginForm';
import Register from './components/User/Register';

import './App.scss'

function App() {
  return (
    <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
