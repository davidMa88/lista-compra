import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import update from "immutability-helper";
import {
  Image,
  Segment,
  Sidebar,
  Input,
  Icon,
  Divider
} from "semantic-ui-react";

class MainContent extends Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      { key: "id", name: "Id", width: 80 },
      { key: "name", name: "Nombre" },
      { key: "count", name: "Cantidad", editable: true },
      { key: "priority", name: "Prioridad", editable: true }
    ];
    this.state = {
      articleToAdd: "",
      articles: [],
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

  addArticle = () => {
    var newarticle = {
      id: this.state.rows.length,
      name: this.state.articleToAdd,
      count: 1,
      priority: 5
    };

    var newarticles = this.state.articles.slice();
    newarticles.push(newarticle);

    this.setState({
      articles: newarticles
    });

    this.state.rows.push(newarticle);
  };

  onChange = e =>
    this.setState({
      articleToAdd: e.target.value
    });

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
            minHeight={500}
            onGridRowsUpdated={this.handleGridRowsUpdated}
          />
          {/* {this.state.articles.map((item, i) => <li key={i}>{item}</li>)} */}

          <Divider />
          <Image src="https:react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Sidebar.Pusher>
    );
  }
}

export default MainContent;
