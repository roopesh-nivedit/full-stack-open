import contactService from '../services/contacts'

const Contact = ( {contact, contacts, setContacts, setMessage, setMessageType, searchResults, setSearchResults} ) => {
    const deletePerson = () => {
        if (window.confirm(`Delete ${contact.name} ?`)) {
          contactService
            .del(contact.id)
            .then(() => {
                contactService.getAll().then(() => {
                  setContacts(contacts.filter(c => c.id !== contact.id))
                  setSearchResults(searchResults.filter(sr => sr.id !== contact.id))
                });
                setMessage(
                    `Deleted ${contact.name}`
                  )
                  setMessageType('success')
                  setTimeout(() => {
                    setMessage(null)
                  }, 5000)
            })
            .catch(error => {
                setMessage(
                    `Information of ${contact.name} was already removed from the server!`
                  )
                  setMessageType('error')
                  setTimeout(() => {
                    setMessage(null)
                  }, 5000)
            })
        }
    }

    return (
        <li>{contact.name} {contact.number} <button onClick={() => deletePerson()}>Delete</button></li>
    )
}

export default Contact