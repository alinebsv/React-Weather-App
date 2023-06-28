import React from "react";
import FormattedDate from "./FormattedDate.js";
import TemperatureResult from "./TemperatureResult.js";
import WeatherIcon from "./WeatherIcon";

export default function WeatherResult(props) {
  return (
    <div className="WeatherResult">
      <div className="Overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="Temperature">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex weather-temperature">
              <WeatherIcon
                icon={props.data.icon}
                iconDescription={props.data.description}
                iconW="72"
                iconH="72"
              />
              <TemperatureResult celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Precipitation: {props.data.precipitation}%</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
