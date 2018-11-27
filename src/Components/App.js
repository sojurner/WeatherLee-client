import React, { Component } from 'react';
import Search from './Search';
import { Welcome } from './Welcome';
import { fetchWeatherData, fetchLocationPic } from '../Helpers/apiCalls';
import * as scrape from '../Helpers/DataScrape';
import worldCities from '../Data/worldCities.json';

import '../CSS/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: '',
      background: '',
      Current: {},
      daily: [],
      weekly: [],
      error: false
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(async location => {
      const weatherData = await fetchWeatherData(location, 'geoLocation');
      const { timezone } = weatherData;
      const userLocation = `${timezone.slice(8)} `;
      const background = await fetchLocationPic(weatherData.currently.icon);
      this.setState({
        Current: scrape.currWeather(weatherData),
        weekly: scrape.daily(weatherData),
        daily: scrape.hourly(weatherData),
        userLocation,
        background
      });
    });
  };

  setLocation = async search => {
    const matchingCity = worldCities.find(city => city.city === search);
    const userLocation = `${matchingCity.city}`;
    const weatherData = await fetchWeatherData(matchingCity, 'inputLocation');
    const background = await fetchLocationPic(weatherData.currently.icon);
    this.setState({
      Current: scrape.currWeather(weatherData),
      weekly: scrape.daily(weatherData),
      daily: scrape.hourly(weatherData),
      userLocation,
      background
    });
  };

  render() {
    const { Current, userLocation, weekly, daily, background } = this.state;

    return (
      <div
        className={
          !userLocation
            ? 'input-container rendered-container'
            : 'input-container'
        }
      >
        {background && <img className="background-img" src={background} />}
        <Welcome
          userLocation={userLocation}
          daily={daily}
          weekly={weekly}
          current={Current}
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
