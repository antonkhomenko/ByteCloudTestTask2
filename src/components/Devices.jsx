import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {CountriesContext} from "../contexts/CountriesContext.jsx";
import DeviceItem from "./DeviceItem.jsx";
import {getDevicesStyle} from "../helpers/getDevicesStyle.js";
import {getDeviceList} from "../helpers/getDeviceList.js";
import {NavigationContext} from "../contexts/NavigationContext.jsx";
import {getClosestServer} from "../helpers/getClosestServer.js";
import {getLatency} from "../helpers/getLatency.js";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'space-between'};
  gap: ${props => props.gap || '0'};
  align-items: center;
`;


const LatencyWrapper = styled.div`
  padding: 5px 10px;
  position: absolute;
  background-color: black;
  color: white;
  bottom: -34%;
  left: 36px;
  font-size: 0.8rem;
`;



const Devices = ({locationId, location, arcsData}) => {

    const countries = useContext(CountriesContext);
    const devicesAmount = countries[locationId].selectedUsers;
    const step = useContext(NavigationContext);

    const deviceList = getDeviceList(location, devicesAmount);


    const deviceWrapper = getDevicesStyle(location);

    const [latency, setLatency] = useState(0);

    const [fastDownload, setFastDownload] = useState(true);

    useEffect(() => {
        if(step >= 7) {
            const {countries, storage} = arcsData;
            const dataNames = new Map();
            getClosestServer(storage, countries).forEach(item => {
                dataNames.set(item[0].name, item[1].name);
            });
            setLatency(getLatency(location, dataNames.get(location)));
            setFastDownload(calculateDownload(location, dataNames.get(location)));

        }
    }, [step]);

    const calculateDownload = (country, storage) => {
        if(storage === 'NorthAmerica1' || storage === 'NorthAmerica2' && country === 'NorthAmerica') return true;
        else return country.includes(storage);
    }

    return (
        <Wrapper {...deviceWrapper}>
            {
              deviceList.map(item => {
                  return (
                      <DeviceItem
                          {...item}  location={location} wrapper={deviceWrapper}
                          locationId={locationId} deviceAmount={devicesAmount}
                          key={item.name} latency={latency} fastDownload={fastDownload}
                      />
                  )
              })
            }
            {
                step >= 7 && <LatencyWrapper>Latency {latency}</LatencyWrapper>
            }
        </Wrapper>
    );
};

export default Devices;