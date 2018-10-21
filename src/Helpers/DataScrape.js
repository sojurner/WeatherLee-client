import * as moment from 'moment';

export const currWeather = data => {
  const currDayObj = {
    current: data.currently.temperature + '°F',
    time: moment.unix(data.currently.time).format('LT'),
    high: data.daily.data[0].temperatureHigh + '°F',
    low: data.daily.data[0].temperatureLow + '°F',
    conditions: data.daily.data[0].summary,
    precipitation: data.daily.data[0].precipProbability,
    sunriseTime: moment.unix(data.daily.data[0].sunriseTime).format('LT'),
    sunsetTime: moment.unix(data.daily.data[0].sunsetTime).format('LT')
  };
  return currDayObj;
};

export const sevenHour = response => {
  return response.hourly_forecast
    .filter(obj => Object.values(obj))
    .reduce((sevenHour, hour, i) => {
      if (i < 8) {
        sevenHour.push({
          time: hour.FCTTIME.civil,
          temp: Math.floor(hour.temp.english) + "°F",
          condition: hour.condition,
          icon_url: hour.icon_url
        });
      }
      return sevenHour;
    }, []);
};

export const tenDay = data => {
  return data.forecast.simpleforecast.forecastday.map(obj => {
    return {
      day: obj.date.weekday,
      date: obj.date.month + "/" + obj.date.day + "/" + obj.date.year,
      high: obj.high.fahrenheit + "°F",
      low: obj.low.fahrenheit + "°F",
      icon: obj.icon_url
    };
  });
};
