import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Header from './Header';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron">
          <h1 className="display-4">Amazing React, Bootstrap and Webpack</h1>
          <p className="lead">Created with love</p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(hot(module)(App));
