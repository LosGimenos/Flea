import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import request from 'superagent';
import firebase from '../../firebase.config.js';
import UserConsole from '../components/user_console.jsx';

const propTypes = {
  children: React.PropTypes.element,
};

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      items: {},
      userId: '',
    };
    this.httpPostItem = this.httpPostItem.bind(this);
    this.httpDeleteItem = this.httpDeleteItem.bind(this);
    this.redirectToDashboard = this.redirectToDashboard.bind(this);
    this.httpGetItems = this.httpGetItems.bind(this);
    this.httpUpdateItem = this.httpUpdateItem.bind(this);
    this.setUserId = this.setUserId.bind(this);
  }
  componentDidMount() {
    this.httpGetItems();
    this.setUserId();
  }
  setUserId() {
    const user = firebase.auth().currentUser;
    this.setState({ userId: user.email });
  }
  httpGetItems() {
    const url = 'https://flea-f71cd.firebaseio.com/items.json';
    request.get(url)
      .then((response) => {
        const items = response.body;
        this.setState({ items });
      });
  }
  httpPostItem(data) {
    const url = 'https://flea-f71cd.firebaseio.com/items.json';
    request.post(url)
           .send(data)
           .then(() => {
             this.httpGetItems();
           });
  }
  httpDeleteItem(id) {
    const url = `https://flea-f71cd.firebaseio.com/items/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetItems();
           });
  }
  httpUpdateItem({ id, data }) {
    const url = `https://flea-f71cd.firebaseio.com/items/${id}.json`;
    request.patch(url)
           .send(data)
           .then(() => {
             this.httpGetItems();
           });
  }
  redirectToDashboard() {
    hashHistory.push('/dashboard');
  }
  render() {
    const childProps = React.cloneElement(this.props.children, {
      items: this.state.items,
      saveItem: this.httpPostItem,
      deleteItem: this.httpDeleteItem,
      redirect: this.redirectToDashboard,
      getItems: this.httpGetItems,
      updateItem: this.httpUpdateItem,
      userLoginId: this.state.userId,
    });
    return (
      <div>
        <UserConsole />
        <div id="dashboard">
          {childProps}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = propTypes;

export default Dashboard;
