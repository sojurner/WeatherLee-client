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

export const daily = cityData => {
  return cityData.daily.data
    .map(day => {
      return {
        time: moment.unix(day.time).format('ddd, MMM D'),
        high: {
          temp: day.temperatureHigh + '°F',
          time: moment.unix(day.temperatureHighTime).format('LT')
        },
        low: {
          temp: day.temperatureLow + '°F',
          time: moment.unix(day.temperatureLowTime).format('LT')
        },
        conditions: day.summary,
        precipitation: day.precipProbability,
        sunriseTime: moment.unix(day.sunriseTime).format('LT'),
        sunsetTime: moment.unix(day.sunsetTime).format('LT')
      };
    })
    .slice(1);
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
