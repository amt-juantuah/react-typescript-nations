import { SearchRounded } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Country from './Country';

const Container = styled.div`
    width: 100vw;
    height: auto;
    padding: 48px 81px;
    display: flex;
    flex-flow: column;
    @media screen and (max-width: 480px) {
        padding-left: 28px;
        padding-right: 28px;
      }
`;

const FilterBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 48px;
`;

const SearchBox = styled.div`
    height: 56px;
    width: 480px;
    display: flex;
    background-color: var(--color-elements);
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    @media screen and (max-width: 480px) {
        height: 48px;
        width: 343px;
    }
`;

const Search = styled.input`
    border: none;
    outline: none;
    flex: 1;
    height: 100%;
    width: 100%;
    &::placeholder {
        color: #C4C4C4;
        font-size: 12px;
    }
`;

const SearchIconBox = styled.div`
    flex: 0.2;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`;

const SelectFilter = styled.select`
    background-color: var(--color-elements);
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    height: 56px;
    width: 200px;
    border: none;
    outline: none;
    padding-left: 20px;
    line-height: 20px;
    padding-right: 20px;
    @media screen and (max-width: 480px) {
        font-size: 12px;
        height: 48px;
        margin-top: 30px;
      }
`;

const Option = styled.option`
    line-height: 20px;
    @media screen and (max-width: 480px) {
        font-size: 12px;
        margin-top: 10px;
      }
`;

const All = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    row-gap: 75px;
    column-gap: 48px;
    @media screen and (max-width: 480px) {
        padding-left: 27px;
        padding-right: 27px;
      }
`;

const Countries:React.FC = () => {
  return (
    <Container>
        <FilterBox>
            <SearchBox>
                <SearchIconBox>
                    <SearchRounded />
                </SearchIconBox>
                <Search type="text" placeholder="Search for a country..."/>
            </SearchBox>
            <SelectFilter>
                <Option>Filter by Region</Option>
                <Option>Africa</Option>
                <Option>America</Option>
                <Option>Asia</Option>
                <Option>Europe</Option>
                <Option>Oceania</Option>
            </SelectFilter>
        </FilterBox>
        <All>
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
        </All>
    </Container>
  )
}

export default Countries