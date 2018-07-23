import React, { Component } from 'react'

export class SevenHourTab extends Component{
	constructor(props) {
		super(props)
			this.state = {
				currentWeather: false,
					sevenHourClicked: true,
					tenDayClicked: false
		}
	}

	render() {
		return(
			<div>
				<button className="seven-hour-button" onClick={
					e => this.props.changeWeatherClicked(this.state.currentWeather, this.state.sevenHourClicked, this.state.tenDayClicked )}>Seven Hour</button>
				</div>
		)
	}
}

