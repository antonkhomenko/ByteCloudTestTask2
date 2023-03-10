import React, {useContext} from 'react';
import styled from "styled-components";
import {CountriesContext} from "../contexts/CountriesContext.jsx";
import Device1 from "./Device1.jsx";
import Device2 from "./Device2.jsx";
import Device3 from "./Device3.jsx";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
`;



const devicesList = [<Device1/>, <Device2/>, <Device3/>];

const Devices = ({locationId}) => {


    const countries = useContext(CountriesContext);
    const devicesAmount = countries[locationId].selectedUsers;


    return (
        <Wrapper>
            {
                devicesList.filter((item, index) => index + 1 <= devicesAmount)
            }
        </Wrapper>
    );
};

export default Devices;