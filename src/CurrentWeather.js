import React from 'react';

export const CurrentWeather = props => {
  return (
    <div className="current-weather">
      <p>{props.currentWeather.location}</p>
      <p>{props.currentWeather.time}</p>
      <p>{props.currentWeather.high}</p>
      <p>{props.currentWeather.low}</p>
      <p>{props.currentWeather.conditions}</p>
      <img src={props.currentWeather.icon} />
    </div>
  );
}
