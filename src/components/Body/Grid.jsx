import React, { Component } from "react";
import ReactDataGrid, { Row } from "react-data-grid";
import SelectedRowLayer from "../Pops/SelectedRowLayer";
import onClickOutside from "react-onclickoutside";
import { Divider } from "semantic-ui-react";
import PropTypes from "prop-types";
import $ from "jquery";

class RowRenderer extends Component {
  static propTypes = {
    idx: PropTypes.string.isRequired
  };

  render() {
    const customRow = "custom-row-" + this.props.idx;
    return (
      <div className={customRow}>
        <Row ref={node => (this.row = node)} {...this.props} />
      </div>
    );
  }
}

class Grid extends Component {
  constructor(props) {
    super(props);

    this._columns = [
      { key: "id", name: "Id", width: 80, sortable: true },
      { key: "name", name: "Nombre", editable: true, sortable: true },
      { key: "count", name: "Cantidad", editable: true, sortable: true },
      { key: "priority", name: "Prioridad", editable: true, sortable: true }
    ];

    this.state = {
      selectedStyle: {
        color: "green",
        fontWeight: "bold"
      },
      lastSelectedIndex: ""
    };
  }

  setStyle = (index, color, weight) => {
    if (index === "") {
      return false;
    }
    var selectedStyle = {
      color: color,
      fontWeight: weight
    };
    var row = document.getElementsByClassName("custom-row-" + index);
    $(row).css(selectedStyle);
  };

  handleRowClick = index => {
    this.setStyle(index, "green", "bold");
    this.setStyle(this.state.lastSelectedIndex, "black", "400");
    this.setState({ lastSelectedIndex: index });
    this.props.handleRowClick(index);
  };

  handleClickOutside = e => {
    if (!this.props.selectedRow) return false;

    var index = this.props.rows.findIndex(
      r => r.id == this.props.selectedRow.id
    );
    this.setStyle(index, "black", "400");
    this.setState({ lastSelectedIndex: "" });
    this.props.handleRowDeselect();
  };

  render() {
    return (
      <div>
        <ReactDataGrid
          enableCellSelect={true}
          columns={this._columns}
          rowGetter={this.props.rowGetter}
          rowsCount={this.props.rows.length}
          minHeight={400}
          onGridRowsUpdated={this.props.handleGridRowsUpdated}
          onGridSort={this.props.handleGridSort}
          onRowClick={this.handleRowClick}
          rowRenderer={RowRenderer}
        />
        <Divider />
        <SelectedRowLayer
          selectedRow={this.props.selectedRow}
          plusProp={this.props.plusProp}
          minusProp={this.props.minusProp}
          handleRowDelete={this.props.handleRowDelete}
        />
      </div>
    );
  }
}

export default onClickOutside(Grid);
