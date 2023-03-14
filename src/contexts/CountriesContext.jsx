import {createContext, useReducer, useState} from "react";
import {getLocationStyle} from "../helpers/getLocationStyle.js";

export const CountriesContext = createContext(null);
export const CountriesSelectedContext = createContext(0);
export const CountriesDispatchContext = createContext(null);

export const CountriesProvider = ({children}) => {

    const [countries, dispatchCountries] = useReducer(countriesReducer, initValue);


    return (
        <CountriesContext.Provider value={countries}>
            <CountriesDispatchContext.Provider value={dispatchCountries}>
                {children}
            </CountriesDispatchContext.Provider>
        </CountriesContext.Provider>
    )
}

const countriesReducer = (countries, action) => {
    switch(action.type) {
        case "showDevices": {
            return countries.map((item, index) => {
                if(index === action.id) {
                    const newItem = getLocationStyle(index);
                    return {...newItem, showDevices: true}
                }
                return item;
            });
        }
        case "setDevicesAmount": {
            return countries.map((item, index) => {
                if(index === action.id) {
                    return {...item, selectedUsers: action.amount};
                }
                return item;
            })
        }
        case 'filterCountries': {
            return action.countries.map(item => {
                return {...item, showStorage: true}
            })
        }
        // case 'showStorage': {
        //     return countries.map(item => {
        //         return {...item, showStorage: true}
        //     });
        // }
    }
}


const initValue = [
    {top: '35%', left: '15%', name: "NorthAmerica", showDevice: false, selectedUsers: 0, showStorage: false},
    {top: '64%', left: '26%', name: 'SouthAmerica', showDevice: false, selectedUsers: 0, showStorage: false},
    {top: '30%', left: '47%', name: 'Europe', showDevice: false, selectedUsers: 0, showStorage: false},
    {top: '42%', left: '68%', name: 'Asia', showDevice: false, selectedUsers: 0, showStorage: false},
    {top: '70%', left: '76%', name: 'Australia', showDevice: false, selectedUsers: 0, showStorage: false},
];