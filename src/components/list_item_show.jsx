import React from 'react';

const propTypes = {
  items: React.PropTypes.object,
  params: React.PropTypes.object,
};

const ListItemShow = ({ items, params }) => {
  const id = params.listId;
  const defaultItem = {
    itemType: '',
    itemName: '',
    itemDescription: '',
    itemPrice: '',
  };
  const item = items[id] || defaultItem;
  return (
    <div>
      Here's the list item stuff
      <h1>{item.itemType}</h1>
      <h3>{item.itemName}</h3>
      <p>{item.itemDescription}</p>
      <p>${item.itemPrice}</p>
    </div>
  );
};

ListItemShow.propTypes = propTypes;

export default ListItemShow;
