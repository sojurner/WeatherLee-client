import React, { Component } from 'react'

class Search extends Component{
	constructor(props) {
		super(props);
		this.state = {
			location: ''
		}
	}

	updateVal = (e) => {
		e.preventDefault()
		this.setState({ location: e.target.value})
		console.log(this.state.location)
	}

	render() {
		return(
			<form>
				<input type="text" placeholder="City/ZipCode" onChange={this.updateVal} />
				<button onClick={(e) => this.props.setLocation(this.state.location)}>Submit</button>
			</form>
		)
	}
	}

	export default Search;