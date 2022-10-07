import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/User/Register'
import { SupabaseProvider, getSupabaseClient, useSupabase } from './supabase/SupabaseContext'
import './App.css'
import { useEffect } from 'react'
import Login from './components/User/Login'

function App() {
  const supabase = useSupabase();

  useEffect(() => {
    console.log(supabase);
  }, [supabase])

  return (
    <SupabaseProvider value={getSupabaseClient()}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SupabaseProvider>
  )
}

export default App
