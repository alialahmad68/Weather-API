import mc from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import pc from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";

const Main = (props) => {

const imageMain= getWeatherIcon(props.data.list[0].weather[0].id);
const imageTitle=props.data.list[0].weather[0].description;
const tempFrom=props.data.list[0].main.temp_min;
const tempTo=props.data.list[0].main.temp_max;
const humidity=props.data.list[0].main.humidity;
const pressure=props.data.list[0].main.pressure;

//getting backgroung color to pass it to the Main div style
const backColor=props.color;

    return (
        <main  style={{ backgroundColor: backColor }}>
        <div className="img-mc">
          <img src={imageMain} className="mostly-cloudy" />
          <h2 className="mc-text">{imageTitle}</h2>
        </div>
        <div className="temp-data">
          <p><b>Temperature&nbsp;</b>&nbsp;{convertKelvinToCelsius(tempFrom)}&deg; to { convertKelvinToCelsius(tempTo)}&deg;C</p>
        </div>
        <div className="humidity-pressure">
          <p className="humidity"><b>Humidity&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;{humidity}%</p>
          <p className="pressure"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pressure&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;{pressure.toFixed(2)}</p>
        </div>
       </main>
    );
  };


  //set the image according to the weather id
  function getWeatherIcon(id) {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id < 500) {
      return drizzle;
    } else if (id >= 500 && id < 600) {
      return rain;
    } else if (id >= 600 && id < 700) {
      return snow;
    } else if (id >= 700 && id < 800) {
      return fog;
    } else if (id === 800) {
      return clear;
    } else if (id === 801) {
      return pc;
    } else if (id > 801 && id <= 805) {
      return mc;
    } else {
      return mc;
    }
  }

  function convertKelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(0);
  }
  
  export default Main;
  