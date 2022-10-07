import { SupabaseClient } from "@supabase/supabase-js"
import { Dispatch, SetStateAction } from "react"

export interface SupabaseContextData {
    supabase: SupabaseClient
    authData: AuthData
    handleRegister?: (email: string, password: string, authData: AuthData) => Promise<SupabaseResponseData>
    handleEmailLogin?: (email: string, password: string, authData: AuthData) => Promise<SupabaseResponseData>
}

export interface AuthData {
    userSession?: any
    setUserSession?: Dispatch<SetStateAction<any>>
    userData?: any
    setUserData?: Dispatch<SetStateAction<any>>
}

export interface SupabaseResponseData {
    user?: any
    session?: any
    error?: any
}