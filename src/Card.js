import React from "react";

export const Card = props => {
  if (props.condition) {
    return (
      <div className="seven-hour-cards">
        <p className="seven-hour-time">{props.time}</p>
        <p className="seven-hour-temperature">{props.temp}</p>
        <p className="seven-hour-conditions">{props.condition}</p>
        <img className="seven-hour-icon" src={props.icon_url} />
      </div>
    );
  }
  return (
    <div className="ten-day-cards">
      <p className="ten-day-day">{props.day}</p>
      <p className="ten-day-date">{props.date}</p>
      <p className="ten-day-high">{props.high}</p>
      <p className="ten-day-low">{props.low}</p>
      <img className="ten-day-icon" src={props.icon} />
    </div>
  );
};
//indentation
