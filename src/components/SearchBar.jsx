
function SearchBar(props) {

  

  const handleSearch = (e)=> {
    props.setSearchQuery(e.target.value)
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" onChange={handleSearch}  value={props.searchQuery}/>

    </div>
  )
}

export default SearchBar
