import React, { Component } from 'react';
import CityStateData from './Algorithms/CityStateData';
const { Trie } = require('@sojurner/complete-me/lib');

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: props.userLocation,
      suggestedLocations: [],
    }

    this.trie = new Trie()
    this.trie.populate(CityStateData.cityStateData.sort());
  }

  updateVal = (e) => {
    this.setState({ location: e.target.value})
  }

  showSuggestions() {
    if (!this.state.location) {
      this.setState({suggestedLocations: []});
    } else {
      this.setState({suggestedLocations: this.trie.suggest(this.state.location)})
    }
  }

  render() {
    if (!this.props.searched) {
      return(
        <div className="input-search">
          <input className="search-box" type="text" placeholder=" City/ZipCode" onChange={(e) => { this.updateVal(e); this.showSuggestions(e) } } />
          <button className="search-button" onClick={(e) => 
            {this.props.setLocation(this.state.location)}}>Search</button>
          <section className="suggest-list">
            {this.state.suggestedLocations.map((location, i) => {
              if(i < 3 && this.state.location.length > 2) {
                return (
                  <p className="suggestions" key={i} onClick={(e) => {
                    this.props.setLocation(e.target.textContent)
                    this.setState({suggestedLocations: []})}}>{location}
                  </p>
                )
              }
            })}
            
          </section>
        </div>
      )
    }
    return( 
      <div className="input-search rendered-search">
        <input className="search-box-two" type="text" placeholder="City / ZipCode" onChange={(e) => { this.updateVal(e); this.showSuggestions(e) } } />
        <button className="search-button-two" onClick={(e) => 
          this.props.setLocation(this.state.location)}>Search
        </button> 
        <section className="suggest-list-two">
            {this.state.suggestedLocations.map((location, i) => {
              let parsedState = parseInt(this.state.location)
              if(i < 4 && this.state.location.length > 2) {
                return (
                  <p className="suggestions" key={i} value={location} onClick={(e) => {
                    this.props.setLocation(e.target.textContent);
                    this.setState({suggestedLocations: []})}}>{location}
                  </p>
                )
              }
            })}
            
          </section> 
      </div>
    )
  }
}

export default Search;