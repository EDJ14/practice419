import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return <Header />;
  }
}

export default hot(module)(App);
