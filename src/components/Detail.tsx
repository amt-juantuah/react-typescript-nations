import { KeyboardBackspace } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    padding: 45px 80px;
    @media screen and (max-width: 480px) {
        padding: 40px 28px;
    }
`;

const BackButton = styled.button`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    background: var(--color-elements);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.293139);
    border-radius: 6px;
    width: 136px;
    height: 40px;
    outline: none;
    border: none;
    gap: 10px;
    &:hover {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
    };
    @media screen and (max-width: 480px) {
        width: 104px;
        height: 32px;
        border-radius: 2px;
    }
`;

const Word = styled.p`
    font-size: 16px;
    margin-bottom: 10px
    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

const DetailBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    gap: 80px;
    margin-top: 65px;
    @media screen and (max-width: 480px) {
        gap: 40px;
        margin-top: 45px;
    }
`;

const ImageBox = styled.div`
    width: 520px;
    border-radius: 6px;
    height: 340px;
    @media screen and (max-width: 480px) {
        width: 320px;
        height: 229px;
        border-radius: 4px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    @media screen and (max-width: 480px) {
        border-radius: 4px;
    }
`;

const WordBox = styled.div`
    width: 540px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
        padding-top: 0px;
        padding-bottom: 0px;
    }
`;

const Title = styled.h1`
    margin-bottom: 15px;
    font-weight: 800;
    @media screen and (max-width: 480px) {
        font-size: 22px;
        line-height: 30px;
    }
`;

const Summary = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    & ${Word} {
        margin-bottom: 15px;
    }
    @media screen and (max-width: 480px) {
        height: auto;
    }
`;

const MainSummary = styled.div`
    display: flex;
    flex-direction: column;
`;

const OtherSummary = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 480px) {
        margin-top: 20px;
    }
`;

const Neighbours = styled.div`
    height: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
    @media screen and (max-width: 480px) {
        margin-top: 32px;
        margin-bottom: 100px;
        gap: 20px;
    }
`;

const NeighbourButtoms = styled.div`
    height: 28px;
    display: flex;
    flex-flow: row;
    gap: 10px;
`;

const NeighbourButtom = styled.button`
    display: block;
    background: var(--color-elements);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.293139);
    border-radius: 4px;
    transition: all 0.3s;
    height: 28px;
    width: 96px;
    outline: none;
    border: none;
    &:hover {
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.293139);
    };
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`;

const Detail:React.FC = () => {
  return (
    <Container>
        <BackButton>
            <KeyboardBackspace />
            <Word>Back</Word>
        </BackButton>
        <DetailBox>
            <ImageBox><Image src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png' alt='country flag'/></ImageBox>
            <WordBox>
                <Title>Belgium</Title>
                <Summary>
                    <MainSummary>
                        <Word><b>Native Name: </b> Belgie</Word>
                        <Word><b>Population: </b> 121212121212</Word>
                        <Word><b>Region: </b> Europe</Word>
                        <Word><b>Sub Region: </b> Western Europe</Word>
                        <Word><b>Capital: </b> Brussels</Word>
                    </MainSummary>
                    <OtherSummary>
                        <Word><b>Top Level Domain: </b> .be</Word>
                        <Word><b>Currency: </b> Euro</Word>
                        <Word><b>Languages: </b> Dutch, French, German</Word>
                    </OtherSummary>
                </Summary>
                <Neighbours>
                    <b>Border Countries: </b>
                    <NeighbourButtoms>
                        <NeighbourButtom>France</NeighbourButtom>
                        <NeighbourButtom>Germany</NeighbourButtom>
                        <NeighbourButtom>Netherlands</NeighbourButtom>
                    </NeighbourButtoms>
                </Neighbours>
            </WordBox>
        </DetailBox>
    </Container>
  )
}

export default Detail