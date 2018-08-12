import React, { Component } from "react";
import PropButtons from "./PropButtons";

class SelectedRowLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = row => {
    console.log(row);
  };

  render() {
    let layer = "";

    if (
      this.props.selectedRow !== undefined &&
      this.props.selectedRow.id !== undefined
    ) {
      layer = (
        <div>
          <h4>{this.props.selectedRow["name"]}</h4>
          <div className="ui centered grid">
            <PropButtons
              text="Cantidad"
              value="count"
              selectedRow={this.props.selectedRow}
            />
            <PropButtons
              text="Prioridad"
              value="priority"
              selectedRow={this.props.selectedRow}
            />
          </div>
        </div>
      );
    }

    return <React.Fragment>{layer}</React.Fragment>;
  }
}

export default SelectedRowLayer;
