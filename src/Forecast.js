import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}
`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="weather-forecast">
        <div className="row">
          <div className="col-sm-2">
            Thu
            <WeatherIcon
              icon={props.icon}
              description={props.description}
              width="32px"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max"> 18° </span>
              <span className="weather-forecast-temperature-min"> 12° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
