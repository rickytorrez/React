import React, { Component } from 'react';
import Searchbar from '../containers/searchBar';
import WeatherList from '../containers/weatherList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <WeatherList />
      </div>
    );
  }
}
