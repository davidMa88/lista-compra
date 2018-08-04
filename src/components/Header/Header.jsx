import React, { Component } from "react";
import Title from "./Title";
import Menu from "./Menu";
// import {HeaderBar} from "./HeaderBar";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container p-2 bg-light">
        <Title />
        <Menu />
      </div>
    );
  }
}

export default Header;

// <div className="parent-component">
//     <ChildComponent className="parent-component__child">
//       ...
//     </ChildComponent>
//   </div>

// export const ChildComponent = ( props ) =>
// <div className={ `some-css-className ${ props.className }` }>
//   { props.children }
// </div>
