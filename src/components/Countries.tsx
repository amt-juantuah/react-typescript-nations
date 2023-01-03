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
    background-color: var(--color-elements);
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
`;

const Search = styled.input`
    border: none;
    outline: none;
    flex: 5;
    height: 100%;
`;

const SearchIconBox = styled.div`
    flex: 1;
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
`;

const Option = styled.option``;

const All = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`;

const Countries:React.FC = () => {
  return (
    <Container>
        <FilterBox>
            <SearchBox>
                <SearchIconBox>
                    <SearchRounded />
                </SearchIconBox>
                <Search type="text" placeholder="Search for a country"/>
            </SearchBox>
            <SelectFilter>
                <Option>Filter by region</Option>
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