import React from 'react';

export const CurrentWeather = ({ currentWeather, userLocation }) => {
  currentWeather;
  return (
    <div className="current-weather">
      <p className="current-location-1">{userLocation}</p>
      <p className="current-time">{currentWeather.time}</p>
      <p className="current-temp">{currentWeather.current}</p>
      <p className="current-high">{currentWeather.high}</p>
      <p className="current-low">{currentWeather.low}</p>
      <p className="current-conditions">{currentWeather.conditions}</p>
      <p className="current-sunrise">Sunrise: {currentWeather.sunriseTime}</p>
      <p className="current-sunset">Sunset: {currentWeather.sunsetTime}</p>
      <p className="current-precipitation">{currentWeather.precipitation}</p>
    </div>
  );
};
