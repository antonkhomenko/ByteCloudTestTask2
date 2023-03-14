import React, {useContext} from 'react';
import styled from "styled-components";
import {CountriesContext} from "../contexts/CountriesContext.jsx";
import DeviceItem from "./DeviceItem.jsx";
import {getDevicesStyle} from "../helpers/getDevicesStyle.js";
import {getDeviceList} from "../helpers/getDeviceList.js";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'space-between'};
  gap: ${props => props.gap || '0'};
  align-items: center;
`;





const Devices = ({locationId, location}) => {

    const countries = useContext(CountriesContext);
    const devicesAmount = countries[locationId].selectedUsers;

    const deviceList = getDeviceList(location, devicesAmount);


    const deviceWrapper = getDevicesStyle(location);




    return (
        <Wrapper {...deviceWrapper}>
            {
              deviceList.map(item => {
                  return <DeviceItem {...item}  location={location} wrapper={deviceWrapper} locationId={locationId} deviceAmount={devicesAmount} key={item.name}/>
              })
            }
        </Wrapper>
    );
};

export default Devices;