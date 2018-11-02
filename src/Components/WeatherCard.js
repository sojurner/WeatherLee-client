import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../CSS/WeatherCard.css';

class WeatherCard extends Component {
  constructor() {
    super();
    this.state = {
      day: '',
      active: null
    };
  }

  displayHeaders = () => {
    const { weather } = this.props;
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
      : (weatherType = weather.map((type, index) => {
          return (
            <th
              onClick={event => this.handleClick(event, index)}
              className={
                this.state.active === index ? 'day-active' : 'day-of-week'
              }
            >
              {type.time}
            </th>
          );
        }));
    return weatherType;
  };

  displayCards = () => {
    const matchingCard = this.props.weather.filter(
      day => day.time === this.state.day
    );

    return matchingCard.map(card => {
      return (
        <section className="weekly weekly-cards">
          <p className="weekly weekly-high">↑{card.high.temp}</p>
          <p className="weekly weekly-low">↓{card.low.temp}</p>
          <p className="weekly weekly-condition">{card.conditions}</p>
          <p className="weekly weekly-sunrise">
            <i class="far fa-sun sunrise" /> {card.sunriseTime}
          </p>
          <p className="weekly weekly-sunset">
            <i class="far fa-sun sunset" /> {card.sunsetTime}
          </p>
          <p className="weekly weekly-rain">
            <i class="fas fa-tint rain" /> {card.precipitation}
          </p>
        </section>
      );
    });
  };

  handleClick = (event, index) => {
    event.preventDefault();
    this.setState({ active: index, day: event.target.textContent });
  };

  render() {
    const { closeModal } = this.props;
    const cards = this.displayHeaders();
    const matchingCard = this.displayCards();
    return (
      <div className="weather-card">
        <Link className="link" onClick={closeModal} exact to="/">
          X
        </Link>
        <h1 className="seven-day-title">7-day Forecast</h1>
        <table>
          <tbody>
            <tr>{cards}</tr>
          </tbody>
        </table>
        {this.state.day && matchingCard}
      </div>
    );
  }
}

export default WeatherCard;
