import React, {useContext} from 'react';
import styled from "styled-components";
import {CountriesContext} from "../contexts/CountriesContext.jsx";
import small from '/src/assets/small.png';
import medium from '/src/assets/medium.png';
import large from '/src/assets/large.png';
import DeviceItem from "./DeviceItem.jsx";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
`;


let devicesListId= 0;

const devicesList = [
    {src: small, props: {width: 80, height: 48, top: 22, left: 10}, id: devicesListId++},
    {src: medium, props: {width: 52, height: 72, top: 14, left: 24}, id: devicesListId++},
    {src: large, props: {width: 37, height: 23, top: 28, left: 33, br: '3px'}, id: devicesListId++},
];

const Devices = ({locationId}) => {


    const countries = useContext(CountriesContext);
    const devicesAmount = countries[locationId].selectedUsers;

    const filteredDevicesList = devicesList.filter((item, index) => index + 1 <= devicesAmount);

    return (
        <Wrapper>
            {
              filteredDevicesList.map(item => {
                  const props = item.props;
                  return <DeviceItem src={item.src} {...props} key={item.id}/>
              })
            }
        </Wrapper>
    );
};

export default Devices;