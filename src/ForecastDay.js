import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  function iconLink() {
    let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return icon;
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }
  return (
    <div className="Forecast">
      <span className="forecastDay">{day()}</span>
      <WeatherIcon
        icon={iconLink()}
        description={props.data.weather[0].description}
        iconW="60"
        iconH="60"
      />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {" "}
          {maxTemperature()}{" "}
        </span>
        <span className="weather-forecast-temperature-min">
          {" "}
          {minTemperature()}{" "}
        </span>
      </div>
    </div>
  );
}
