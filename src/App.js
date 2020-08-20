import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from "./comment.js"

import sb from "./sb.jpg"


function App() {
  return (
    <div>
    <Image src = {sb} centered />
    <Comments />


    </div>
  );
}

export default App;
