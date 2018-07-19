import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import { CurrentWeather } from './CurrentWeather';
import Key from './Key';
import { SevenHourForecast } from './SevenHourForecast';
import { TenDayForecast } from './TenDayForecast';
import { currWeather, sevenHour, tenDay } from './DataScrape';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: '',
      CurrentWeather: {},
      SevenHourForecast: [],
      TenDayForecast: [],
      error: false
    }
  }

  getWeather = () => {
    const url = `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${this.state.userLocation}.json`
    fetch(url)
      .then(response => response.json()).then(response => {
        this.setState({
          CurrentTime: currWeather(response).time,
          CurrentWeather: currWeather(response),
          SevenHourForecast: sevenHour(response),
          TenDayForecast: tenDay(response),
          error: false
        })
      })
      .catch(error => {
      // throw new Error(error)
        this.setState({
          error: true
        })
      })
    }
  
  setLocation = (search) => {
    this.setState( {userLocation: search.location}, this.getWeather);
  }

  render() {
    if(this.state.error === true) {
      return (
        <div className="input-container rendered-container">
          <Welcome />
          <Search userLocation={this.state.userLocation} setLocation={this.setLocation}/>
        </div>
      )
    } 
      return (
        <div className="input-container">
          <Welcome />
          <Search userLocation={this.state.userLocation} setLocation={this.setLocation}/>
          <CurrentWeather currentWeather={this.state.CurrentWeather} />
          <SevenHourForecast sevenHourForecast={this.state.SevenHourForecast} />
          <TenDayForecast tenDayForecast={this.state.TenDayForecast} />
        </div>
    )
  }
}

export default App;