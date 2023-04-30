import { useState, useEffect } from 'react'
import Search from "./components/Search"
import countriesService from './services/countries'

function App() {

  const [countries, setCountries] = useState([]) 

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  return (
    <>
    <Search countries={countries}/>
    </>
  )
}

export default App
