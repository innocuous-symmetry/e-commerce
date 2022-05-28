import { useEffect, useState } from 'react'
import logo from './logo.svg'
import { getAllUsers } from './util/callsToAPI'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);

  const handleUserData = async () => {
    let data = await getAllUsers();
    let mapped = data.map(x => {
      return (
        <>
          <p>Name: {x.name}</p>
          <p>Email: {x.email || 'null'}</p>
        </>
      )
    });
    setUserData(mapped);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <p>User data:</p>
          {userData}
        </div>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button onClick={handleUserData}>
            Get User Data
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
