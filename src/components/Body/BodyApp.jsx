import React, { Component } from "react";
import { Segment, Sidebar } from "semantic-ui-react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

class BodyApp extends Component {
  render() {
    return (
      <Sidebar.Pushable
        style={{ marginTop: "0px", backgroundColor: "#00b5ad" }}
      >
        <SideBar sidebarToggle={this.props.sidebarToggle} />
        <MainContent />
      </Sidebar.Pushable>
    );
  }
}

export default BodyApp;
