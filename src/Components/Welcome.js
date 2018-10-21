import React from 'react';
import '../CSS/Welcome.css';
import { NavBar } from './NavBar';
import { CurrentWeather } from './CurrentWeather';

export const Welcome = ({ userLocation, current, openModal }) => {
  return !userLocation ? (
    <div className="welcome-title">
      <h1 className="input-welcome">WeatherLy</h1>
    </div>
  ) : (
    <div className="navigation">
      <NavBar openModal={openModal} />
      <CurrentWeather currentWeather={current} userLocation={userLocation} />
    </div>
  );
};

export default Welcome;
