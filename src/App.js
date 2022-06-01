import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'

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
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
