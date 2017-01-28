import React from 'react';

import {coffeeShops} from './../address.js';

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div className="card-panel orange darken-1 white-text">
          <span>
            <b>{this.props.address.address}</b>
          </span>
          <p>Distance from work: {this.props.address.workDistance}</p>
          <p>Nearest Coffee Shop: {coffeeShops[this.props.address.nearestCoffeeShop]}</p>
          <p>Nearby Dog Park: {this.props.address.nearbyDogPark ? 'Yes': 'No'}</p>
        </div>
    )
  }
}

export default Card;
