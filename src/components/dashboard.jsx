import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import request from 'superagent';
import ToList from './to_list.jsx';
import Listings from './listings.jsx';

const propTypes = {
  children: React.PropTypes.element,
};

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      items: {},
    };
    this.httpPostItem = this.httpPostItem.bind(this);
    this.httpDeleteItem = this.httpDeleteItem.bind(this);
    this.redirectToDashboard = this.redirectToDashboard.bind(this);
    this.httpGetItems = this.httpGetItems.bind(this);
  }
  componentDidMount() {
    this.httpGetItems();
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
    });
    return (
      <div>
        <div>
          <h1>Flea Dashboard</h1>
          {childProps}
        </div>
      </div>
    );
  }
}

/* <Listings items={this.state.items} /> */
/*
 <ToList
            items={this.state.items}
            saveItem={this.httpPostItem}
            deleteItem={this.deleteItem}
            redirect={this.redirectToDashboard}
          />
          */

Dashboard.propTypes = propTypes;

export default Dashboard;
