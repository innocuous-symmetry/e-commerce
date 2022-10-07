import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Vite + React + Supabase</h1>
            <p>Check out the user stuff below:</p>

            <div>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    )
}