import React from 'react'
import Key from './Key.js'

const ApiKey = (city) => {
  return fetch(
    'http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${city}.json'
    .then(response => response.json()).then(data=>console.log(data))
  ).catch(error => {
    throw new Error(error)
  })
}

export default ApiKey;