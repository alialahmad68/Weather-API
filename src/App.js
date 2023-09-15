//importing React and hooks
import React, { Component ,useEffect, useState } from "react";

//importing Components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//importing fake weather JSON data
import FakeWeather from "./data/FakeWeather.json";
import "./App.css";



const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const [weatherData, setWeatherData] = useState()
  const [loading, setLoading] = useState(false);
  const Search_City = (City_Name) => {

  setLoading(true);

  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${City_Name}&cnt=8&units=metric&appid=b76300978a9e21f9ed5c25affd5b0032`)
  .then((res) => {
    if (!res.ok) {
      throw new Error("City name unavailable. Enter a valid city name");
    }
    return res.json();
  })
  .then((fetchedData) => {
    setWeatherData(fetchedData);
    setBackgroundColor(getBackgroundColor(fetchedData.list[0].weather[0].id));

    setLoading(false);
  })
  .catch((err) => {
    alert(err);
    setLoading(false);
  });}

    function getBackgroundColor(id) {
      if (id < 300) {
        return 'aqua'; 
      } else if (id >= 300 && id < 500) {
        return 'lightblue'; 
      } else if (id >= 500 && id < 600) {
        return 'blue'; 
      } else if (id >= 600 && id < 700) {
        return 'white'; 
      } else if (id >= 700 && id < 800) {
        return 'grey'; 
      } else if (id === 800) {
        return 'yellow'; 
      } else if (id === 801) {
        return 'black'; 
      } else if (id > 801 && id <= 805) {
        return 'red'; 
      } else {
        return 'lightblue'; 
      }
    }



  return (

    <div  style={{ backgroundColor: backgroundColor }}>
    <Header searchWeatherByCity={Search_City} />
      {loading ? (
    <h3 className="loading"> Loading Your Requested Data</h3>) :
     (
        <>
          {weatherData && <Main  data={weatherData} color={backgroundColor} />}
          {weatherData && <Footer  data={weatherData} color={backgroundColor}/>}
        </>
      )}
    </div>

  )
}

export default App;
