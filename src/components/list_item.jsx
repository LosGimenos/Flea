import React from 'react';
import { Link } from 'react-router';

const propTypes = {
  itemType: React.PropTypes.string,
  itemName: React.PropTypes.string,
  itemDescription: React.PropTypes.string,
  itemPrice: React.PropTypes.string,
  listId: React.PropTypes.string,
};

const ListItem = (props) => {
  return (
    <Link to={`/dashboard/${props.listId}`}>
      <div>
        <h3>{props.itemType}</h3>
        <h4>{props.itemName}</h4>
        {props.itemDescription}
        <p>${props.itemPrice}</p>
        {props.listId}
      </div>
    </Link>
  );
};

ListItem.propTypes = propTypes;

export default ListItem;
