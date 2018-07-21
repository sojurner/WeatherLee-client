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
    if (!this.props.searched) {
      return(
        <div className="input-search rendered-search">
          <input className="search-box" type="text" placeholder="(City,State)/ZipCode" onChange={this.updateVal} />
          <button className="search-button" onClick={(e) => this.props.setLocation(this.state.location)}>Search</button>
        </div>
      )
  }
  return( 
    <div className="input-search rendered-search">
          <input className="search-box-two" type="text" placeholder="(City,State)/ZipCode" onChange={this.updateVal} />
          <button className="search-button-two" onClick={(e) => this.props.setLocation(this.state.location)}>Search</button>
    </div>
  )
}
}

export default Search;