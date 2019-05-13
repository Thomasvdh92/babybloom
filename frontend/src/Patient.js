import React, { Component } from "react";
import Chart from "./Chart";
import { NavLink } from "react-router-dom";

class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      data: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <Chart patientId={this.props.match.params.id} />
      </div>
    );
  }
}

export default Patient;
