import React, { Component } from "react";
import PropButtons from "./PropButtons";

class SelectedRowLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
              rows={this.props.rows}
              selectedRow={this.props.selectedRow}
              plusProp={this.props.plusProp}
              minusProp={this.props.minusProp}
            />
            <PropButtons
              text="Prioridad"
              value="priority"
              rows={this.props.rows}
              selectedRow={this.props.selectedRow}
              plusProp={this.props.plusProp}
              minusProp={this.props.minusProp}
            />
          </div>
        </div>
      );
    }

    return <React.Fragment>{layer}</React.Fragment>;
  }
}

export default SelectedRowLayer;
