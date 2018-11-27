import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import '../CSS/WeatherCard.css';
class WeatherCard extends Component {
  render() {
    const { weekly, daily } = this.props;
    console.log(weekly);
    console.log(daily);
    let cards;
    this.props.activeTab === '7 day'
      ? (cards = weekly.map(day => {
          return (
            <div>
              <h4 className="day-time">{day.time}</h4>
              <p className="day-high">{day.high.temp}</p>
              <p className="day-low">{day.low.temp}</p>
            </div>
          );
        }))
      : (cards = daily.map((hour, index) => {
          return (
            <div role="menuitem" tabIndex={`${index}`}>
              <h4 className="hour-time">{hour.time}</h4>
              <p className="hour-temp">{hour.temperature}</p>
            </div>
          );
        }));

    return (
      <Coverflow enableScroll={false} displayQuantityOfSide={2}>
        {cards}
      </Coverflow>
    );
  }
}

export default WeatherCard;
