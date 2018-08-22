import React, { Component } from "react";
import { Segment, Sidebar, Input, Icon, Divider } from "semantic-ui-react";
import update from "immutability-helper";
import Grid from "./Grid";

class MainContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      articleToAdd: "",
      selectedRow: [],
      rows: []
    };
  }

  //---------------------------------------------------------------------------------//
  //-----------------------------  GRID - events/funcs  -----------------------------//
  //---------------------------------------------------------------------------------//
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

  handleRowDelete = () => {
    var rows = this.state.rows.slice();
    var selected = this.state.selectedRow;
    var index = rows.findIndex(r => r.id == selected.id);
    rows.splice(index, 1);
    selected = [];
    this.setState({ rows, selectedRow: selected });
  };

  handleRowDeselect = () => {
    this.setState({ selectedRow: [] });
  };

  rowGetter = i => {
    return this.state.rows[i];
  };

  plusProp = prop => {
    this.state.selectedRow[prop]++;
    this.setState(this.state.selectedRow);
  };

  minusProp = prop => {
    this.state.selectedRow[prop]--;
    this.setState(this.state.selectedRow);
  };

  //--------------------------------------------------------------------------------//
  //----------------------------  INPUT - events/funcs  ----------------------------//
  //--------------------------------------------------------------------------------//
  onChange = e =>
    this.setState({
      articleToAdd: e.target.value
    });

  addArticle = () => {
    var newarticle = {
      id:
        this.state.rows.length > 0
          ? this.state.rows[this.state.rows.length - 1].id + 1
          : 0,
      name:
        this.state.articleToAdd !== ""
          ? this.state.articleToAdd
          : "Name-" + this.state.rows.length,
      count: 1,
      priority: 5
    };

    var rows = this.state.rows.slice();
    rows.push(newarticle);

    this.setState({ rows });
  };

  //--------------------------------------------------------------------------------//

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
          <Grid
            {...this.state}
            handleGridRowsUpdated={this.handleGridRowsUpdated}
            handleGridSort={this.handleGridSort}
            handleRowClick={this.handleRowClick}
            handleRowDelete={this.handleRowDelete}
            handleRowDeselect={this.handleRowDeselect}
            rowGetter={this.rowGetter}
            plusProp={this.plusProp}
            minusProp={this.minusProp}
          />
        </Segment>
      </Sidebar.Pusher>
    );
  }
}

export default MainContent;
