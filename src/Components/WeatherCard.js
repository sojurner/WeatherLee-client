import React from 'react';
import { Link } from 'react-router-dom';

export const WeatherCard = ({ weather, closeModal }) => {
  let weatherType;
  if (weather.length === 24) {
    weatherType = weather.map(type => {
      return (
        <section>
          <p>Time: {type.time}</p>
          <p>Temperature: {type.temperature}</p>
          <p>Feels Like: {type.apparentTemperature}</p>
          <p>Humidity: {type.humidity}</p>
          <p>Chance of Rain {type.precipitation}</p>
        </section>
      );
    });
  }
  return (
    <div>
      <Link onClick={closeModal} exact to="/">
        X
      </Link>
      <h1>24-Hour</h1>
      {weatherType}
    </div>
  );
};
