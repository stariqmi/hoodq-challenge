import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/js/materialize.js';
import * as _ from 'lodash';

// data
import {addresses, coffeeShops} from './address.js';
import {default as decidePreferrence} from './decide_preferrence.js';

// components
import Card from './components/card.js';
import Select from './components/select.js';
import Priority from './components/priority.js';

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
      },
      preferrence: false,
      priority: {
        workDistance: 0,
        nearestCoffeeShop: 0,
        nearbyDogPark: 0
      }
    };
  }

  // Receives state update from child
  selectChoiceChange(select_id, value) {
    let choice = {};
    choice[select_id] = value;

    this.setState(
      {
        choice: Object.assign({}, this.state.choice, choice)
      }
    );

    let addr1 = addresses[this.state.choice[1]];
    let addr2 = addresses[this.state.choice[2]];

    this.setState({preferrence: decidePreferrence(addr1, addr2, this.state.priority)});
  }

  handlePriorityChange(e) {

    let priority = {};
    priority[e.target.id] = parseInt(e.target.value);

    let new_priority = Object.assign({}, this.state.priority, priority);
    this.setState({priority: Object.assign({}, this.state.priority, priority)});

    let addr1 = addresses[this.state.choice[1]];
    let addr2 = addresses[this.state.choice[2]];

    this.setState({preferrence: decidePreferrence(addr1, addr2, this.state.priority)});
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
            {this.state.choice[1] ? <Card address={addresses[this.state.choice[1]]} preferred={1 == this.state.preferrence}/> : ''}
          </div>

          <div className="col s12 m6 l6">
            <Select addresses={addresses} name="Choice # 2" select="2" setChoice={this.selectChoiceChange.bind(this)}/>
            {this.state.choice[2] ? <Card address={addresses[this.state.choice[2]]} preferred={2 == this.state.preferrence}/> : ''}
          </div>
        </div>

        <Priority handlePriorityChange={this.handlePriorityChange.bind(this)} />
      </div>
    );
  }
}

const mount_point = document.getElementById('app-container');
ReactDOM.render(<App />, mount_point);
