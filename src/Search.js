import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(null);
  const [searched, setSearched] = useState(false);
  const [weather, setWeather] = useState(null);

  function changeCity(event) {
    setCity(event.target.value);
  }

  function showCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b3503b2f08a729413c4d33ef1186004&units=metric`;
    axios.get(url).then(showWeather);
    console.log(url);
  }

  function showWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      precipitation: response.data.clouds.all,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setSearched(true);
  }

  /*  const notSearched = (
    <div className="Search">
      <form id="search-form" className="mb-4" onSubmit={showCity}>
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
      <div className="Overview">
        <h1>New York</h1>
        <ul>
          <li>Friday 05:00</li>
          <li>Clear</li>
        </ul>
      </div>
      <div className="Temperature">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear"
                id="icon"
              />
              <div>
                <strong id="temperature">12</strong>
                <span className="units"> °C | °F </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 73%</li>
              <li>Wind: 2 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
 */

  if (searched) {
    return (
      <div className="Search">
        <form id="search-form" className="mb-4" onSubmit={showCity}>
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
        <div className="Overview">
          <h1>{city}</h1>
          <ul>
            <li>Friday 05:00</li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="Temperature">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex weather-temperature">
                <img src={weather.icon} alt={weather.description} id="icon" />
                <div>
                  <strong id="temperature">{weather.temperature}</strong>
                  <span className="units"> °C</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Precipitation: {weather.precipitation}%</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form id="search-form" className="mb-4" onSubmit={showCity}>
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
        <div className="Overview">
          <h1>New York</h1>
          <ul>
            <li>Friday 05:00</li>
            <li>Clear</li>
          </ul>
        </div>
        <div className="Temperature">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Clear"
                  id="icon"
                />
                <div>
                  <strong id="temperature">12</strong>
                  <span className="units"> °C | °F </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 73%</li>
                <li>Wind: 2 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
