import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export const AppContext = React.createContext({
  active: "false"
});

class Menu extends Component {
  state = { visible: false };

  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    return (
      <div className="right floated four wide column">
        <Button
          icon="align justify"
          style={{ fontSize: "2em" }}
          onClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default Menu;
