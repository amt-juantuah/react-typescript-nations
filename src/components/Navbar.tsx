import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    padding-left: 80px;
    padding-right: 80px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-elements);
    position: sticky;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
`;

const Title = styled.h2`
`;

const Mode = styled.span``;

const Navbar:React.FC = () => {
  return (
    <Container>
        <Title>Where in the world</Title>
        <Mode>Dark mode</Mode>
    </Container>
  )
}

export default Navbar