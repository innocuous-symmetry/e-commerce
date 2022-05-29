import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginForm from './components/LoginForm';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
