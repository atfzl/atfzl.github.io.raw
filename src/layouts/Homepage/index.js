import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: cyan;

  @media (min-width: 600px) {
    width: 400px;
  }

  @media (min-width: 800px) {
    width: 600px;
  }
`;

const Homepage = () => {
  return (
    <Container>
      Home
    </Container>
  )
};

export default Homepage;
