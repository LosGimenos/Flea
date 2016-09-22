import React, { Component } from 'react';

class ToList extends Component {
  constructor() {
    super();
    this.state = {
      item_type: '',
      item_name: '',
      item_description: '',
      item_price: 0,
    };
  }
  render() {
    return (
      <div>
        <div id="cat-computer">
          Computer
        </div>
        <div id="cat-transport">
           Transport
        </div>
      </div>
    );
  }
}

export default ToList;
