import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/User/Register'
import { SupabaseProvider, useSupabase } from './supabase/SupabaseContext'
import { getSupabaseClient } from './supabase/getSupabaseClient'
import './App.css'
import { useEffect } from 'react'

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
          </Routes>
        </div>
      </BrowserRouter>
    </SupabaseProvider>
  )
}

export default App
