import React, { Component } from 'react';
import firebase from '../../firebase.config.js';
import BidView from './bid_view.jsx';

const propTypes = {
  bid_price: React.PropTypes.string,
  highestBidder: React.PropTypes.string,
  updateItem: React.PropTypes.func,
  listId: React.PropTypes.string,
};

export default class BidBar extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      localItemPrice: '',
    };
    this.checkPrice = this.checkPrice.bind(this);
    this.editBidPriceHandler = this.editBidPriceHandler.bind(this);
  }
  componentDidMount() {
    this.setBidderId();
  }
  setBidderId() {
    const user = firebase.auth().currentUser;
    this.setState({ userId: user.email });
  }
  checkPrice(e) {
    e.preventDefault();
    if (this.props.bid_price + 1 < this.state.localItemPrice) {
      this.props.updateItem({
        id: this.props.listId,
        data: { bidPrice: this.state.localItemPrice, highestBidder: this.state.userId },
      });
      this.setState({ localItemPrice: '' });
    }
  }
  editBidPriceHandler(e) {
    const data = e.target.value;
    this.setState({ localItemPrice: data });
  }
  render() {
    return (
      <div>
        <BidView bidPriceToBidView={this.props.bid_price} highestBidder={this.props.highestBidder} />
        <form onSubmit={this.checkPrice}>
          <input
            type="text"
            placeholder="your bid"
            value={this.state.localItemPrice}
            onChange={this.editBidPriceHandler}
          />
        </form>
      </div>
    );
  }
}

BidBar.propTypes = propTypes;
