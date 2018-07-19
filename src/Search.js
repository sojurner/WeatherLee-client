import React, { Component } from 'react'

class Search extends Component{
	constructor(props) {
		super(props);
		this.state = {
			location: props.userLocation
		}
	}

	updateVal = (e) => {
		e.preventDefault()
		this.setState({ location: e.target.value})
		console.log(this.state.location)
	}

	render() {
		return(
			<div>
				<input type="text" placeholder="City/ZipCode" onChange={this.updateVal} />
				<button onClick={(e) => this.props.setLocation(this.state)}>Submit</button>
			</div>
		)
	}
	}

	export default Search;