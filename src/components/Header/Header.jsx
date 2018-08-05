import React, { Component } from "react";
import Title from "./Title";
import Menu from "./Menu";
// import {HeaderBar} from "./HeaderBar";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="ui one column grid">
        <Title />
        <Menu />
      </div>
    );
  }
}

export default Header;
