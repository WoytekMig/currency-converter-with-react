import React from 'react';
import Form from './Form';
import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 40px 20px;
    font-family: 'Archivo Black', sans-serif;
`;

function App() {

  return (
    <MainContainer>
      <Form />
    </MainContainer>
  );
}

export default App;
