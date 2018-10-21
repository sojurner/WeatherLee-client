import React from 'react';
import '../CSS/Welcome.css';
import { NavBar } from './NavBar';
import { CurrentWeather } from './CurrentWeather';

export const Welcome = ({ userLocation, current, openModal }) => {
  console.log(userLocation);
  return !userLocation ? (
    <div className="welcome-title">
      <h1 className="input-welcome">WeatherLy</h1>
    </div>
  ) : (
    <div className="navigation">
      <CurrentWeather currentWeather={current} />
      <NavBar openModal={openModal} />
    </div>
  );
};

export default Welcome;
