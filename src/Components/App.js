import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './Search';
import { fetchWeatherData } from '../Helpers/apiCalls';
import * as scrape from '../Helpers/DataScrape';
import ContentRoutes from './ContentRoutes';
import worldCities from '../Data/worldCities.json';

import '../CSS/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: '',
      latitude: 0,
      longitude: 0,
      currentWeather: {},
      daily: [],
      weekly: [],
      currentWeatherClicked: true,
      sevenHourClicked: false,
      tenDayClicked: false,
      searched: false,
      error: false
    };
  }

  componentDidUpdate = () => {
    console.log(this.state);
  };

  getWeather = async search => {
    const { latitude, longitude, userLocation } = this.state;
    const location = navigator.geolocation.getCurrentPosition(
      async location => {
        await fetchWeatherData(location, 'geoLocation');
      }
    );
  };

  setLocation = async search => {
    const matchingCity = worldCities.find(city => city.city === search);
    const weatherData = await fetchWeatherData(matchingCity, 'inputLocation');
    this.setState({
      currentWeather: scrape.currWeather(weatherData),
      weekly: scrape.daily(weatherData),
      daily: scrape.hourly(weatherData),
      searched: true
    });
  };

  render() {
    const { Current, userLocation, weekly, daily } = this.state;
    return (
      <Router>
        <div
          className={
            !userLocation
              ? 'input-container rendered-container'
              : 'input-container'
          }
        >
          <ContentRoutes
            weather={{ Current, weekly, daily }}
            userLocation={userLocation}
          />
          <Search userLocation={userLocation} setLocation={this.setLocation} />

        {/* <SevenHourTab changeWeatherClicked={this.changeWeatherClicked} />
        <TenDayTab changeWeatherClicked={this.changeWeatherClicked} />
        {this.state.sevenHourClicked && (
          <SevenHourForecast sevenHourForecast={this.state.sevenHourForecast} />
        )}
        {this.state.tenDayClicked && (
          <TenDayForecast tenDayForecast={this.state.tenDayForecast} />
        )} */}
      </div>
    );
  }
}

export default App;
