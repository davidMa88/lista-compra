import React, { Component } from "react";
import Title from "./Title";
import Menu from "./Menu";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Title />
        <Menu />
      </React.Fragment>
    );
  }
}

export default Header;
