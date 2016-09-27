import React from 'react';

const propTypes = {
  bidPriceToBidView: React.PropTypes.string,
  highestBidder: React.PropTypes.string,
};

const BidView = ({ bidPriceToBidView, highestBidder }) => {
  return (
    <div>
      <p>Current bid:</p>${bidPriceToBidView}
      <p>Current Winner:</p>{highestBidder}
    </div>
  );
};

BidView.propTypes = propTypes;

export default BidView;
