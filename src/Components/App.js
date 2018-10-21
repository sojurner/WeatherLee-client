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

  componentDidMount = () => {
    // if (localStorage.getItem('Location')) {
    this.getWeather(localStorage.getItem('Location'));
    // }
  };

  getWeather = async search => {
    const { latitude, longitude } = this.state;
    const location = navigator.geolocation.getCurrentPosition(
      async location => {
        const response = await fetch(
          `/api/darksky?latitude=${location.coords.latitude}&longitude=${
            location.coords.longitude
          }`,
          null
        );
        const x = await response.json();
        console.log(x);
      }
    );
    console.log(location);
  };

  setLocation = search => {
    this.setState({ userLocation: search });
    this.getWeather(search);
  };

  changeWeatherClicked = (current, seven, ten) => {
    this.setState({
      currentWeatherClicked: current,
      sevenHourClicked: seven,
      tenDayClicked: ten
    });
  };

  render() {
    if (this.state.searched === false) {
      return (
        <div className="input-container rendered-container">
          <Welcome />
          <Search
            userLocation={this.state.userLocation}
            setLocation={this.setLocation}
          />
        </div>
      );
    }
    return (
      <div className="input-container">
        <WelcomeRendered />
        <Search
          searched={this.state.searched}
          userLocation={this.state.userLocation}
          setLocation={this.setLocation}
        />
        {this.state.searched && (
          <CurrentWeather currentWeather={this.state.currentWeather} />
        )}
        <SevenHourTab changeWeatherClicked={this.changeWeatherClicked} />
        <TenDayTab changeWeatherClicked={this.changeWeatherClicked} />
        {this.state.sevenHourClicked && (
          <SevenHourForecast sevenHourForecast={this.state.sevenHourForecast} />
        )}
        {this.state.tenDayClicked && (
          <TenDayForecast tenDayForecast={this.state.tenDayForecast} />
        )}
      </div>
    );
  }
}

export default App;
