import React from 'react';

import {coffeeShops} from './../address.js';

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {

    let classes = "card-panel darken-1 white-text " + ((this.props.preferred) ? "light-green" : "orange");
    return (
        <div className={classes}>
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
