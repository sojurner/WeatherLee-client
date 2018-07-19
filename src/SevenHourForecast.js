import React from 'react';


export const SevenHourForecast = props => {
	return(
		<div>
			{props.sevenHour.forEach(hour => {
				<Card 
					time={hour.time}
					temp={hour.temp}
					condition={hour.condition}
					icon_url={hour.icon_url}
				/>
			}
			)}
		</div>
	)
}