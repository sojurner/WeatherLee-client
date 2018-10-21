import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Modal from 'react-responsive-modal';

import { Welcome } from './Welcome';
import { WeatherCard } from './WeatherCard';

class ContentRoutes extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  directRoute = () => {
    const { weather } = this.props;
    const routes = ['daily', 'weekly'];
    return routes.map(route => {
      return (
        <Route
          exact
          path={`/${route}`}
          render={() => {
            return (
              <Modal open={this.state.open} center>
                <WeatherCard
                  weather={weather[route]}
                  closeModal={this.onCloseModal}
                />
              </Modal>
            );
          }}
        />
      );
    });
  };

  render() {
    const { weather, userLocation } = this.props;
    const routes = this.directRoute();
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Welcome
                userLocation={userLocation}
                current={weather.Current}
                openModal={this.onOpenModal}
              />
            );
          }}
        />
        {routes}
      </div>
    );
  }
}

export default ContentRoutes;
