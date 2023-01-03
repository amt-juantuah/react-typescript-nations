import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 150px;
    height: 250px;
    background-color: var(--color-elements);
`;

const Country:React.FC = () => {
  return (
    <Container>Country</Container>
  )
}

export default Country