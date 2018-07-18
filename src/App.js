import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: '',
    }
  }

  // getWeather = async (city) => {
  //   city.preventDefault()
  //   const api_call = await fetch(`${root}${apiKey}/geolookup/conditions/hourly/forecast10day/q/${city}.json`);
  //   const data = await api_call.json();
  //   console.log(data)
  // }

  setLocation = (location) => {
    location.preventDefault()
    this.setState( {userLocation: location})
  }

  render() {
    return (
      <div>
      <Welcome cityLocation={this.setLocation}/>
      <Search getWeather={this.getWeather}/>
      </div>
    )
  }

}

export default App;
