import React, { Component } from "react";
import { Button, Icon, Label } from "../../../node_modules/semantic-ui-react";

class PropButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  plusProp = () => {
    this.props.plusProp(this.props.value);
  };

  minusProp = () => {
    this.props.minusProp(this.props.value);
  };

  render() {
    return (
      <div className="text-center">
        <span>{this.props.text}: </span>
        <br />
        <Button as="div" labelPosition="right">
          <Button onClick={this.plusProp} icon>
            <Icon name="plus" />
          </Button>
          <Label basic as="a">
            {this.props.selectedRow[this.props.value]}{" "}
          </Label>
          <Button onClick={this.minusProp} icon>
            <Icon name="minus" />
          </Button>
        </Button>
      </div>
    );
  }
}

export default PropButtons;
