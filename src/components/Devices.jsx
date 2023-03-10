import React, {useContext} from 'react';
import {CountriesContext} from "../contexts/CountriesContext.jsx";

const Devices = ({locationId}) => {

    const countries = useContext(CountriesContext);
    const devicesAmount = countries[locationId].selectedUsers;


    return (
        <div>
            devices {devicesAmount}
        </div>
    );
};

export default Devices;