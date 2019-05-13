import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    // Since we dont use an authentication backend yet, hardcore dis
    const midwifeid = 3;
    axios
      .get("http://localhost:8000/api/user?midwife=" + midwifeid)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>
              <NavLink to={"patient/" + user.id}>{user.username}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
