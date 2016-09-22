import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <div id="main-nav">
          <h1>Flea</h1>
        </div>
        <div id="main-content">
          Content goes here
        </div>
      </div>
    );
  }
}

export default Main;
