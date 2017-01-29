import React from 'react';
import * as _ from 'lodash';

class Select extends React.Component {
  constructor() {
    super();

    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      choice: 0
    };
  }

  handleSelectChange(e) {
    this.props.setChoice(this.props.select, e.target.value);
  }

  render() {
    let options = _.map(this.props.addresses, (address, index) => {
      return (
        <option key={index} value={index}>
          {address.address}
        </option>
      );
    });

    return (
        <select className="browser-default" onChange={this.handleSelectChange} defaultValue={this.props.default}>
          { options }
        </select>

    );
  }
}

export default Select;
