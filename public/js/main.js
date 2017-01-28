import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/js/materialize.js';

// data
import {addresses, coffeeShops} from './address.js';

// components
import Card from './components/card.js';
import Select from './components/select.js';

let addressData = Object.assign({}, addresses);

class App extends React.Component {
  constructor() {
    super();

    this.handlePriorityChange = this.handlePriorityChange.bind(this);

    this.state = {
      data: {
        1: addresses,
        2: addresses
      },
      choice: {
        1: null,
        2: null
      }
    };
  }

  // Receives state update from child
  selectChoiceChange(select_id, value) {
    let choice = {};
    choice[select_id] = value;

    /*
      Attempt to remove duplicate choice
    */
    // let data = this.state.data;
    // delete data[select_id][value];

    this.setState(
      {
        // data: data,
        choice: Object.assign({}, this.state.choice, choice)
      }
    );
  }

  handlePriorityChange(e) {
    console.log(e.target.id, e.target.value);
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <center><h3 className="title">hoodq</h3></center>
          </div>
        </div>
        <div className="row">

          <div className="col s12 m6 l6">
            <Select addresses={addresses} name="Choice # 1" select="1" setChoice={this.selectChoiceChange.bind(this)}/>
            {this.state.choice[1] ? <Card address={addresses[this.state.choice[1]]} /> : ''}
          </div>

          <div className="col s12 m6 l6">
            <Select addresses={addresses} name="Choice # 2" select="2" setChoice={this.selectChoiceChange.bind(this)}/>
            {this.state.choice[2] ? <Card address={addresses[this.state.choice[2]]} /> : ''}
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m4 l4">
            <input
              id="distance" type="number" className="distance priority"
              min="1" max="3" step="1" onChange={this.handlePriorityChange}>
            </input>
            <label htmlFor="distance">Distance From Work</label>
          </div>

          <div className="input-field col s12 m4 l4">
            <input
              id="coffee_shop" type="number" className="coffee_shop priority"
              min="1" max="3" step="1" onChange={this.handlePriorityChange}>
            </input>
            <label htmlFor="coffee_shop">Nearest Coffee Shop</label>
          </div>

          <div className="input-field col s12 m4 l4">
            <input
              id="nearby_dog_park" type="number" className="nearby_dog_park priority"
              min="1" max="3" step="1" onChange={this.handlePriorityChange}>
            </input>
            <label htmlFor="nearby_dog_park">Nearby Dog Park</label>
          </div>
        </div>
      </div>
    );
  }
}

const mount_point = document.getElementById('app-container');
ReactDOM.render(<App />, mount_point);
