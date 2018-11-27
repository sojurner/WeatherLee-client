import React from 'react';
import '../CSS/Welcome.css';
import WeatherContainer from './WeatherContainer';
import { CurrentWeather } from './CurrentWeather';

export const Welcome = ({ userLocation, current, daily, weekly }) => {
  return !userLocation ? (
    <div className="welcome-title">
      <h1 className="input-welcome">WeatherLy</h1>
    </div>
  ) : (
    <div className="navigation">
      <CurrentWeather currentWeather={current} userLocation={userLocation} />
      <WeatherContainer daily={daily} weekly={weekly} />
    </div>
  );
};

export default Welcome;
