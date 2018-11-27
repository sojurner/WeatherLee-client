import React from 'react';
import '../CSS/CurrentWeather.css';

export const CurrentWeather = ({ currentWeather, userLocation }) => {
  console.log(currentWeather);
  return (
    <div className="current-weather">
      <p
        className={
          userLocation.length < 8
            ? 'current-location-normal'
            : 'current-location-small'
        }
      >
        {userLocation}
      </p>
      <p className="current-time">{currentWeather.time}</p>
      <p className="current-temp">{currentWeather.current}</p>
      <div className="high-low">
        <p className="current-high">{currentWeather.high}</p>
        <p className="current-low">{currentWeather.low}</p>
      </div>
      <div className="icon-wrapper">
        <img
          className="weather-icon"
          height="120"
          src={require(`../img/weather/${currentWeather.icon}.png`)}
        />
      </div>
      {/* <div className="background-placer-1" />
      <div className="background-placer-2" />
      <div className="background-placer-3" />
      <div className="background-placer-4" /> */}

      <div className="vertical-right-link-1" />
      <div className="vertical-left-link-1" />
      <div className="right-link-1" />
      <div className="right-link-2" />

      <div className="left-link-1" />
      <div className="left-link-2" />

      <div className="down-link-short-1a" />
      <div className="down-link-short-1b" />

      <div className="right-link-short-1" />
      <div className="right-link-short-2" />

      <div className="down-link-short-3c" />

      <div className="horizontal-bottom-1" />
      <div className="vertical-bottom-1" />

      <div className="spinning-globe" />

      {/* <p className="current-conditions">{currentWeather.conditions}</p>
      <p className="current-sunrise">
        <i class="far fa-sun sunrise" />
        {currentWeather.sunriseTime}
      </p>
      <p className="current-sunset">
        <i class="far fa-sun sunset" />
        {currentWeather.sunsetTime}
      </p>
      <p className="current-precipitation">{currentWeather.precipitation}</p> */}
    </div>
  );
};
