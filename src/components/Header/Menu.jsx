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
          color="teal"
          className="btn-menu-header"
          icon="align justify"
          onClick={this.toggleSidebar}
        />
      </div>
    );
  }
}

export default Menu;
