import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSearch from '../headerSearch/HeaderSearch';
import TabsBar from '../tabs/TabsBar';
import './App.css';

class App extends Component {
  //const timeStamps = [];
  //const [wetherData, setwetherData] = useState({ timeStamps: [] });
  constructor() {
    super();
    this.state = {
      timeStamps: null,
      cities: null
    };
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(aValue) {
    document.querySelector('.miestas').innerHTML = aValue;

    fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/' + aValue + '/forecasts/long-term')
      .then(response => response.json())
      .then(data => this.setState({ timeStamps: data }));
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
      .then(response => response.json())
      .then(data => this.setState({ timeStamps: data }));

    fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places')
      .then(response => response.json())
      .then(data => this.setState({ cities: data }));
  }


  render() {
    return (
      <div className="App">
        <HeaderSearch items={this.state.cities} onChange={this.handleSearch} />
        <TabsBar value={this.state.timeStamps} />
      </div>
    );
  }
}

export default App;
