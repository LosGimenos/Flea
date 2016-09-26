import React, { Component } from 'react';
import BidView from './bid_view.jsx';

const propTypes = {
  item_price: React.PropTypes.string,
  updateItem: React.PropTypes.func,
  listId: React.PropTypes.string,
};

export default class BidBar extends Component {
  constructor() {
    super();
    this.state = {
      localItemPrice: '',
    };
    this.checkPrice = this.checkPrice.bind(this);
    this.editBidPriceHandler = this.editBidPriceHandler.bind(this);
  }
  checkPrice(e) {
    e.preventDefault();
    if (this.props.item_price + 1 < this.state.localItemPrice) {
      this.props.updateItem({
        id: this.props.listId,
        data: { itemPrice: this.state.localItemPrice },
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
        <BidView item_price_to_bidView={this.props.item_price} />
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
