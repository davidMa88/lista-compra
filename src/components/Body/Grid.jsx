import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import SelectedRowLayer from "../Pops/SelectedRowLayer";
import onClickOutside from "react-onclickoutside";
import { Divider } from "semantic-ui-react";

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
      articleToAdd: this.props.articleToAdd,
      selectedRow: this.props.selectedRow,
      rows: this.props.rows
    };
  }

  handleClickOutside = e => {
    this.props.deselectRow();
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
          onRowClick={this.props.handleRowClick}
          // rowSelection={{
          //   showCheckbox: false,
          //   enableShiftSelect: true,
          //   onRowsSelected: this.onRowsSelected,
          //   onRowsDeselected: this.onRowsDeselected,
          //   selectBy: {
          //     indexes: this.state.selectedIndexes
          //   }
          // }}
        />
        <Divider />
        <SelectedRowLayer
          selectedRow={this.props.selectedRow}
          plusProp={this.props.plusProp}
          minusProp={this.props.minusProp}
        />
      </div>
    );
  }
}

export default onClickOutside(Grid);
