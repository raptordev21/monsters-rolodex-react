import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'

function App() {
  const [monsters, setMonsters] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    async function getusers() {
      let res = await fetch('https://jsonplaceholder.typicode.com/users')
      let users = await res.json()
      setMonsters(users)
    }
    getusers()
  }, [])

  const monstersCopy = monsters
  const searchCopy = search

  return (
    <div className="App">
      <input type="search" name="search" onChange={e => setSearch(e.target.value)} placeholder='Search Monsters' />
      <div>{search}</div>
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
