const ShowWeatherIcons = ( {weather} ) => {
    return (
        <>
        
        {weather.map(item => <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt="Weather icon" key={item.main}/> ) }
        
        </>
    )
}

export default ShowWeatherIcons