import ShowLanguages from "./ShowLanguages"
import ShowWeatherIcons from "./ShowWeatherIcons"
import { useState, useEffect } from 'react'
import countriesService from '../services/countries'

const ShowOneResult = ( {countryDetails} ) => {
    const [weatherValues, setWeatherValues] = useState([]) 

    const capital = countryDetails.capital

    useEffect(() => {
        countriesService
          .getWeather(capital)
          .then(cityWeather => {
            setWeatherValues(cityWeather)
        })
    }, [capital])

    

    return (
        <>
        <h1>{countryDetails.name.common}</h1>
        <p>Capital {countryDetails.capital}</p>
        <p>Area {countryDetails.area}</p>
        <h2>Languages</h2>
        <ul><ShowLanguages languages={countryDetails.languages}/></ul>

        <img src={countryDetails.flags.png} alt={countryDetails.flags.alt} />

        {weatherValues ? (<h2>Weather in {countryDetails.capital}</h2>) : <h2>Weather</h2>}
        <p>Temperature {weatherValues.main?.temp} Celsius</p>
        
        {weatherValues.weather ? <ShowWeatherIcons weather={weatherValues.weather}/> : null}
        
        <p>Wind {weatherValues.wind?.speed} m/s</p>
        </>
    )
}

export default ShowOneResult