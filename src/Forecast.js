import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="weather-forecast">
        <div className="row">
          <div className="col-sm-2">
            Thu
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
              width="42px"
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
