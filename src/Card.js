import React from 'react';

export const Card = props => {
	if(props.condition) {
		return (
			<div className="seven-hour">
				<p>{props.time}</p>
				<p>{props.temp}</p>
				<p>{props.condition}</p>
				<img src={props.icon_url} />
			</div>
			
		)
	}

	return (
		<div className="ten-day">
			<p>{props.day}</p>
			<p>{props.date}</p>
			<p>{props.high}</p>
			<p>{props.low}</p>
			<img src={props.icon} />
		</div>
		
	)

}