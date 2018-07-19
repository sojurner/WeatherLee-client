import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import Key from './Key'
import { currWeather, sevenHour, tenDay } from './DataScrape';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: 'denver',
      // time: '',
      // date: '',
      CurrentWeather: null,
      SevenHourForecast: null,
      TenDayForecast: null
    }
  }

  getWeather() {
    const url = `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${this.state.userLocation}.json`
    fetch(url)
      .then(response => response.json()).then(response => {
      this.setState({
        CurrentWeather: currWeather(response),
        SevenHourForecast: sevenHour(response),
        TenDayForecast: tenDay(response)
      })
      console.log(currWeather(response))
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
      <Search  userLocation={this.state.userLocation} setLocation={this.setLocation}/>
      </div>
    )
  }

}

export default App;