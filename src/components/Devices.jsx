import React, {useContext} from 'react';
import styled from "styled-components";
import {CountriesContext} from "../contexts/CountriesContext.jsx";
import small from '/src/assets/small.png';
import medium from '/src/assets/medium.png';
import large from '/src/assets/large.png';
import DeviceItem from "./DeviceItem.jsx";
import {getDevicesStyle} from "../helpers/getDevicesStyle.js";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: space-between;
  align-items: center;
`;


const devicesList = [
    {src: small, mask: {width: 80, height: 48, top: 22, left: 10}, name: 'small'},
    {src: medium, mask: {width: 52, height: 72, top: 14, left: 24}, name: 'medium'},
    {src: large, mask: {width: 37, height: 23, top: 28, left: 33, br: '3px'}, name: 'large'},
];

const Devices = ({locationId}) => {

    const countries = useContext(CountriesContext);
    const devicesAmount = countries[locationId].selectedUsers;

    const filteredDevicesList = devicesList.filter((item, index) => index + 1 <= devicesAmount);

    const deviceWrapper = getDevicesStyle(locationId);

    return (
        <Wrapper {...deviceWrapper}>
            {
              filteredDevicesList.map(item => {
                  return <DeviceItem {...item}  wrapper={deviceWrapper} locationId={locationId} deviceAmount={devicesAmount} key={item.name}/>
              })
            }
        </Wrapper>
    );
};

export default Devices;