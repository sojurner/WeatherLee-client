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
      Current: {},
      daily: [],
      weekly: [],
      error: false
    };
  }

  componentDidUpdate = () => {
    console.log(this.state);
  };

  componentDidMount() {
    // this.getLocation();
  }

  // getLocation = async () => {
  //   await navigator.geolocation.getCurrentPosition(async location => {
  //     const weatherData = await fetchWeatherData(location, 'geoLocation');
  //     const { timezone } = weatherData;
  //     const userLocation = `${timezone.slice(8)}, ${timezone.slice(0, 7)} `;
  //     this.setState({
  //       Current: scrape.currWeather(weatherData),
  //       weekly: scrape.daily(weatherData),
  //       daily: scrape.hourly(weatherData),
  //       userLocation
  //     });
  //   });
  // };

  setLocation = async search => {
    const matchingCity = worldCities.find(city => city.city === search);
    const userLocation = `${matchingCity.city}, ${matchingCity.country} `;
    const weatherData = await fetchWeatherData(matchingCity, 'inputLocation');
    this.setState({
      Current: scrape.currWeather(weatherData),
      weekly: scrape.daily(weatherData),
      daily: scrape.hourly(weatherData),
      userLocation
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
      </Router>
    );
  }
}

export default App;
