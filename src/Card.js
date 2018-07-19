import React from 'react';

export const Card = props => {
	return (
		<div>
			<p>{props.time}</p>
			<p>{props.temp}</p>
			<p>{props.condition}</p>
			<p>{props.icon_url}</p>


		</div>

	)


}