import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {NavigationContext, NavigationDispatchContext} from "../contexts/NavigationContext.jsx";
import {getSelectedCountries} from "../helpers/getSelectedCountries.js";
import {CountriesContext, CountriesDispatchContext} from "../contexts/CountriesContext.jsx";
import {useStep} from "../hooks/useStep.js";


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
  display: ${props => props.active ? 'block' : 'none'};
  
`

const getNavigationTitle = (step, onClick) => {


    switch (step) {
        case 1: {
            return {
                title: 'Where are you users ? Chose the number for every region.',
                btn: 'Next',
                active: true,
            }
        }
        case 2: {
            return {
                title: 'Where is your data ? Chose one spot for Object Storage System',
                btn: "",
                active: false,
            }
        }
        case 3: {
            return {
                title: 'Choose minimum two additional spots for ByteCloud and press',
                btn: "Next",
                active: true,
            }
        }
        case 4: {
            return {
                title: 'Choose minimum two additional spots for ByteCloud and press',
                btn: "Start",
                active: true,
            }
        }
        case 5: {
            return {
                title: '',
                btn: '',
                active: false,
            }
        }
    }
}






const Navigation = () => {

    const countries = useContext(CountriesContext);
    const countriesDispatch = useContext(CountriesDispatchContext);



    const step = useContext(NavigationContext);
    const setStep = useContext(NavigationDispatchContext);

    const selectedCountries = getSelectedCountries(countries);

    const [btnActive, setBtnActive] = useState(true);

    const handleClick = () => {
        if(step === 1) {
            if(selectedCountries.length === 0) return;
        }
        if(step === 3) return;
        setStep(step + 1);
    }

    const data = getNavigationTitle(step);



    useStep(step, countriesDispatch, selectedCountries, setBtnActive);

    return (
        <Wrapper>
            <p>{data.title}</p>
            <Btn
                onClick={handleClick}
                active={data.active}
            >
                {data.btn}
            </Btn>
        </Wrapper>
    );
};

export default Navigation;
