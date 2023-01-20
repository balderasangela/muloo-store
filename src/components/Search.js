import React from 'react'
import { useState } from 'react'

function Search({onSearch}) {
const [newSearch, setNewSearch] = useState("")

// to prevent refresh after each button typed 
function handleSubmit(e) {
    e.preventDefault();
    onSearch(newSearch);
}

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
      <button type="submit">💖</button>
    </form>
  );
}

export default Search