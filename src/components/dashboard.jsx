import React, { Component } from 'react';
import request from 'superagent';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      item_type: '',
      item_name: '',
      item_description: '',
      item_price: 0,
    };
    this.httpPostItem = this.httpPostItem.bind(this);
    this.httpDeleteItem = this.httpDeleteItem.bind(this);
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
  render() {
    return (
      <div>
        <div id="user-console">
          <p>User options</p>
        </div>
        <div>
          <h1>Flea Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
