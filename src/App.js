import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import Key from './Key';
import { CurrentWeatherTab } from './CurrentWeatherTab'
import { SevenHourTab } from './SevenHourTab'
import { TenDayTab } from './TenDayTab'
import { CurrentWeather } from './CurrentWeather';
import { SevenHourForecast } from './SevenHourForecast';
import { TenDayForecast } from './TenDayForecast';
import { currWeather, sevenHour, tenDay } from './DataScrape';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: '',
      currentWeather: {},
      sevenHourForecast: [],
      tenDayForecast: [],
      currentWeatherClicked: true,
      sevenHourClicked: false,
      tenDayClicked: false,
      searched: false,
      error: false
    }
  }
  
  componentDidMount = () => {
    if(localStorage.getItem('Location')) {
      this.getWeather(JSON.parse(localStorage.getItem('Location')))
    }
  }

  getWeather = search => {
    const url = `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${search}.json`
    fetch(url)
      .then(response => response.json()).then(response => {
        this.setState({
          currentTime: currWeather(response).time,
          currentWeather: currWeather(response),
          sevenHourForecast: sevenHour(response),
          tenDayForecast: tenDay(response),
          searched: true,
          error: false
        })
        return this.state
      })
      .catch(error => {
      // throw new Error(error)
        this.setState({
          error: true
        })
      })
      localStorage.setItem('Location', JSON.stringify(search))
    }

  setLocation = search => {
    this.setState( { userLocation: search })
    this.getWeather(search);
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
        {this.state.searched && <TenDayTab changeWeatherClicked={this.changeWeatherClicked} /> }
        {this.state.currentWeatherClicked && <CurrentWeather currentWeather={this.state.currentWeather} /> }
        {this.state.sevenHourClicked && <SevenHourForecast sevenHourForecast={this.state.sevenHourForecast} />}
        {this.state.tenDayClicked && <TenDayForecast tenDayForecast={this.state.tenDayForecast} /> }
      </div>
    )
  }
}

export default App;