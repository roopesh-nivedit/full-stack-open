const Search = ( {contacts, setContacts, searchResults, setSearchResults} ) => {

    const handleSearch = (event) => {
  
      const searchValue = event.target.value.toLowerCase()
      const retrievedContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchValue))
      
      setSearchResults(retrievedContacts)
    }
  
    return (
      <div>
      Search Contacts: <input onChange={handleSearch}/>
      </div>
    )
  }

export default Search