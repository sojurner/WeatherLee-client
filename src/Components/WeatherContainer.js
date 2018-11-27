import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

import '../CSS/WeatherContainer.css';

class WeatherContainer extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: '24 hour'
    };
  }

  handleClick = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { activeTab } = this.state;
    const { weekly, daily } = this.props;
    return (
      <div>
        <div className="weather-tabs">
          <nav
            onClick={this.handleClick.bind(null, '24 hour')}
            className={
              activeTab === '24 hour' ? 'weather-tab active-tab' : 'weather-tab'
            }
          >
            24 hour
          </nav>
          <nav
            onClick={this.handleClick.bind(null, '7 day')}
            className={
              activeTab === '7 day' ? 'weather-tab active-tab' : 'weather-tab'
            }
          >
            7 day
          </nav>
        </div>
        <WeatherCard activeTab={activeTab} weekly={weekly} daily={daily} />
      </div>
    );
  }
}

export default WeatherContainer;
