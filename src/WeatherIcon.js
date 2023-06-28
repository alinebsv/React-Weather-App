import React from "react";

export default function WeatherIcon(props) {
  let iconlink = props.icon;
  let iconStyle = { width: `${props.iconW}px`, height: `${props.iconH}px` };

  return (
    <div className="weatherIcon">
      <img
        src={iconlink}
        alt={props.iconDescription}
        id="icon"
        style={iconStyle}
      />
    </div>
  );
}
