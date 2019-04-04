import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

class Header extends Component {
  render() {
    return (
      <nav>
        <div>
          <h2>{this.props.auth ? 'In' : 'Out'}</h2>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(hot(module)(Header));
