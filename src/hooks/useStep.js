import {useContext, useEffect} from "react";
import {NavigationContext} from "../contexts/NavigationContext.jsx";
import {CountriesDispatchContext} from "../contexts/CountriesContext.jsx";

export const useStep = (step, countriesDispatch, selectedCountries, setBtnActive) => {


    useEffect(() => {
        switch(step) {
            case 2: {
                countriesDispatch({
                    type: 'filterCountries',
                    countries: selectedCountries,
                });
                setBtnActive(false);
                break;
            }
            case 3: {
                setBtnActive(true);
            }
            // case 5: {
            //
            // }
        }
    }, [step]);
}