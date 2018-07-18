import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import Key from './Key'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: 'denver',
      time: '',
      date: '',
      CurrentWeather: [],
      SevenHourForecast: [],
      TenDayForecast: []
    }
  }


  componentDidMount() {
    const url = `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${this.state.userLocation}.json`
    fetch(url)
      .then(response => response.json()).then(data=>
      this.setState( {
        userLocation: this.state.userLocation,
      })
      )
      .catch(error => {
      throw new Error(error)
      })
    }
  

  setLocation = (location) => {
    location.preventDefault()
    this.setState( {userLocation: location})
  }

  render() {
    return (
      <div>
      <Welcome />
      <Search  cityLocation={this.setLocation}/>
      </div>
    )
  }

}

export default App;
