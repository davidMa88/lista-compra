import React, { Component } from "react";
import Header from "./Header/Header";
import BodyApp from "./Body/BodyApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    };
  }

  enableSidebar(sidebarToggle) {
    this.setState({ sidebar: sidebarToggle });
  }

  render() {
    return (
      <React.Fragment>
        <Header sidebar={this.enableSidebar.bind(this)} />
        <BodyApp sidebarToggle={this.state.sidebar} />
      </React.Fragment>
    );
  }
}

export default App;
