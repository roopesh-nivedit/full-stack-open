import Contact from "./Contact"

const Persons = ( {contacts, setContacts, searchResults, setSearchResults, setMessage, setMessageType} ) => {
  const results = searchResults.length ? searchResults : contacts
    return (
      <ul>
          { results.map(contact => 
            <Contact key={contact.id} contact={contact} contacts={contacts} setContacts={setContacts} setMessage={setMessage} setMessageType={setMessageType} searchResults={searchResults} setSearchResults={setSearchResults}/>
          )
          }
      </ul>
    )
  }

  export default Persons