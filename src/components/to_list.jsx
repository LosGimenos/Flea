import React, { Component } from 'react';

const propTypes = {
  saveItem: React.PropTypes.func,
  redirect: React.PropTypes.func,
};

class ToList extends Component {
  constructor() {
    super();
    this.state = {
      localItem_type: '',
      localItem_name: '',
      localItem_description: '',
      localItem_price: '',
      creatorId: '',
      listId: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditType = this.handleEditType.bind(this);
    this.handleEditName = this.handleEditName.bind(this);
    this.handleEditDescription = this.handleEditDescription.bind(this);
    this.handleEditPrice = this.handleEditPrice.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.saveItem({
      itemType: this.state.localItem_type,
      itemName: this.state.localItem_name,
      itemDescription: this.state.localItem_description,
      itemPrice: this.state.localItem_price,
      creatorId: 'email or params of creator',
    });
    this.props.redirect();
  }
  handleEditType(e) {
    const data = e.target.value;
    this.setState({ localItem_type: data });
  }
  handleEditName(e) {
    const data = e.target.value;
    this.setState({ localItem_name: data });
  }
  handleEditDescription(e) {
    const data = e.target.value;
    this.setState({ localItem_description: data });
  }
  handleEditPrice(e) {
    const data = e.target.value;
    this.setState({ localItem_price: data });
  }
  render() {
    return (
      <div id="item-lister">
        <p>Got something to list?</p>
        <form onSubmit={this.handleSubmit} id="list-form">
          <input
            name="itemType"
            value={this.state.localItem_type}
            onChange={this.handleEditType}
            placeholder="Computer or Transport?"
          />
          <input
            name="itemName"
            value={this.state.localItem_name}
            onChange={this.handleEditName}
            placeholder="Item Name"
          />
          <input
            name="itemDescription"
            value={this.state.localItem_description}
            onChange={this.handleEditDescription}
            placeholder="Description"
          />
          <input
            name="itemPrice"
            value={this.state.localItem_price}
            onChange={this.handleEditPrice}
            placeholder="How Muchee?"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

ToList.propTypes = propTypes;

export default ToList;
