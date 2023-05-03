import { useState } from 'react'
import contactService from '../services/contacts'

const PersonForm = ( {contacts, setContacts, setMessage, setMessageType} ) => {

    const [newPerson, setNewPerson] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const addContact = (event) => {
      event.preventDefault()
      const contactObject = {
        name: newPerson,
        number: newNumber,
      }

    const checkPerson = contacts.some(contact => contact.name.toLowerCase() === newPerson.toLowerCase())

      if (!checkPerson) {
        contactService
          .add(contactObject)
          .then(returnedContact => {
          setContacts(contacts.concat(returnedContact))
          setNewPerson('')
          setNewNumber('')
          setMessage(
            `Added ${returnedContact.name}`
          )
          setMessageType('success')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
      });
      }
      else if (checkPerson && (contacts.find((contact) => contact.number === newNumber))) {
        alert(`${newPerson} is already added to phonebook.`)
      }
      else {
        if(window.confirm(`${newPerson} is already added to phonebook. Replace the old number with a new one?`)) {
          const contactDetails = contacts.find((contact) => contact.name.toLowerCase() === newPerson.toLowerCase())

          contactService
            .update(contactDetails.id, contactObject)
            .then(() => {
              contactService
                .getAll()
                .then((updatedContacts) => {
                  setContacts(updatedContacts);
                });
                setMessage(
                  `Updated ${contactObject.name}'s number`
                )
                setMessageType('success')
                setTimeout(() => {
                  setMessage(null)
                }, 5000)
              })
              .catch(error => {
                setMessage(
                    `Information of ${contactObject.name} was already removed from the server!`
                  )
                  setMessageType('error')
                  setTimeout(() => {
                    setMessage(null)
                  }, 5000)
            })
              setNewPerson('')
              setNewNumber('')
        }
      }
        
    }
  
    const handlePersonChange = (event) => {
      setNewPerson(event.target.value)
    }
  
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
  
    return (
      <form onSubmit={addContact}>
          <div>
            Name: <input value={newPerson} onChange={handlePersonChange}/>
          </div>
          <div>
            Number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
    )
  }

  export default PersonForm