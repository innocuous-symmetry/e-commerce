import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/User/Register'
import './App.css'
import { useEffect, useState } from 'react'
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { SupabaseProvider } from './supabase/SupabaseContext'
import { useSupabase } from './supabase/useSupabase'

function App() {
  return (
    <SupabaseProvider value={useSupabase()}>
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
