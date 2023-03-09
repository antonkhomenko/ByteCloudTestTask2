import React from 'react';
import WorldMap from "./components/WorldMap.jsx";
import Navigation from "./components/Navigation.jsx";



const App = () => {
    return (
        <div style={{border: '5px solid red'}}>
            <Navigation title='Where are your users ? Chose the number for every region.'/>
            <WorldMap/>
        </div>
    );
};

export default App;