import React, {useContext, useEffect, useState} from 'react';
import WorldMap from "./components/WorldMap.jsx";
import Navigation from "./components/Navigation.jsx";
import {CountriesContext, CountriesProvider} from "./contexts/CountriesContext.jsx";
import {NavigationContext, NavigationDispatchContext, NavigationProvider} from "./contexts/NavigationContext.jsx";



const App = () => {


    return (
        <div style={{border: '5px solid red'}}>
            <NavigationProvider>
                <CountriesProvider>
                    <Navigation/>
                    <WorldMap />
                </CountriesProvider>
            </NavigationProvider>
        </div>
    );
};

export default App;