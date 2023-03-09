import React from 'react';
import WorldMap from "./components/WorldMap.jsx";
import Navigation from "./components/Navigation.jsx";
import {CountriesProvider} from "./contexts/CountriesContext.jsx";



const App = () => {
    return (
        <div style={{border: '5px solid red'}}>
            <Navigation title='Where are your users ? Chose the number for every region.'/>
            <CountriesProvider>
                <WorldMap/>
            </CountriesProvider>
        </div>
    );
};

export default App;