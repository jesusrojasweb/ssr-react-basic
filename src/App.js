import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: #05042c;
  font-family: system-ui;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    color: white;
    text-align: center;
    width: 80%;
  }
`;

function App() {
  return (
    <Main>
      <h1>Server Side Rendering con node y express</h1>
    </Main>
  );
}

export default App;
