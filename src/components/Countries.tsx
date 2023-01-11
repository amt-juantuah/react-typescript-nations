import { SearchRounded } from '@mui/icons-material';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Country from './Country';
import axios from 'axios';

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
    border-radius: 5px;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.059);
    &:hover {
        box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.334);
    }
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
    background-color: var(--color-elements);
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

const SelectBox = styled.div`
    background-color: var(--color-elements);
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.059);
    &:hover {
        box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.334);
    }
    border-radius: 5px;
    height: 56px;
    width: 200px;
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (max-width: 480px) {
        height: 48px;
        margin-top: 30px;
      }
`;

const SelectFilter = styled.select`
    background-color: var(--color-elements);
    height: 56px;
    width: 100%;
    border: none;
    outline: none;
    line-height: 20px;
    @media screen and (max-width: 480px) {
        font-size: 12px;
        height: 48px;
      }
`;

const Option = styled.option`
    line-height: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
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
    justify-content: space-between;
    row-gap: 75px;
    column-gap: 48px;
    @media screen and (max-width: 480px) {
        padding-left: 27px;
        padding-right: 27px;
        justify-content: center;
      }
`;

const Word = styled.span`
    text-align: center;
    margin: 30px auto;
`;

type Props = {
    country: UnstructuredObject;
    allCountries: UnstructuredObject[];
}

type UnstructuredObject = {
    [key: string]: any;
}


const Countries: React.FC<Props> = props => {
    const { country, allCountries } = props;

    const [countries, setCountries] = useState(allCountries);
    const [filteredCountries, filteredCountriesSet] = useState(allCountries);
    const [singleCountry, singleCountrySet] = useState(allCountries);
    const [noresults, noresultsSet] = useState(false);
    const [nameCode, nameCodeSet] = useState(country);

    useEffect( () => {
        const getData = async () => {
            try {
                const { data } = await axios.get<typeof allCountries>(
                    "https://restcountries.com/v3.1/all",
                    {
                        headers: {
                            Accept: 'application/json',
                          },
                    }
                );
                setCountries(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    },[]);

    useEffect( () => {
        filteredCountriesSet(countries);
        let names:UnstructuredObject = {};
        countries.forEach(item  => names[item.cca3] = item.name.common);
        
        nameCodeSet(names)
    }, [countries])

    const handleSearch:React.ReactEventHandler<HTMLInputElement> = (ev:SyntheticEvent<HTMLInputElement, Event>) => {
        if (ev.target) {
            const query:string = ((ev.target as HTMLInputElement).value).toUpperCase();
            singleCountrySet(filteredCountries.filter((nation:UnstructuredObject) => (nation.name.common).toUpperCase().includes(query)));
            if (query) {
                noresultsSet(true)
            } else noresultsSet(false)
        }
    }

    const handleFilter:React.ReactEventHandler<HTMLSelectElement> = (ev:SyntheticEvent<HTMLSelectElement, Event>) => {
        if (ev.target) {
            const query:string = ((ev.target as HTMLInputElement).value);
            filteredCountriesSet(countries.filter((nation:UnstructuredObject) => nation.region.includes(query)));
        }
    }

  return (
    <Container>
        <FilterBox>
            <SearchBox>
                <SearchIconBox>
                    <SearchRounded />
                </SearchIconBox>
                <Search type="text" onChange={handleSearch} placeholder="Search for a country..."/>
            </SearchBox>
            <SelectBox>
                <SelectFilter onChange={handleFilter}>
                    <Option value="">Filter by Region</Option>
                    <Option value="Africa">Africa</Option>
                    <Option value="America">America</Option>
                    <Option value="Asia">Asia</Option>
                    <Option value="Europe">Europe</Option>
                    <Option value="Oceania">Oceania</Option>
                </SelectFilter>
            </SelectBox>
        </FilterBox>
        {noresults && <Word>--{singleCountry.length} search results--</Word>}
        <All>
            {
               (singleCountry.length) ? 
                    singleCountry.map((item, index ) => (<Country key={index} country={item} namecodes={nameCode} />))
                    : 
                    filteredCountries.map((item, index )=> (<Country key={index} country={item} namecodes={nameCode} />))
            }
        </All>
    </Container>
  )
} 

export default Countries