import React, { Component } from "react";
import mc from "./img/weather-icons/mostlycloudy.svg"
import Clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import pc from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";
import Search from "./components/Search";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SayHi, { SayHello } from "./components/WeatherItem";
import FakeWeather from "./data/FakeWeather.json";
import "./App.css";



const App = () => {
  return (
    <div>

    <Header />

    <Main 
    imageMain={Clear}
    imageTitle={FakeWeather.list[0].weather[0].description}
    tempFrom={FakeWeather.list[0].main.temp_min}
    tempTo={FakeWeather.list[0].main.temp_max}
    humidity={FakeWeather.list[0].main.humidity}
    pressure={FakeWeather.list[0].main.pressure}
    />

    <Footer />

    </div>

  )
}

export default App;
