import React, { Component } from 'react'

class Search extends Component{
	constructor() {
		super();
		this.state ={
			location: ''
		}
	}

	updateVal = (e) => {
		this.setState({ location: e.target.value})
		console.log(this.state.location)
	}

	render() {
		return(
			<form>
				<input type="text" placeholder="City/ZipCode" onChange={this.updateVal} />
				<button onClick={() => this.props.setLocation(this.state.location)}>Submit</button>
			</form>
			)
	}
	}

	export default Search;