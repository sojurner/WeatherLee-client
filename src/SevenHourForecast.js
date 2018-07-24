import React from 'react';
import { Card } from './Card';
import './SevenHourForecast.css';

export const SevenHourForecast = props => {
	return(
		<div className="seven-hour">
			{props.sevenHourForecast.map((hour, index) => {
				return(
					<Card 
						key={index}
						time={hour.time}
						temp={hour.temp}
						condition={hour.condition}
						icon_url={hour.icon_url}
					/>
				)	
			})}
		</div>
	)
}