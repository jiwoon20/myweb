import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";
import moment from "moment";

import human from "./human.png";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={human} />
      <Comment.Content>
        <Comment.Author as="a" style = {{color : "white"}}> visitor </Comment.Author>
        <Comment.Metadata >
          <div style = {{color : "white"}}>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text style = {{color : "white"}}>{detail.info.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      inputTime: "",
      commentslist: [],
    };
  }

  render() {
    return (
      <Comment.Group style={{ marginLeft: "550px" }}>
        <Header as="h3" dividing style = {{color : "white"}}>
          Comments
        </Header>

        {this.state.commentslist.map((comments) => (
          <SingleComment info={comments} />
        ))}

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
            onClick={() => {
              if (this.state.inputContent != "") {
                this.setState((prevState) => {
                  return {
                    commentslist: [
                      ...prevState.commentslist,
                      {
                        content: this.state.inputContent,
                        time: moment().format(
                          "YYYY년 MM월 DD일 HH시 mm분 ss초"
                        ),
                      },
                    ],
                    inputContent: "",
                  };
                });
              } else {
                alert("내용을 입력해주세요");
              }
            }}
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
