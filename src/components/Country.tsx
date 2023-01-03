import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 264px;
    height: 336px;
    background-color: var(--color-elements);
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
    border-radius: 5px;
`;

const Flag = styled.div`
    background-color: red;
    width: 100%;
    height: 160px;
    border-radius: 5px 5px 0 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const About = styled.div`
    width: 100%;
    padding-top: 24px;
    padding-left: 24px;
    height: calc(100% - 160px);
`;

const SubTitle = styled.h3`
    margin-bottom: 16px;
`;

const WordBox = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 64px;
`;

const Words = styled.p``;

/**
 * Country data
*/
// type CountryProps = {
//     flag: string;
// }

const Country:React.FC = () => {
  return (
    <Container>
        <Flag>
            <Image src="https://restcountries.com/data/png/jpn.png" />
        </Flag>
        <About>
            <SubTitle>Germany</SubTitle>
            <WordBox>
                <Words><b>Population: </b> 21322323223</Words>
                <Words><b>Region: </b> Europe</Words>
                <Words><b>Capital: </b> Berlin</Words>
            </WordBox>
        </About>
    </Container>
  )
}

export default Country