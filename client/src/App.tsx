import { useState } from 'react'
import { getAllUsers, registerNewUser } from './util/apiUtils';
import { userInfo } from './types/main';
import './App.css'

function App() {
  const [response, setResponse] = useState<any>(undefined);

  let newUser: userInfo = {
    email: 'anotherperson@email.com',
    name: "one more person",
    password: "dumb_password"
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

      <button onClick={() => getAllUsers().then(res => setResponse(res))}>API call?</button>
      <button onClick={() => registerNewUser(newUser).then(res => alert(res))}>Add sample user</button>
    </div>
  )
}

export default App
