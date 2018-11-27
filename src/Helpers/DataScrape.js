import * as moment from 'moment';

export const currWeather = data => {
  const currDayObj = {
    current: floorNumbers(data.currently.temperature) + '°F',
    time: moment.unix(data.currently.time).format('ddd - MMM D, LT'),
    high: floorNumbers(data.daily.data[0].temperatureHigh) + '°',
    low: floorNumbers(data.daily.data[0].temperatureLow) + '°',
    conditions: data.daily.data[0].summary,
    precipitation:
      floorNumbers(data.daily.data[0].precipProbability) * 100 + '%',
    sunriseTime: moment.unix(data.daily.data[0].sunriseTime).format('LT'),
    sunsetTime: moment.unix(data.daily.data[0].sunsetTime).format('LT'),
    icon: data.currently.icon
  };
  return currDayObj;
};

const floorNumbers = number => {
  return Math.floor(number);
};

export const daily = cityData => {
  return cityData.daily.data
    .map(day => {
      return {
        time: moment.unix(day.time).format('ddd'),
        high: {
          temp: day.temperatureHigh + '°',
          time: moment.unix(day.temperatureHighTime).format('LT')
        },
        low: {
          temp: day.temperatureLow + '°',
          time: moment.unix(day.temperatureLowTime).format('LT')
        },
        conditions: day.summary,
        precipitation: day.precipProbability * 100 + '%',
        sunriseTime: moment.unix(day.sunriseTime).format('LT'),
        sunsetTime: moment.unix(day.sunsetTime).format('LT')
      };
    })
    .slice(1);
};

export const hourly = cityData => {
  return cityData.hourly.data
    .map(hour => {
      return {
        time: moment.unix(hour.time).format('LT'),
        humidity: hour.humidity + '%',
        temperature: hour.temperature + '°F',
        apparentTemperature: hour.apparentTemperature + '°F',
        precipitation: hour.precipProbability * 100 + '%'
      };
    })
    .slice(1, 25);
};

export const scrapePhoto = data => {
  const randPhoto = data.hits[Math.floor(Math.random() * data.hits.length)];
  return randPhoto.largeImageURL;
};
