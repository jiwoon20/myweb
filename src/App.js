import React from "react";
import { Button, Image, Divider, Header, Icon, Grid } from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./buttons.js";

import sb from "./sb.jpg";

function App() {
  return (
    <div style = {{backgroundColor : "blue"}}>
      <Grid centered>
        <Grid.Row>
          <Image src={sb} centered />
        </Grid.Row>
        <Grid.Row>
          <Buttons />
        </Grid.Row>
      </Grid>
      <br />

      <Divider horizontal>
        <Header as="h4" style = {{color : "white"}}>
          <Icon name="comment" />
          Leave the Comment
        </Header>
      </Divider>

      <Comments />
      <Divider horizontal>
        <Header as="h4" style = {{color : "white"}}>
          <Icon name="linkify" />
          Contact Me
        </Header>
      </Divider>
      <br />
      <div>
        <Grid centered>
          <Button
            circular
            color="facebook"
            icon="facebook"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100009683314212"
              )
            }
          />
          <Button
            circular
            color="twitter"
            icon="twitter"
            onClick={() => alert("준비중입니다.")}
          />
          <Button
            circular
            color="instagram"
            icon="instagram"
            onClick={() =>
              window.open("https://www.instagram.com/l_ji_woon20/")
            }
          />
          <Button
            circular
            color="google plus"
            icon="google plus"
            onClick={() => alert("준비중입니다.")}
          />
        </Grid>
      </div>
    </div>
  );
}

export default App;
