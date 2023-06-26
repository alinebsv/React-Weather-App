import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    let hour = `0${hour}`;
  }
  var minutes = props.date.getMinutes();
  if (minutes < 10) {
    var minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hour}:{minutes}
    </div>
  );
}
