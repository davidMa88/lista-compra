import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import update from "immutability-helper";
import SelectedRowLayer from "./SelectedRowLayer";
import { Segment, Sidebar, Input, Icon, Divider } from "semantic-ui-react";

class MainContent extends Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      { key: "id", name: "Id", width: 80, sortable: true },
      { key: "name", name: "Nombre", editable: true, sortable: true },
      { key: "count", name: "Cantidad", editable: true, sortable: true },
      { key: "priority", name: "Prioridad", editable: true, sortable: true }
    ];
    this.state = {
      articleToAdd: "",
      selectedRow: [],
      rows: []
    };
  }

  rowGetter = i => {
    return this.state.rows[i];
  };

  handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, { $merge: updated });
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  };

  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };

    const rows = this.state.rows.sort(comparer);
    this.setState({ rows });
  };

  handleRowClick = index => {
    const selectedRow = this.rowGetter(index);
    this.setState({ selectedRow });
  };

  // onRowsSelected = rows => {
  //   this.setState({
  //     selectedIndexes: this.state.selectedIndexes.concat(
  //       rows.map(r => r.rowIdx)
  //     )
  //   });
  // };

  // onRowsDeselected = rows => {
  //   let rowIndexes = rows.map(r => r.rowIdx);
  //   this.setState({
  //     selectedIndexes: this.state.selectedIndexes.filter(
  //       i => rowIndexes.indexOf(i) === -1
  //     )
  //   });
  // };

  onChange = e =>
    this.setState({
      articleToAdd: e.target.value
    });

  addArticle = () => {
    var newarticle = {
      id: this.state.rows.length,
      name: this.state.articleToAdd,
      count: "1",
      priority: "5"
    };

    var rows = this.state.rows.slice();
    rows.push(newarticle);

    this.setState({ rows });
  };

  render() {
    return (
      <Sidebar.Pusher>
        <Segment basic>
          <Input
            icon={<Icon name="add" add link onClick={this.addArticle} />}
            placeholder="Añade un elemento"
            onChange={this.onChange}
          />
          <Divider />
          <ReactDataGrid
            enableCellSelect={true}
            columns={this._columns}
            rowGetter={this.rowGetter}
            rowsCount={this.state.rows.length}
            minHeight={400}
            onGridRowsUpdated={this.handleGridRowsUpdated}
            onGridSort={this.handleGridSort}
            onRowClick={this.handleRowClick}
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
          {/* {this.state.articles.map((item, i) => <li key={i}>{item}</li>)} */}
          <Divider />
          <SelectedRowLayer selectedRow={this.state.selectedRow} />
        </Segment>
      </Sidebar.Pusher>
    );
  }
}

export default MainContent;
