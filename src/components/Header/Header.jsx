import React, { Component } from "react";
import Title from "./Title";
import Menu from "./Menu";
import HeaderBar from "./HeaderBar";

class Header extends Component {
  state = {};
  render() {
    return (
      <HeaderBar>
        <Title />
        <Menu />
      </HeaderBar>
    );
  }
}

export default Header;
