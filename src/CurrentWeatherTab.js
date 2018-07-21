import React, { Component } from 'react'

export class CurrentWeatherTab extends Component{
    constructor(props) {
      super(props);
      this.state = {
        sevenHourClicked: false,
        tenDayClicked: false,
        currentWeather: true
      }
    }
    
    render() {
        return(
            <div>
                <button className="current-weather-button" onClick={
                    (e) => this.props.changeWeatherClicked(
                        this.state.currentWeather, 
                        this.state.sevenHourClicked,
                        this.state.tenDayClicked)}>Current Weather</button>
            </div>
        )
    }
}

