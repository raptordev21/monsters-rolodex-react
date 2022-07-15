import './SearchBar.css'

function SearchBar({ placeholder, handleChange }) {
  return (
    <div>
      <input
        className='search'
        type="search"
        name="search"
        onChange={handleChange}
        placeholder={placeholder} />
    </div>
  )
}

export default SearchBar