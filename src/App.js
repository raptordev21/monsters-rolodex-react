import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBar from './components/search-box/SearchBar'

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

  const filteredMonsters = monstersCopy.filter(monster => monster.name.toLowerCase().includes(searchCopy.toLowerCase()))

  return (
    <div className="App">
      <SearchBar placeholder='Search Monsters' handleChange={e => setSearch(e.target.value)} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
