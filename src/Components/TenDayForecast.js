import React from 'react';
import { Card } from './Card';
import '../CSS/TenDayForecast.css';

export const TenDayForecast = props => {
  return (
    <div className="ten-day">
      {props.tenDayForecast.map((day, index) => {
        return (
          <Card
            key={index}
            day={day.day}
            date={day.date}
            high={day.high}
            low={day.low}
            icon={day.icon}
          />
        );
      })}
    </div>
  );
};
