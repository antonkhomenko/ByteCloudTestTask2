import React, {useContext, useEffect, useRef, useState} from 'react';
import WorldMap from "./components/WorldMap.jsx";
import Navigation from "./components/Navigation.jsx";
import {CountriesContext, CountriesProvider} from "./contexts/CountriesContext.jsx";
import {NavigationContext, NavigationDispatchContext, NavigationProvider} from "./contexts/NavigationContext.jsx";



const App = () => {

    const resultTable= {objectStorage: [], byteCloud: []};


    return (
        <div>
            <NavigationProvider>
                <CountriesProvider>
                    <Navigation/>
                    <WorldMap resultTable={resultTable}/>
                </CountriesProvider>
            </NavigationProvider>
        </div>
    );
};

export default App;