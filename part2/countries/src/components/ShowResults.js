import { useState } from "react";
import ShowOneResult from "./ShowOneResult";

const ShowResults = ({ countryName, countryDetails }) => {

    let showButton = ''

    const [isClicked, setIsClicked] = useState(false)

    const showCountryDetails = () => {
        setIsClicked(true)
    }

    if (isClicked) {
        showButton = <ShowOneResult countryDetails={countryDetails} />
    }
  return (
    <div>
    {countryName} <button onClick={showCountryDetails}>Show</button>
    {showButton}
    </div>
  );
};

export default ShowResults;
