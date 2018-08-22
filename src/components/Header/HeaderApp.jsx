import React, { Component } from "react";
import Title from "./Title";
import Menu from "./Menu";

class HeaderApp extends Component {
  render() {
    return (
      <div className="row">
        <Title />
        <Menu sidebar={this.props.sidebar} />
      </div>
    );
  }
}

export default HeaderApp;
