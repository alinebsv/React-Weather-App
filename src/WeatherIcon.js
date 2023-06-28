import React from "react";

export default function WeatherIcon(props) {
  let iconlink = props.icon;

  return (
    <div className="weatherIcon">
      <img src={iconlink} alt={props.iconDescription} id="icon" />
    </div>
  );
}
