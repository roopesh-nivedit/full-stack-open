import ShowResults from "./ShowResults"
import ShowOneResult from "./ShowOneResult"

const Results = ( {searchResults} ) => {

    return (
        searchResults.length === 1 ? searchResults.map(country => <ShowOneResult key={country.name.common} countryDetails={country} />) : <ul>{searchResults.map(country => <ShowResults key={country.name.common} countryName={country.name.common} countryDetails={country}/>)}</ul>
    )
}

export default Results