import React, { useState } from "react";
import axios from "axios";
import WeatherResult from "./WeatherResult.js";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [searched, setSearched] = useState(false);
  const [weather, setWeather] = useState({});

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b3503b2f08a729413c4d33ef1186004&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function showWeather(response) {
    setWeather({
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      precipitation: response.data.clouds.all,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setSearched(true);
  }

  if (searched) {
    return (
      <div className="Search">
        <form id="search-form" className="mb-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Search a city"
                className="form-control"
                onChange={changeCity}
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherResult data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
