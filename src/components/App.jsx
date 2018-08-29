import React, { Component } from "react";
import BodyApp from "./Body/BodyApp";
import HeaderApp from "./Header/HeaderApp";
import FooterApp from "./Footer/FooterApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
      response: ""
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  enableSidebar(sidebarToggle) {
    this.setState({ sidebar: sidebarToggle });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderApp sidebar={this.enableSidebar.bind(this)} />
        <BodyApp sidebarToggle={this.state.sidebar} />
        <FooterApp />
        <p className="App-intro">{this.state.response}</p>
      </React.Fragment>
    );
  }
}

export default App;
