import React from 'react';
import { Card } from './Card';

export const TenDayForecast = props => {
  return(
  	<div>
  		{props.tenDayForecast.map((day, index) => {
        return (
    			<Card
            key={index}
    				day={day.day}
    				date={day.date}
    				high={day.high}
    				low={day.low}
    				icon={day.icon}
  				/>
        )
			})}
  	</div>
	)
}
