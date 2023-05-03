import { useState, useEffect } from 'react'
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contactService from './services/contacts'
import Notification from './components/Notification'

const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [searchResults, setSearchResults] = useState([])
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)


  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setContacts(initialContacts)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType}/>
      
      <Search contacts={contacts} setContacts={setContacts} searchResults={searchResults} setSearchResults={setSearchResults}/>
      
      <h3>Add a New Contact</h3>
      <PersonForm contacts={contacts} setContacts={setContacts} setMessage={setMessage} setMessageType={setMessageType}/>
      
      <h3>Contact List</h3>
      <Persons contacts={contacts} setContacts={setContacts} searchResults={searchResults} setSearchResults={setSearchResults} setMessage={setMessage} setMessageType={setMessageType}/>
      
    </div>
  )
}

export default App