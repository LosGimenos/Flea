import React, { Component } from 'react';
import request from 'superagent';

const propTypes = {
  items: React.PropTypes.object,
  userLoginId: React.PropTypes.string,
};

class CurrentListings extends Component {
  constructor() {
    super();
    this.state = {
      currentLists: {},
    };
  }
  componentDidMount() {
    this.findCurrentListings();
  }
  findCurrentListings() {
    const url = 'https://flea-f71cd.firebaseio.com/items.json';
    request.get(url)
      .query({ query: `${this.props.userLoginId}` })
      .then((response) => {
        const items = response.body;
        this.setState({ currentLists: items });
      });
      console.log(this.state.items);
  }
  render() {
    return (
      <div>
        <p>Listings go here</p>
      </div>
    );
  }
}

CurrentListings.propTypes = propTypes;

export default CurrentListings;
