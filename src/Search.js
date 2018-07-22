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
      <div className="input-search rendered-search">
        <input className="search-box" type="text" placeholder="(City,State)/ZipCode" onChange={this.updateVal} />
        <button className="search-button" onClick={(e) => this.props.setLocation(this.state.location)}>Search</button>
      </div>
    )
  }
}

export default Search;