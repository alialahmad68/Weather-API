import { useState } from "react";

const Header = (props) => {
  const [City, setCity] = useState("")

  const handleClick = () => {
    props.searchWeatherByCity(City)
  }
  return (
<div>

<header>
      <input
        type="text"
        placeholder="Type in a city name"
        name="city-name"
        id="city-name"
        onChange={e=>setCity(e.target.value)}
      />
      <button 
      className="find-weather"
       onClick={handleClick}
       
       > FIND WEATHER</button>
    </header>

</div>
  );
};

export default Header;
