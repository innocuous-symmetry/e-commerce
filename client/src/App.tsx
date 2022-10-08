// react imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

// components
import Home from './components/Home'
import Navbar from './components/Nav/Navbar'
import AuthForm from './components/Auth/AuthForm'
import Cart from './components/Cart/Cart'
import AllProducts from './components/Product/AllProducts'
import ProductPage from './components/Product/ProductPage'
import UserProfile from './components/User/UserProfile'
import UserSettings from './components/User/UserSettings'
import OrderHistory from './components/Order/OrderHistory'
import OrderRecord from './components/Order/OrderRecord'

// util
import { SupabaseProvider, useSupabase } from './supabase/SupabaseContext'
import './sass/App.scss'

export default function App() {
  const supabase = useSupabase();

  useEffect(() => {
    console.log(supabase);
  }, [supabase])

  return (
    <SupabaseProvider value={supabase}>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            {/* Top level home page */}
            <Route path="/" element={<Home />} />

            {/* Auth routes */}
            <Route path="/register" element={<AuthForm format="register" />} />
            <Route path="/login" element={<AuthForm format="login" />} />

            {/* Product components */}
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:productId" element={<ProductPage />} />

            {/* User data */}
            <Route path="/my-profile" element={<UserProfile />} />
            <Route path="/user-settings" element={<UserSettings />} />
            <Route path="/cart" element={<Cart />} />

            {/* Order data */}
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/orders/:orderId" element={<OrderRecord />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SupabaseProvider>
  )
}
