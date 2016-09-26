import React from 'react';
import ListItem from './list_item.jsx';

const propTypes = {
  items: React.PropTypes.object,
};

const Listings = (props) => {
  const ids = Object.keys(props.items);
  const itemElements = ids.map((id, idx) => {
    const listing = props.items[id];
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
      <h2>Computers for Sale!</h2>
      <div>
        {itemElements}
      </div>
    </div>
  );
};

Listings.propTypes = propTypes;

export default Listings;

