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
      </div>
    </div>
  );
};

export default UserConsole;
