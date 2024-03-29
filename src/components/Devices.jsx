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



const Devices = ({locationId, location, arcsData, setCounter, resultTable, }) => {

    const countries = useContext(CountriesContext);
    const devicesAmount = countries[locationId].selectedUsers;
    const step = useContext(NavigationContext);

    const deviceList = getDeviceList(location, devicesAmount);

    const [intervalEnd, setIntervalEnd] = useState(false);


    const deviceWrapper = getDevicesStyle(location);

    const [latency, setLatency] = useState(0);

    const [fastDownload, setFastDownload] = useState(true);

    const [deviceCounter, setDeviceCounter] = useState(0);

    useEffect(() => {
        if(deviceCounter === devicesAmount) {
            setCounter(prev => prev + 1);
        }
    }, [deviceCounter]);




    useEffect(() => {
        if(step === 7) {
            const {countries, storage} = arcsData;
            const dataNames = new Map();
            getClosestServer(storage, countries).forEach(item => {
                dataNames.set(item[0].name, item[1].name);
            });
            const latency = getLatency(location, dataNames.get(location));
            setLatency(latency);
            resultTable.byteCloud.push({name: location, latency: latency});
            setFastDownload(calculateDownload(location, dataNames.get(location)));
        }
        if(step === 8) {
            setIntervalEnd(false);
            const objectStorage = arcsData.storage.find(item => item.objectStorage === true).name;
            const latency = getLatency(location, objectStorage);
            setLatency(latency);
            resultTable.objectStorage.push({name: location, latency: latency});
            setFastDownload(calculateDownload(location, objectStorage));
            setDeviceCounter(0);

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
                          intervalEnd={intervalEnd} setIntervalEnd={setIntervalEnd}
                          setDeviceCounter={setDeviceCounter}
                      />
                  )
              })
            }
            {
                step >= 7 && <LatencyWrapper>
                    {intervalEnd ? `Time: ${Math.round(latency * 3 - 5)}ms` : `Latency ${latency}`}
                </LatencyWrapper>
            }
        </Wrapper>
    );
};

export default Devices;