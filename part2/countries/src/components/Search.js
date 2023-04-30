import { useState } from "react"
import Results from "./Results"

const Search = ( {countries} ) => {
    const [searchResults, setSearchResults] = useState([])
    const searchMessage = 'Too many matches! Specify another filter.'
    const handleSearch = (event) => {
        const searchValue = event.target.value

        setSearchResults(countries.filter(country => country.name.common.toLowerCase().includes(searchValue)))
    }
    return (
        <>
        Find Countries <input onChange={handleSearch}/>
        { searchResults.length > 10 ? <p>{searchMessage}</p> : <Results searchResults={searchResults} /> }
        </>
    )
}

export default Search