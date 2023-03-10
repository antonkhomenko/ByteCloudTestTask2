import React from 'react';
import styled from "styled-components";


const DeviceImg = styled.img`
    width: 100%;
    height: auto;
`;

const DeviceWrapper = styled.div`
  max-width: 33%;
  height: auto;
  display: flex;
  align-items: flex-end;
  position: relative;
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


const DeviceItem = ({src, ...props}) => {
    return (
       <DeviceWrapper>
           <DeviceMask {...props}/>
           <DeviceImg src={src} alt={`${src}-img`}/>
       </DeviceWrapper>
    );
};

export default DeviceItem;