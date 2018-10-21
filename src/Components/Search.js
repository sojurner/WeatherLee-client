import React, { Component } from 'react';
import '../CSS/Search.css';
import cities from '../Data/worldCitiesArray.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.userLocation,
      suggestedLocations: [],
      cursor: 0
    };
    this.textContent = React.createRef();
  }

  componentDidMount() {
    this.state.suggestedLocations;
  }

  updateVal = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({
      location: value,
      suggestedLocations: this.getSuggestions(value)
    });
  };

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  getSuggestions = value => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('\\b' + escapedValue, 'i');

    return cities.filter(city => regex.test(this.getSuggestionValue(city)));
  };

  getSuggestionValue = suggestion => {
    return suggestion;
  };

  // showSuggestions() {
  //   if (!this.state.location) {
  //     this.setState({ suggestedLocations: [] });
  //   } else {
  //     this.setState({
  //       suggestedLocations: this.trie.suggest(this.state.location)
  //     });
  //   }
  // }

  render() {
    return (
      <div
        className={!this.props.searched ? 'input-search' : 'rendered-search'}
      >
        <input
          className={
            !this.props.searched ? 'search-box' : 'rendered-search-box'
          }
          type="text"
          placeholder=" Enter city / zipcode"
          onChange={e => {
            this.updateVal(e);
          }}
          value={this.state.location}
        />
        <button
          className={
            !this.props.searched ? 'search-button' : 'rendered-search-button'
          }
          onClick={e => {
            this.props.setLocation(this.state.location);
            this.setState({ location: '' });
          }}
        >
          Search
        </button>
        <section
          className={
            !this.props.searched
              ? 'input-suggest-list'
              : 'rendered-suggest-list-two'
          }
        >
          {this.state.suggestedLocations.map((location, i) => {
            if (i < 3 && this.state.location.length > 1) {
              return (
                <p
                  className={
                    !this.props.searched
                      ? 'input-suggestions'
                      : 'rendered-suggestions'
                  }
                  key={i}
                  onClick={e => {
                    this.props.setLocation(e.target.textContent);
                    this.setState({ suggestedLocations: [], location: '' });
                  }}
                >
                  {location}
                </p>
              );
            }
          })}
        </section>
      </div>
    );
  }
}

export default Search;
