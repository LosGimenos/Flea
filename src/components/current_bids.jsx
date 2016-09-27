import React, { Component } from 'react';
import ListItem from './listings/list_item.jsx';

const propTypes = {
  items: React.PropTypes.object,
  userLoginId: React.PropTypes.string,
};

class CurrentBids extends Component {
  constructor() {
    super();
    this.state = {
      currentBids: {},
    };
  }
  componentDidMount() {
    this.findCurrentBids();
  }
  findCurrentBids() {
    const listIds = Object.keys(this.props.items);
    const userListings = listIds.map((id) => {
      const userList = this.props.items[id];
      if (this.props.userLoginId === userList.highestBidder) {
        return userList;
      } return null;
    });
    const cleanList = userListings.filter((value) => { return value !== null });
    this.setState({ currentBids: cleanList });
  }
  render() {
    const ids = Object.keys(this.state.currentBids);
    const itemElements = ids.map((id, idx) => {
      const listing = this.state.currentBids[id];
      return (
        <div id="list-item">
          <ListItem
            listId={id}
            itemType={listing.itemType}
            itemName={listing.itemName}
            itemDescription={listing.itemDescription}
            itemPrice={listing.itemPrice}
            bidPrice={listing.bidPrice}
            creatorId={listing.creatorId}
            highestBidder={listing.highestBidder}
            key={idx}
          />
        </div>
      );
    });
    return (
      <div>
        <h2>Listings you are currently winning!</h2>
        <div>
          {itemElements}
        </div>
      </div>
    );
  }
}

CurrentBids.propTypes = propTypes;

export default CurrentBids;
