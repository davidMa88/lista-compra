import React, { Component } from "react";
import Header from "./Header/Header";
import BodyApp from "./Body/BodyApp";
import { AppContext } from "./Header/Menu";

class App extends Component {
  state = {
    active: "true"
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <AppContext.Provider>
          <BodyApp />
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
