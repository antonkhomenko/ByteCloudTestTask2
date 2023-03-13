import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {NavigationContext, NavigationDispatchContext} from "../contexts/NavigationContext.jsx";
import {getSelectedCountries} from "../helpers/getSelectedCountries.js";
import {CountriesContext} from "../contexts/CountriesContext.jsx";

const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 375px;
  width: 100%;
  padding: 10px 5px;
  margin: 0 auto;
  margin-top: 2%;
  gap: 10px;
  background-color: #fff;
  display: flex;
  font-size: 1rem;
`;

const Btn = styled.button`
  border: none;
  background: none;
  color: blue;
  font-size: 1rem;
  cursor: pointer;
`

const getNavigationTitle = (step) => {
    switch (step) {
        case 1: {
            return 'Where are you users ? Chose the number for every region.';
        }
        case 2: {
            return 'Where is your data ? Chose one spot for Object Storage System';
        }
        case 3: {
            return 'Do you want to'
        }
    }
}



const Navigation = () => {

    const countries = useContext(CountriesContext);
    const step = useContext(NavigationContext);
    const setStep = useContext(NavigationDispatchContext);

    const selectedCountries = getSelectedCountries(countries);

    const handleClick = () => {
        if(selectedCountries.length === 0) return;
        setStep(step + 1);
    }

    return (
        <Wrapper>
            <p>{getNavigationTitle(step)}</p>
            <Btn onClick={handleClick}>Next</Btn>
        </Wrapper>
    );
};

export default Navigation;