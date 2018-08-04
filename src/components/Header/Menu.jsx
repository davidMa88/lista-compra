import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    const _style = {
      fontSize: "2em"
    };

    return (
      <div className="col-xs-1 p-2">
        <span
          className="glyphicon glyphicon-align-justify "
          style={_style}
          aria-hidden="true"
        />
      </div>
    );
  }
}

export default Menu;
