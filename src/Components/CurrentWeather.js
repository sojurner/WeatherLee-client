import React from 'react';
import '../CSS/CurrentWeather.css';

export const CurrentWeather = ({ currentWeather, userLocation }) => {
  return (
    <div className="current-weather">
      <p className="current-location-1">{userLocation}</p>
      <p className="current-time">{currentWeather.time}</p>
      <p className="current-temp">{currentWeather.current}</p>
      <p className="current-high">↑{currentWeather.high}</p>
      <p className="current-low">↓{currentWeather.low}</p>
      <p className="current-conditions">{currentWeather.conditions}</p>
      <p className="current-sunrise">
        <i class="far fa-sun sunrise" />
        {currentWeather.sunriseTime}
      </p>
      <p className="current-sunset">
        <i class="far fa-sun sunset" />
        {currentWeather.sunsetTime}
      </p>
      <p className="current-precipitation">{currentWeather.precipitation}</p>
    </div>
  );
};
