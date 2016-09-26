import React from 'react';

const propTypes = {
  item_price_to_bidView: React.PropTypes.string,
};

const BidView = ({ item_price_to_bidView }) => {
  return (
    <div>
      <p>Highest bid:</p>${item_price_to_bidView}
      <p>by: "USERNAME HERE"</p>
    </div>
  );
};

BidView.propTypes = propTypes;

export default BidView;
