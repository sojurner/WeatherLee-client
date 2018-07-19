import React from 'react';

export const Card = props => {
	if(props.condition) {
		return (
			<div>
				<p>{props.time}</p>
				<p>{props.temp}</p>
				<p>{props.condition}</p>
				<p>{props.icon_url}</p>
			</div>
			
		)
	}

	return (
		<div>
			<p>{props.day}</p>
			<p>{props.date}</p>
			<p>{props.high}</p>
			<p>{props.low}</p>
			<p>{props.icon}</p>
		</div>
		
	)

}