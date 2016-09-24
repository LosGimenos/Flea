import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passwords: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit() {
    const { email, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
      })
      .then(() => {
        console.log('you logged in!');
        this.props.router.push('/dashboard/list');
      });
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <div id="login-form">
          <div>
            <input name="email" onChange={this.handleChange} type="text" placeholder="email" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="button" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
