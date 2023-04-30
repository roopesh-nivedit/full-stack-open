const ShowLanguages = ( {languages} ) => {
    let isOneLanguage = false
    if (Object.values(languages).length === 1) {
        isOneLanguage = true
    }
    return (
        <>
        { isOneLanguage ? Object.values(languages) : Object.values(languages).map(language => <li key={language}>{language}</li>)}
        
        </>
    )
}

export default ShowLanguages