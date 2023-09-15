import mc from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import pc from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";

const Footer = (props) => {

//getting backgroung color to pass it to the footer div style
const backColor=props.color;

  return (
    <footer style={{ backgroundColor: backColor }}>
      {props.data.list.slice(0, 7).map((data, index) => (
        <div className="daily-weather" key={index}>
          <p>{data.dt_txt.split(' ')[1].slice(0, 5)}</p>
          <img src={getWeatherIcon(props.data.list[index].weather[0].id)} alt="Weather Icon" />
          <p>{convertKelvinToCelsius(data.main.temp)}&deg;C</p>
        </div>
      ))}
    </footer>
  );
};


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
    return cloudy;
  }
}

function convertKelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius.toFixed(0);
}


export default Footer;