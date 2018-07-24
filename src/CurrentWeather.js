import React from 'react';

export const CurrentWeather = props => {
  return (
    <div className="current-weather">
      <p className="current-location">{props.currentWeather.location}</p>
      <p className="current-time">{props.currentWeather.time}</p>
      <p className="current-temp">{props.currentWeather.current}</p>
      <p className="current-high"><span>↑</span> {props.currentWeather.high}</p>
      <p className="current-low"><span>↓</span> {props.currentWeather.low}</p>
      <p className="current-conditions">{props.currentWeather.conditions}</p>
      <img className="current-icon" src={props.currentWeather.icon} />
    </div>
  );
}
