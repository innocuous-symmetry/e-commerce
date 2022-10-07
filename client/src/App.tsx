// react imports
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

// components
import Home from './components/Home'
import Navbar from './components/Nav/Navbar'
import AuthForm from './components/Auth/AuthForm'

// util
import { SupabaseProvider, getSupabaseClient, useSupabase } from './supabase/SupabaseContext'
import { initialState } from './util/initialState'
import { AppState } from './util/types'
import './App.scss'

export default function App() {
  const [state, setState] = useState<AppState>(initialState);
  const supabase = useSupabase();

  useEffect(() => {
    setState((prev: AppState) => {
      let newUser;
      let newSession;

      if (supabase) {
        newSession = supabase.auth.session();
        newUser = supabase.auth.user();
      }

      return {
        ...prev,
        supabase: supabase,
        user: newUser ?? prev.user,
        session: newSession ?? prev.session
      }
    })
  }, [supabase])

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <SupabaseProvider value={getSupabaseClient()}>
      <BrowserRouter>
        <div className="App">
        <Navbar />
          <Routes>

            {/* Top level route */}
            <Route path="/" element={<Home />} />

            {/* Second level routes */}
            <Route path="/register" element={<AuthForm format="register" />} />
            <Route path="/login" element={<AuthForm format="login" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SupabaseProvider>
  )
}
