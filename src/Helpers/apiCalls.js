import { scrapePhoto } from './DataScrape';

export const fetchWeatherData = async (location, locationType) => {
  if (locationType === 'geoLocation') {
    const response = await fetch(
      `https://weatherlee-server.herokuapp.com/api/darksky?latitude=${
        location.coords.latitude
      }&longitude=${location.coords.longitude}`,
      null
    );
    return await response.json();
  }
  if (locationType === 'inputLocation') {
    const response = await fetch(
      `https://weatherlee-server.herokuapp.com/api/darksky?latitude=${
        location.lat
      }&longitude=${location.lng}`,
      null
    );
    return await response.json();
  }
};

export const fetchLocationPic = async condition => {
  let search;
  switch (condition) {
    case 'clear-day':
      search = 'sun';
      break;
    case 'clear-night':
      search = 'clear night';
      break;
    case 'rain':
      search = 'rain';
      break;
    case 'snow':
      search = 'snow';
      break;
    case 'wind':
      search = 'wind';
      break;
    case 'fog':
      search = 'fog';
      break;
    case 'cloudy':
      search = 'clouds';
      break;
    case 'partly-cloudy-day':
      search = 'sun';
      break;
    case 'partly-cloudy-night':
      search = 'cloudy night';
      break;
    default:
      search = 'hills';
      break;
  }
  console.log(search);

  const response = await fetch(
    `https://weatherlee-server.herokuapp.com/api/pixabay?q=${search}&category=nature`
  );
  const result = await response.json();
  console.log(result);
  return scrapePhoto(result);
};
