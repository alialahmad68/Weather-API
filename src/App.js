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
    setLoading(false);
{    console.log(fetchedData);
}
  })
  .catch((err) => {
    alert(err);
    setLoading(false);
  });
  }

  return (

    <div>
<Header searchWeatherByCity={Search_City} />
      {loading ? (
<h3 className="loading"> Loading Your Requested Data</h3>
) : (
        <>
          {weatherData && <Main data={weatherData} />}
          {weatherData && <Footer data={weatherData} />}
        </>
      )}
    </div>

  )
}

export default App;
