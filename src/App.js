import React from 'react';
import {Button, Image, Divider, Header, Icon, Grid} from 'semantic-ui-react'

import Comments from "./comment.js"

import sb from "./sb.jpg"


function App() {
  return (
    <div>
    <Grid centered>
    <Grid.Row>
    <Image src = {sb} centered />
    </Grid.Row>

      <Grid.Row>

  <Button
    color='red'
    content='Like'
    icon='heart'
    label={{ basic: true, color: 'red', pointing: 'left', content: '0' }}
  />
  <Button
    basic
    color='blue'
    content='Share'
    icon='fork'
    label={{
      as: 'a',
      basic: true,
      color: 'blue',
      pointing: 'left',
      content: '0',
    }}
  />

    </Grid.Row>
</Grid>
<br/>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='comment' />
        Leave the Comment
      </Header>
    </Divider>

  <Comments />
  <Divider horizontal>
    <Header as='h4'>
      <Icon name='linkify' />
      Contact Me
    </Header>
  </Divider>
  <br/>
  <div>
  <Grid centered>
  <Button circular color='facebook' icon='facebook' />
  <Button circular color='twitter' icon='twitter' />
  <Button circular color='youtube' icon='youtube' />
  <Button circular color='google plus' icon='google plus' />
  </Grid>
  </div>


    </div>
  );
}

export default App;
