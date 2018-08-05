import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Menu extends Component {
  state = {
    sidebar: false
  };

  toggleSidebar = () => {
    this.props.sidebar(this.state.sidebar);
    this.state.sidebar = !this.state.sidebar;
  };

  render() {
    return (
      <div className="right floated four wide column">
        <Button
          icon="align justify"
          style={{ fontSize: "2em" }}
          onClick={this.toggleSidebar}
        />
      </div>
    );
  }
}

export default Menu;
