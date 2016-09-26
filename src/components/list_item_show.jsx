import React, { Component} from 'react';
import BidBar from './bid_bar.jsx';

const propTypes = {
  items: React.PropTypes.object,
  params: React.PropTypes.object,
  updateItem: React.PropTypes.func,
};

class ListItemShow extends Component {
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
        Here's the list item stuff
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
      </div>
    );
  }
}

ListItemShow.propTypes = propTypes;

export default ListItemShow;
