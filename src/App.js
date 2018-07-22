import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import { CurrentWeatherTab } from './CurrentWeatherTab'
import { SevenHourTab } from './SevenHourTab'
import { TenDayTab } from './TenDayTab'
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
      currentWeatherClicked: true,
      sevenHourClicked: false,
      tenDayClicked: false,
      searched: false,
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
          searched: true,
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

  setLocation = search => {
    this.setState( { userLocation: search }, this.getWeather);
  }

  changeWeatherClicked = (current, seven, ten) => {
    this.setState({ 
      currentWeatherClicked: current,
      sevenHourClicked: seven,
      tenDayClicked: ten
    })
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
        <Search searched={this.state.searched} userLocation={this.state.userLocation} setLocation={this.setLocation} /> 
        {this.state.searched && <CurrentWeatherTab changeWeatherClicked={this.changeWeatherClicked} /> }
        {this.state.searched && <SevenHourTab changeWeatherClicked={this.changeWeatherClicked} />}
        {this.state.searched &&<TenDayTab changeWeatherClicked={this.changeWeatherClicked} /> }
        {this.state.currentWeatherClicked && <CurrentWeather currentWeather={this.state.CurrentWeather} /> }
        {this.state.sevenHourClicked && <SevenHourForecast sevenHourForecast={this.state.SevenHourForecast} />}
        {this.state.tenDayClicked && <TenDayForecast tenDayForecast={this.state.TenDayForecast} /> }
      </div>
    )
  }
}

export default App;