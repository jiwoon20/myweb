import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";

import human from "./human.png";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={human} />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      commentslist: [],
    };
  }

  render() {
    return (
      <Comment.Group style={{ marginLeft: "550px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        {this.state.commentslist.map(comments => <SingleComment content = {comments}/> )}

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글을 입력해주세요"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() =>
              this.setState((prevState) => {
                return {
                  commentslist: [...prevState.commentslist, this.state.inputContent],
                };
              })
            }
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
