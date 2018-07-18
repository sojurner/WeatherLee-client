import React from 'react'
import Search from './Search'

const Welcome = (props) => {
		return (
		<div>
		<h1>Weatherly</h1>
		<h2>{props.cityLocation}</h2>
		</div>
	)
}

export default Welcome;