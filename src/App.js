import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weatherly App</h1>
        <input type="text" />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default App;
