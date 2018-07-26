import React, { Component } from 'react';
import './Search.css';

import CityStateData from './Algorithms/CityStateData';
const { Trie } = require('@sojurner/complete-me/lib');

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: props.userLocation,
      suggestedLocations: []
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
          <input className="search-box" type="text" placeholder=" Enter city / zipcode" onChange={(e) => { this.updateVal(e); this.showSuggestions(e) } } />
          <button className="search-button" onClick={(e) => 
            {this.props.setLocation(this.state.location);
            document.querySelector('.search-box').value = ''} }>Search</button>
          <section className="input-suggest-list">
            {this.state.suggestedLocations.map((location, i) => {
              if(i < 3 && this.state.location.length > 3) {
                return (
                  <p className="input-suggestions" key={i} onClick={(e) => {
                    this.props.setLocation(e.target.textContent)
                    this.setState({suggestedLocations: []})
                    document.querySelector('.search-box').value = ''}}>{location}
                  </p>
                )
              }
            })}
          </section>
        </div>
      )
    }
    return( 
      <div className="rendered-search">
        <input className="rendered-search-box" type="text" placeholder=" Enter city / zipcode" onChange={(e) => { this.updateVal(e); this.showSuggestions(e) } } />
        <button className="rendered-search-button" onClick={(e) => {
          this.props.setLocation(this.state.location);
          document.querySelector('input').value = ''} }>Search
        </button> 
        <section className="rendered-suggest-list-two">
            {this.state.suggestedLocations.map((location, i) => {
              if(i < 3 && this.state.location.length > 3) {
                return (
                  <p className="rendered-suggestions" key={i} onClick={(e) => {
                    this.props.setLocation(e.target.textContent);
                    this.setState({suggestedLocations: []})
                    document.querySelector('input').value = ''} }>{location} 
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