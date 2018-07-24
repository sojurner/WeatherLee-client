import React, { Component } from 'react'

export class TenDayTab extends Component{
    constructor(props) {
      super(props);
      this.state = {
        sevenHourClicked: false,
        tenDayClicked: true,
        currentWeather: false,
      }
    }

    render() {
        if(this.state.tenDayClicked){
        return(
            <div className="ten-day-button">
                <button className="ten-day-button" onClick={
                    (e) => {this.props.changeWeatherClicked(this.state.currentWeather, this.state.sevenHourClicked, this.state.tenDayClicked);
                        this.setState( {currentWeather: false})}}
                         >Ten Day</button>
            </div>
        )}
        return(
            <div className="ten-day-button-clicked">
            <button className="ten-day-button-clicked">Ten Day</button>
            </div>
        )
    }
}

