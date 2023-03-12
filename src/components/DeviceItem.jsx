import React from 'react';
import styled from "styled-components";
import {getDeviceWrapperStyle} from "../helpers/getDeviceWrapperStyle.js";


const DeviceImg = styled.img`
    max-width: 40px;
    width: 100%;
    height: auto;
    max-height: 100%;
`;

const DeviceWrapper = styled.div`
  max-width: 33%;
  height: 100%;
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  align-self: ${props => props.alignSelf || 'center'};
  position: relative;
  order: ${props => props.order || '0'}
`;

const DeviceMask = styled.div`
  position: absolute;
  background-color: black;
  border-radius: ${props => `${props.br}` || '0px'};
  width: ${props => `${props.width}%` || '0%'};
  height: ${props => `${props.height}%` || '0%'};
  top: ${props => `${props.top}%` || '0%'};
  left: ${props => `${props.left}%` || '0%'};
`;


const DeviceItem = (props) => {

    const deviceWrapperStyle = getDeviceWrapperStyle(props.locationId, props.name);

    return (
       <DeviceWrapper {...deviceWrapperStyle}>
           {/*<DeviceMask {...props.props}/>*/}
           <DeviceImg src={props.src} alt={`${props.name}-img`}/>
       </DeviceWrapper>
    );
};

export default DeviceItem;