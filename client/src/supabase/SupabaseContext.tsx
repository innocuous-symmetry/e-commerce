import { FunctionComponent, ReactPortal, createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import { handleRegister, handleEmailLogin } from "./authHelpers";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

interface SupabaseContextData {
    supabase: SupabaseClient
    userSession?: any
    setUserSession?: Dispatch<SetStateAction<any>>
    userData?: any
    setUserData?: Dispatch<SetStateAction<any>>
    handleRegister: (email: string, password: string, authData: ReactAuthData) => Promise<AuthData>
    handleEmailLogin: (email: string, password: string, authData: ReactAuthData) => Promise<AuthData>
}

interface AuthData {
    user?: any
    session?: any
    error?: any
}

export interface ReactAuthData {
    userSession: any
    setUserSession: Dispatch<SetStateAction<any>>
    userData: any
    setUserData: Dispatch<SetStateAction<any>>
}

const initialState: SupabaseContextData = {
    supabase: supabase,
    userSession: undefined,
    userData: undefined,
    handleRegister: handleRegister,
    handleEmailLogin: handleEmailLogin
}

const SupabaseContext = createContext<SupabaseContextData>(initialState);

export const SupabaseProvider: FunctionComponent<ReactPortal> = ({ children }) => {
    const [userData, setUserData] = useState<any>();
    const [userSession, setUserSession] = useState<any>();

    const store = {
        supabase, userData, setUserData, userSession, setUserSession, handleRegister, handleEmailLogin
    }

    return (
        <SupabaseContext.Provider value={store}>
            { children }
        </SupabaseContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(SupabaseContext);
}