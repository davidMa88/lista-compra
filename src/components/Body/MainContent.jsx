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

  handlePlusProp = prop => {
    this.state.selectedRow[prop]++;
    this.setState(this.state.selectedRow);
  };

  handleMinusProp = prop => {
    this.state.selectedRow[prop]--;
    this.setState(this.state.selectedRow);
  };

  onChange = e =>
    this.setState({
      articleToAdd: e.target.value
    });

  addArticle = () => {
    var newarticle = {
      id: this.state.rows.length,
      name:
        this.state.articleToAdd !== ""
          ? this.state.articleToAdd
          : "Name-" + this.state.rows.length,
      count: "1",
      priority: "5"
    };

    var rows = this.state.rows.slice();
    rows.push(newarticle);

    this.setState({ rows });
  };

  rowGetter = i => {
    return this.state.rows[i];
  };

  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };

    const rows = this.props.rows.sort(comparer);
    this.setState({ rows });
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

  handleRowClick = index => {
    const selectedRow = this.rowGetter(index);
    this.setState({ selectedRow });
  };

  deselectRow = () => {
    this.setState({ selectedRow: [] });
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
          <Grid
            articleToAdd={this.state.articleToAdd}
            selectedRow={this.state.selectedRow}
            rows={this.state.rows}
            handleRowClick={this.handleRowClick}
            handleGridRowsUpdated={this.handleGridRowsUpdated}
            handleGridSort={this.handleGridSort}
            rowGetter={this.rowGetter}
            deselectRow={this.deselectRow}
            plusProp={this.handlePlusProp}
            minusProp={this.handleMinusProp}
          />
        </Segment>
      </Sidebar.Pusher>
    );
  }
}

export default MainContent;
