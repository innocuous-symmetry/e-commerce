import { useState } from 'react'
import './App.css'

function App() {
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
    </div>
  )
}

export default App
