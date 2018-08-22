import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Menu extends Component {
  state = {
    sidebar: false
  };

  toggleSidebar = () => {
    this.state.sidebar = !this.state.sidebar;
    this.props.sidebar(this.state.sidebar);
  };

  render() {
    return (
      <div className="col-xs-2">
        <Button
          icon="align justify"
          style={{ fontSize: "2em", float: "right", margin: "0px" }}
          onClick={this.toggleSidebar}
        />
      </div>
    );
  }
}

export default Menu;
