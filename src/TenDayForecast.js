import React from 'react';

export const TenDay = props => {
  return(
  	<div>
  		{props.tenDay.forEach(day => {
  			<Card
  				day={day.day}
  				date={day.date}
  				high={day.high}
  				low={day.low}
  				icon={day.icon}
				/>
			}
  		)}
  	</div>
	)
}
