import React, { Component } from "react";
import { Button, Icon, Label } from "../../../node_modules/semantic-ui-react";

class PropButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedRow: this.props.selectedRow };
  }

  clickAction = e => {
    let selectedRow = this.state.selectedRow;
    const newval =
      e.target.className.indexOf("plus") === 0
        ? +selectedRow[this.props.value] + 1
        : selectedRow[this.props.value] - 1;
    selectedRow[this.props.value] = newval;
    this.setState(selectedRow);
  };

  render() {
    return (
      <div className="text-center">
        <span>{this.props.text}: </span>
        <br />
        <Button as="div" labelPosition="right">
          <Button onClick={this.clickAction} icon>
            <Icon name="plus" />
          </Button>
          <Label basic as="a">
            {this.props.selectedRow[this.props.value]}{" "}
          </Label>
          <Button onClick={this.clickAction} icon>
            <Icon name="minus" />
          </Button>
        </Button>
      </div>
    );
  }
}

export default PropButtons;
