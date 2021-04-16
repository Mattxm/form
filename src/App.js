import React, {useState, useEffect} from "react"
import styled from "styled-components"
import Form from "./form"
import Form2 from "./form2"

const Format = styled.div`
  padding-top: 25vh;
  background-color: #0d0d0d;
  min-height: 75vh;
  width: 100vw;
  color: white;
  text-align: center;

  h1 {
    font-size: 50px;
  }
`

function App() {
  return (
    <Format>
      <h1>Title</h1>
      <Form2/>
    </Format>
  );
}

export default App;
