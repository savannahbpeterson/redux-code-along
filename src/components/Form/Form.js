import React, { Component } from "react";

import "./Form.css";
import plus from "./../../assets/add_red.svg";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleInput(val) {
    this.setState({
      name: val
    })
  }

  render() {
    return (
      <div className="View Form">
        <h1>Add</h1>
        <div className="input_box">
          <input
            value={this.state.name}
            onChange={e => this.handleInput(e.target.value)}
          />
          <img src={plus} alt="add" onClick={() => console.log('I need an action builder')} />
        </div>
      </div>
    );
  }
}

export default Form;
