import React, { Component } from 'react';
import '../CSS/App.css';
import Welcome from './Welcome';
import WelcomeRendered from './WelcomeRendered';
import Search from './Search';
import { SevenHourTab } from './SevenHourTab';
import { CurrentWeather } from './CurrentWeather';
import { TenDayTab } from './TenDayTab';
import { SevenHourForecast } from './SevenHourForecast';
import { TenDayForecast } from './TenDayForecast';
import worldCities from '../Data/worldCities.json';
import * as scrape from '../Helpers/DataScrape';
import { fetchWeatherData } from '../Helpers/apiCalls';

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
    const { currentWeather, userLocation } = this.state;
    return !this.state.searched ? (
      <div className="input-container rendered-container">
        <Welcome />
        <Search
          userLocation={this.state.userLocation}
          setLocation={this.setLocation}
        />
      </div>
    ) : (
      <div className="input-container">
        <WelcomeRendered />
        <Search
          searched={this.state.searched}
          userLocation={this.state.userLocation}
          setLocation={this.setLocation}
        />
        {this.state.searched && (
          <CurrentWeather
            currentWeather={currentWeather}
            userLocation={userLocation}
          />
        )}
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
