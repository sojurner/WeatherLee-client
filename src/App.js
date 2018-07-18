import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import Card from './Card';

const apiKey = '881631f063e09bd3'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: ''
    }
  }

  // getWeather = async (city) => {
  //   city.preventDefault()
  //   const api_call = await fetch(`${root}${apiKey}/geolookup/conditions/hourly/forecast10day/q/${city}.json`);
  //   const data = await api_call.json();
  //   console.log(data)
  // }

  setLocation = (location) => {
    this.setState( {userLocation: location})
  }

  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
