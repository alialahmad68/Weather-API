import mc from "./img/weather-icons/mostlycloudy.svg"
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
          <p><b>Temperature&nbsp;</b>&nbsp;{tempFrom}&deg; to {tempTo} &deg;C</p>
        </div>
        <div className="humidity-pressure">
          <p className="humidity"><b>Humidity&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;{humidity}%</p>
          <p className="pressure"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pressure&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;{pressure}</p>
        </div>
       </main>
    );
  };
  
  export default Main;
  