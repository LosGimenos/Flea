import React from 'react';
import { Link } from 'react-router';

const UserConsole = () => {
  return (
    <div>
      <div id="user-console">
        <p>My Flea</p>
        <div>
          <Link to="/dashboard/listings"><p>Find a Computer</p></Link>
        </div>
        <div>
          <Link to="/dashboard/list"><p>Sell a Computer</p></Link>
        </div>
        <div>
          <Link to="/dashboard/current_listings"><p>My Current Listings</p></Link>
        </div>
        <div>
          <Link to="/dashboard/winning_bids"><p>My Winning Bids</p></Link>
        </div>
      </div>
    </div>
  );
};

export default UserConsole;
