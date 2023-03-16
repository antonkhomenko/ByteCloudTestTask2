import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {getDeviceWrapperStyle} from "../helpers/getDeviceWrapperStyle.js";
import {NavigationContext} from "../contexts/NavigationContext.jsx";
import {getClosestServer} from "../helpers/getClosestServer.js";

const DeviceImg = styled.img`
    max-width: 35px;
    width: 100%;
    height: auto;
    max-height: 100%;
`;

const DeviceWrapper = styled.div`
  max-width: 33%;
  //height: 100%;
  display: flex;
  //align-items: ${props => props.alignItems || 'center'};
  align-self: ${props => props.alignSelf || 'center'};
  margin: ${props => props.margin || '0 0 0 0'};
  position: relative;
  order: ${props => props.order || '0'};
  z-index: 3;
`;

const DeviceMask = styled.div`
  position: absolute;
  //background-color: black;
  border-radius: ${props => `${props.br}` || '0px'};
  width: ${props => `${props.width}%` || '0%'};
  height: ${props => `${props.height}%` || '0%'};
  top: ${props => `${props.top}%` || '0%'};
  left: ${props => `${props.left}%` || '0%'};
  //max-width: 40px;
`;

const DeviceLoader = styled.div`
  height: 100%;
  background-color: #0202b7;
`;





const DeviceItem = (props) => {

    const deviceWrapperStyle = getDeviceWrapperStyle(props.location, props.name, props.deviceAmount);

    const step = useContext(NavigationContext);

    let [loaderWidth, setLoaderWidth] = useState(() => 0);

    useEffect(() => {
        if(step === 8) {
            setLoaderWidth(0);
        }
    }, [step])

    let timer;
    const startInterval = (downloadTime) => {

        let timeout = props.fastDownload ? 1 : 5;

        timer = !timer && setInterval(() => {
            setLoaderWidth(prev => prev + (100 / downloadTime));
        }, timeout);


        if(loaderWidth >= 100) {
            clearInterval(timer);
            props.setIntervalEnd(true);
            props.setDeviceCounter(prev => prev + 1);
        }

    }

    useEffect(() => {

        if(step >= 7) {
            if(props.latency !== 0) {
                const downloadTime = props.latency * 3 - 5;
                startInterval(downloadTime);
            }
        }


        return () => clearInterval(timer);

    }, [step, props.latency, loaderWidth]);



    return (
       <DeviceWrapper {...deviceWrapperStyle}>
           {
               (step >= 7 && props.latency !== 0)
               && (
                   <DeviceMask {...props.mask}>
                        <DeviceLoader style={{width: `${loaderWidth}%`}}/>
                   </DeviceMask>
               )
           }

           <DeviceImg src={props.src} alt={`${props.name}-img`}/>
       </DeviceWrapper>
    );
};

export default DeviceItem;