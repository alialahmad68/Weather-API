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

const imageMain=props.imageMain;
const imageTitle=props.imageTitle;
const tempFrom=props.tempFrom;
const tempTo=props.tempTo;
const humidity=props.humidity;
const pressure=props.pressure;


    return (
        <main>
        <div className="img-mc">
          <img src={imageMain} className="mostly-cloudy" />
          <h2 className="mc-text">{imageTitle}</h2>
        </div>
        <div className="temp-data">
          <p><b>Temperature&nbsp;</b>&nbsp;{tempFrom}&deg; to {tempTo}&deg;C</p>
        </div>
        <div className="humidity-pressure">
          <p className="humidity"><b>Humidity&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;{humidity}%</p>
          <p className="pressure"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pressure&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;{pressure}</p>
        </div>
       </main>
    );
  };
  
  export default Main;
  