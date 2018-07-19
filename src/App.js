import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Key from './Key';
import { SevenHourForecast } from './SevenHourForecast';
import { TenDayForecast } from './TenDayForecast';
import { currWeather, sevenHour, tenDay } from './DataScrape';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: '',
      CurrentTime: '',
      CurrentWeather: {},
      SevenHourForecast: [],
      TenDayForecast: []
    }
  }

  getWeather() {
    const url = `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${this.state.userLocation}.json`
    fetch(url)
      .then(response => response.json()).then(response => {
        this.setState({
          CurrentTime: currWeather(response).time,
          CurrentWeather: currWeather(response),
          SevenHourForecast: sevenHour(response),
          TenDayForecast: tenDay(response)
        })
      })
      .catch(error => {
      throw new Error(error)
      })
    }
  
  setLocation = (search) => {
    this.setState( {userLocation: search.location}, this.getWeather);
  }

  render() {
    return (
      <div>
        <Welcome />
        <SevenHourForecast sevenHourForecast={this.state.SevenHourForecast} />
        <TenDayForecast tenDayForecast={this.state.TenDayForecast} />
        <Search  userLocation={this.state.userLocation} setLocation={this.setLocation}/>
      </div>
    )
  }

}

export default App;