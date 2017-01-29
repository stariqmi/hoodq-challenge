import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/js/materialize.js';

// data/utils
import {addresses, coffeeShops} from './address.js';
import {default as decidePreferrence} from './decide_preferrence.js';

// components
import Card from './components/card.js';
import Select from './components/select.js';
import Priority from './components/priority.js';

class App extends React.Component {
  constructor() {
    super();

    this.decide = this.decide.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);

    this.state = {
      data: {
        1: addresses,
        2: addresses
      },
      choice: {
        1: 1,
        2: 2
      },
      preferrence: 0,
      priority: {
        workDistance: 1,
        nearestCoffeeShop: 1,
        nearbyDogPark: 1
      }
    };
  }

  selectChoiceChange(select_id, value) {
    let choice = {};
    choice[select_id] = parseInt(value);

    this.setState(
      {
        choice: Object.assign({}, this.state.choice, choice)
      }
    );
  }

  handlePriorityChange(e) {

    let priority = {};
    priority[e.target.id] = parseInt(e.target.value);

    this.setState({priority: Object.assign({}, this.state.priority, priority)});
  }

  decide() {
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
            <Select addresses={addresses} name="Choice # 1" select="1" default="0" setChoice={this.selectChoiceChange.bind(this)}/>
            {this.state.choice[1] ? <Card address={addresses[this.state.choice[1]]} id="1" preferrence={this.state.preferrence}/> : ''}
          </div>

          <div className="col s12 m6 l6">
            <Select addresses={addresses} name="Choice # 2" select="2" default="1" setChoice={this.selectChoiceChange.bind(this)}/>
            {this.state.choice[2] ? <Card address={addresses[this.state.choice[2]]} id="2" preferrence={this.state.preferrence}/> : ''}
          </div>
        </div>

        <Priority handlePriorityChange={this.handlePriorityChange.bind(this)} />
        <div className="row">
          <div className="col s12 m12 l12">
            <center><a className="waves-effect waves-light btn orange darken-1" onClick={this.decide}>Decide</a></center>
          </div>
        </div>
      </div>
    );
  }
}

const mount_point = document.getElementById('app-container');
ReactDOM.render(<App />, mount_point);
