import React from 'react';

export const Card = props => {
	if(props.condition) {
		return (
			<div className="seven-day-cards">
				<p className="seven-hour-time">{props.time}</p>
				<p className="seven-hour-temperature">{props.temp}</p>
				<p className="seven-hour-conditions">{props.condition}</p>
				<img className="seven-hour-icon" src={props.icon_url} />
			</div>
		)
	} return (
		<div>
			<h1>10 Day Forecast</h1>
			<p>{props.day}</p>
			<p>{props.date}</p>
			<p>High: {props.high}</p>
			<p>Low: {props.low}</p>
			<img src={props.icon} />
		</div>
	)
}