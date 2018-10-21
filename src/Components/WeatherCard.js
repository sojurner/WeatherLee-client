import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/WeatherCard.css';

export const WeatherCard = ({ weather, closeModal }) => {
  let weatherType;
  weather.length === 24
    ? (weatherType = weather.map(type => {
        return (
          <section className="daily-cards">
            <p className="daily-time">Time: {type.time}</p>
            <p className="daily-temp">Temperature: {type.temperature}</p>
            <p className="daily-actual">
              Feels Like: {type.apparentTemperature}
            </p>
            <p className="daily-humidity">Humidity: {type.humidity}</p>
            <p className="daily-rain">Chance of Rain {type.precipitation}</p>
          </section>
        );
      }))
    : (weatherType = weather.map(type => {
        return (
          <section className="weekly-cards">
            <p className="weekly-time">{type.time}</p>
            <p className="weekly-high">
              ↑ {type.high.temp} @ {type.high.time}
            </p>
            <p className="weekly-low">
              ↓ {type.low.temp} @ {type.low.time}
            </p>
            <p className="weekly-sunrise">
              <i class="far fa-sun sunrise" />
              {type.sunriseTime}
            </p>

            <p className="weekly-sunset">
              <i class="far fa-sun sunset" />
              {type.sunsetTime}
            </p>

            <p className="weekly-rain">
              <i class="fas fa-tint rain" />
              {type.precipitation}
            </p>
          </section>
        );
      }));
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
