import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Countries from '../components/Countries';

const Container = styled.div``;

const Homepage:React.FC = () => {
  return (
    <Container>
        <Navbar />
        <Countries />
    </Container>
  )
}

export default Homepage