import React, { Component} from 'react';
import BidBar from '../bidding/bid_bar.jsx';

const propTypes = {
  items: React.PropTypes.object,
  params: React.PropTypes.object,
  updateItem: React.PropTypes.func,
  userLoginId: React.PropTypes.string,
  deleteItem: React.PropTypes.func,
  redirect: React.PropTypes.func,
};

class ListItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.listId,
    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler() {
    this.props.deleteItem(this.state.id);
    this.props.redirect();
  }
  checkId() {
    const id = this.props.params.listId;
    if (this.props.userLoginId === this.props.items[id].creatorId) {
      return (
        <button onClick={this.submitHandler}>
          Remove
        </button>
      );
    }
  }
  render() {
    const id = this.props.params.listId;
    const defaultItem = {
      itemType: '',
      itemName: '',
      itemDescription: '',
      itemPrice: '',
    };
    const item = this.props.items[id] || defaultItem;
    return (
      <div>
        <h1>{item.itemType}</h1>
        <h3>{item.itemName}</h3>
        <p>{item.itemDescription}</p>
        <BidBar
          item_price={item.itemPrice}
          bid_price={item.bidPrice}
          updateItem={this.props.updateItem}
          highestBidder={item.highestBidder}
          listId={id}
        />
        {
          this.checkId()
        }
      </div>
    );
  }
}

ListItemShow.propTypes = propTypes;

export default ListItemShow;
