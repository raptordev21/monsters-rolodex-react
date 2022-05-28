import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [monsters, setMonsters] = useState([])
  useEffect(() => {
    async function getusers() {
      let res = await fetch('https://jsonplaceholder.typicode.com/users')
      let users = await res.json()
      setMonsters(users)
    }
    getusers()
  }, [])
  return (
    <div className="App">
      {monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  );
}

export default App;
