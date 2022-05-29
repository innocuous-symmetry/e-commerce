import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState<any>(undefined);

  type userInfo = {
    email: string;
    id?: number;
    name: string;
    password: string;
  }

  const doAPICall = async () => {
    let serverCall = await fetch('http://localhost:8088/users')
    .then(res => res.json());

    console.log(serverCall);
    serverCall && setResponse(serverCall);
  }

  const addSampleUser = async () => {
    let newUser: userInfo = {
      email: 'another@email.com',
      name: "still another person",
      password: "dumb_password"
    }

    let thing = await fetch('http://localhost:8088/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    if (thing.ok) alert('User added successfully.');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

        <h2>Server response:</h2>
        <div>
        {response && response.map((field: userInfo) => {
          return (
            <>
            <p key={`${field.name}_name`}>{field.name}</p>
            <p key={`${field.name}_email`}>{field.email}</p>
            </>
          )
        })}
        </div>

        <button onClick={doAPICall}>API call?</button>
        <button onClick={addSampleUser}>Add sample user</button>
      </header>
    </div>
  )
}

export default App
