import React from 'react';
import { Card } from './Card';

export const SevenHourForecast = props => {
	return(
		<div>
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