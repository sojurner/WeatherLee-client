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

  updateVal = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({
      location: value,
      suggestedLocations: this.getSuggestions(value),
      cursor: 0
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

  handleKeyDown = e => {
    const { cursor, suggestedLocations } = this.state;
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }));
    }

    if (e.keyCode === 40 && cursor <= suggestedLocations.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }));
    }
    if (e.keyCode === 13) {
      const nodeList = Array.from(this.textContent.current.childNodes);
      const matchingNode = nodeList.find(node => node.className === 'active');
      const location = matchingNode.textContent;
      this.resetState(location);
    }
  };

  resetState = location => {
    this.props.setLocation(location);
    this.setState({ location: '', suggestedLocations: [] });
  };

  render() {
    const { userLocation } = this.props;
    const { suggestedLocations, location, cursor } = this.state;
    return (
      <div className={!userLocation ? 'input-search' : 'rendered-search'}>
        <input
          className={!userLocation ? 'search-box' : 'rendered-search-box'}
          type="text"
          placeholder=" Enter City"
          onChange={e => {
            this.updateVal(e);
          }}
          onKeyDown={e => this.handleKeyDown(e)}
          value={this.state.location}
        />
        <section
          ref={this.textContent}
          className={
            !userLocation ? 'input-suggest-list' : 'rendered-suggest-list-two'
          }
        >
          {suggestedLocations.map((location, index) => {
            if (index < 4 && location.length > 1) {
              return (
                <p
                  className={
                    cursor === index + 1 ? 'active' : 'input-suggestions'
                  }
                  key={`suggestions-${index}`}
                  onClick={e => this.resetState(e.target.textContent)}
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
