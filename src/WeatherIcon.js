import React from "react";

export default function WeatherIcon(props) {
  let iconlink = props.icon;

  return (
    <div className="weatherIcon">
      <img
        src={iconlink}
        alt={props.iconDescription}
        size={props.size}
        id="icon"
      />
    </div>
  );
}
