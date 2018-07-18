import Key from './api-key.js';
const root = 'http://api.wunderground.com/api/';

const getApi = (city) => {
  return fetch(
    `${root}${Key}/geolookup/conditions/hourly/forecast10day/q/${city}.json`)
    .then( response => response.json() );
}

export default ApiKey;