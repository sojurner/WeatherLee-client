import React, { Component } from 'react';
import CityStateData from './Algorithms/CityStateData';
import Trie from './Algorithms/Trie';

class Search extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: props.userLocation,
      suggestedLocations: [],
      selectedCity: ''
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
            {this.updateVal; this.props.setLocation(this.state.location)}}>Search</button>
          <section className="suggest-list">
            <ul>
              {this.state.suggestedLocations.map((location, i) => {
                let parsedState = parseInt(this.state.location)
                if(i < 4 && this.state.location.length > 2) {
                  return (
                    <li key={i} onClick={(e) => {
                      this.setState({selectedCity: {location}}); 
                      this.props.setLocation(this.state.selectedCity)}}>{location}
                    </li>
                  )
                }
              })}
            </ul>
          </section>
        </div>
      )
    }
    return( 
      <div className="input-search rendered-search">
        <input className="search-box-two" type="text" placeholder="(City,State)/ZipCode" onChange={this.updateVal} />
        <button className="search-button-two" onClick={(e) => 
          this.props.setLocation(this.state.location)}>Search
        </button>  
      </div>
    )
  }
}

export default Search;