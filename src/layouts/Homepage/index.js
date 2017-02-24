import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: cyan;
  width: 400px;

  @media (min-width: 768px) {
    width: 600px;
  }
`;

const Homepage = () => (
  <Container>
    Home
  </Container>
);

export default Homepage;
