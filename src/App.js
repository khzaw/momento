import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';
import './App.css';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function App() {
  return (
    <Main>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </Main>
  );
}

export default App;
