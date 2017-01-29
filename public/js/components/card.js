import React from 'react';

import {coffeeShops} from './../address.js';

class Card extends React.Component {
  constructor() {
    super();
  }

  getColorClass() {
    let color_class;
    switch (this.props.preferrence) {
      case 0:
        color_class = 'orange';
        break;
      case parseInt(this.props.id):
        color_class = 'light-green';
        break;
      case 3:
        color_class = 'yellow darken-2';
        break;
      default:
        color_class = 'orange';
        break;
    }
    return color_class;
  }

  render() {

    let classes = "card-panel darken-1 white-text " + this.getColorClass();
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
