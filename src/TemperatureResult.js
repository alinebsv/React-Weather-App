import React, { useState } from "react";

export default function TemperatureResult(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperatureResult">
        <strong id="temperature">{props.celsius}</strong>
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemperature = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="temperatureResult">
        <strong id="temperature">{fahrenheitTemperature}</strong>
        <span className="units">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
