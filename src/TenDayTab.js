import React, { Component } from 'react'

export class TenDayTab extends Component{
    constructor(props) {
      super(props);
      this.state = {
        sevenHourClicked: false,
        tenDayClicked: true,
        currentWeather: false
      }
    }

    render() {
        return(
            <div className="ten-day-button">
                <button className="ten-day-button" onClick={
                    (e) => this.props.changeWeatherClicked(
                        this.state.currentWeather, 
                        this.state.sevenHourClicked,
                        this.state.tenDayClicked)}>Ten Day</button>
            </div>
        )
    }
}

