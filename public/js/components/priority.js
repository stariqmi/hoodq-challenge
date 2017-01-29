import React from 'react';

class Priority extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12 m4 l4">
          <input
            id="workDistance" type="number" className="workDistance priority"
            min="1" max="3" step="1" defaultValue="1" onChange={this.props.handlePriorityChange}>
          </input>
          <label htmlFor="workDistance">Distance From Work</label>
        </div>

        <div className="input-field col s12 m4 l4">
          <input
            id="nearestCoffeeShop" type="number" className="nearestCoffeeShop priority"
            min="1" max="3" step="1" defaultValue="1" onChange={this.props.handlePriorityChange}>
          </input>
          <label htmlFor="nearestCoffeeShop">Nearest Coffee Shop</label>
        </div>

        <div className="input-field col s12 m4 l4">
          <input
            id="nearbyDogPark" type="number" className="nearbyDogPark priority"
            min="1" max="3" step="1" defaultValue="1" onChange={this.props.handlePriorityChange}>
          </input>
          <label htmlFor="nearbyDogPark">Nearby Dog Park</label>
        </div>
      </div>
    );
  }
}


export default Priority;
