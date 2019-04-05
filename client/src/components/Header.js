import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.auth ? 'In' : 'Out'}</h2>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(hot(module)(Header));
