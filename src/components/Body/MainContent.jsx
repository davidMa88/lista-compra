import React, { Component } from "react";
import {
  Header,
  Image,
  Segment,
  Sidebar,
  Input,
  Icon,
  Divider,
  Form,
  Label
} from "semantic-ui-react";

class MainContent extends Component {
  state = {
    articles: {
      name: ""
    }
  };

  addArticle = () => {
    console.log("hi!");
  };

  render() {
    return (
      <Sidebar.Pusher>
        <Segment basic>
          <Input
            icon={<Icon onClick={this.addArticle} name="add" plus link icon />}
            placeholder="Añade un elemento"
          />
          <Divider />
          <Image src="https:react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </Sidebar.Pusher>
    );
  }
}

export default MainContent;
