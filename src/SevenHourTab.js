import React, { Component } from "react";
import "./CSS/SevenHourTab.css";

export class SevenHourTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: false,
      sevenHourClicked: true,
      tenDayClicked: false
    };
  }

  render() {
    return (
      <div className="seven-hour-button">
        <button
          className="seven-hour-button"
          onClick={e =>
            this.props.changeWeatherClicked(
              this.state.currentWeather,
              this.state.sevenHourClicked,
              this.state.tenDayClicked
            )
          }
        >
          Seven Hour
        </button>
      </div>
    );
  }
}
