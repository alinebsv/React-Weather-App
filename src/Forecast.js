import React, { useState } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily[0]);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="weather-forecast">
          <div className="row">
            <ForecastDay data={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
